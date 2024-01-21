import { Injectable } from "@nestjs/common";
import { User } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";
import { Create_userDto } from "./dto/create_user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User) {}

    async createUser(dto: Create_userDto) {
        return await this.userRepository.create(dto);
    }

    async getAllUsers() {
        return await this.userRepository.findAll();
    }
}
