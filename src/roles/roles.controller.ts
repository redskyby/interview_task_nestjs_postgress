import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { Create_roleDto } from "./dto/create_role.dto";

@Controller("roles")
export class RolesController {
    constructor(private readonly rolesService: RolesService) {}
    @Post()
    create(@Body() dto: Create_roleDto) {
        return this.rolesService.createRole(dto);
    }
    @Get("/:value")
    getByValue(@Param("value") value: string) {
        return this.rolesService.getRoleByValue(value);
    }
}
