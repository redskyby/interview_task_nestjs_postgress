import { Body, Controller, Post, Get, UseGuards, UsePipes } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Create_userDto } from "./dto/create_user.dto";
import { RolesGuard } from "../auth/roles.guard";
import { Roles } from "../auth/roles_auth.decorator";
import { Add_roleDto } from "./dto/add_role.dto";
import { Ban_userDto } from "./dto/ban_user.dto";
import { ValidationPipe } from "../pipes/validation.pipe";

@Controller("/users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() userDto: Create_userDto) {
        return this.usersService.createUser(userDto);
    }

    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post("/role")
    addRole(@Body() dto: Add_roleDto) {
        return this.usersService.addRole(dto);
    }

    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post("/ban")
    ban(@Body() dto: Ban_userDto) {
        return this.usersService.ban(dto);
    }
}
