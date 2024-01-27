import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { User } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";
import { Create_userDto } from "./dto/create_user.dto";
import { RolesService } from "../roles/roles.service";
import { Add_roleDto } from "./dto/add_role.dto";
import { Ban_userDto } from "./dto/ban_user.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User) private userRepository: typeof User,
        private roleService: RolesService,
    ) {}

    async createUser(dto: Create_userDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue("USER");
        await user.$set("roles", [role.id]);
        user.roles = [role];
        return user;
    }

    async getAllUsers() {
        return await this.userRepository.findAll({ include: { all: true } });
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({ where: { email }, include: { all: true } });
        return user;
    }

    async addRole(dto: Add_roleDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);

        if (role && user) {
            await user.$add("role", role.id);
            return dto;
        }

        throw new HttpException("Пользователь не найден", HttpStatus.NOT_FOUND);
    }

    async ban(dto: Ban_userDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        if(!user){
            throw new HttpException("Пользователь не найден", HttpStatus.NOT_FOUND);
        }
        user.banned = true;
        user.banReason = dto.banReason;
        await user.save();
        return user;
    }
}
