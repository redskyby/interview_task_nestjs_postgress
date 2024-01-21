import { Injectable } from "@nestjs/common";
import { Create_roleDto } from "./dto/create_role.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Role } from "./roles.model";

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

    async createRole(dto: Create_roleDto) {
        return await this.roleRepository.create(dto);
    }

    async getRoleByValue(value: string) {
        return await this.roleRepository.findOne({ where: { value } });
    }
}
