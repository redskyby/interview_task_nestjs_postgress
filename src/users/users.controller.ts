import { Body, Controller, Post, Get, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Create_userDto } from "./dto/create_user.dto";
import { Jwt_authGuard } from "../auth/jwt_auth.guard";
import { RolesGuard } from "../auth/roles.guard";
import { Roles } from "../auth/roles_auth.decorator";

@Controller("/users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() userDto: Create_userDto) {
        return this.usersService.createUser(userDto);
    }

    // @UseGuards(Jwt_authGuard)
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }
}
