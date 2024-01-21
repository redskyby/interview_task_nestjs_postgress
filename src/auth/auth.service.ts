import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { Create_userDto } from "../users/dto/create_user.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import * as bcript from "bcryptjs";
import { User } from "../users/users.model";

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService,
    ) {}
    async login(userDto: Create_userDto) {
        const user = await this.validateUser(userDto);
        return this.generateToken(user);
    }

    async registration(userDto: Create_userDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email);
        if (candidate) {
            throw new HttpException("Пользователь с таким email существует", HttpStatus.BAD_REQUEST);
        }

        const hashPassword = await bcript.hash(userDto.password, 5);
        const user = await this.userService.createUser({ ...userDto, password: hashPassword });
        return this.generateToken(user);
    }

    async generateToken(user: User) {
        const payLoad = { email: user.email, id: user.id, roles: user.roles };
        return {
            token: this.jwtService.sign(payLoad),
        };
    }

    private async validateUser(userDto: Create_userDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        const passwordEquals = await bcript.compare(userDto.password, user.password);
        if (user && passwordEquals) {
            return user;
        }
        throw new UnauthorizedException({ message: "Некорректный email или пароль." });
    }
}
