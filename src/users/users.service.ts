import { Injectable } from "@nestjs/common";
import { User } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";
import { Create_userDto } from "./dto/create_user.dto";
import { RolesService } from "../roles/roles.service";

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
        return user;
    }

    async getAllUsers() {
        return await this.userRepository.findAll({ include: { all: true } });
    }
}
