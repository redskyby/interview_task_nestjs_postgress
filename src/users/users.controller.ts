import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';
import { UsersService } from "./users.service";
import { Create_userDto } from "./dto/create_user.dto";
import { Jwt_authGuard } from '../auth/jwt_auth.guard';

@Controller("/users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() userDto: Create_userDto) {
        return this.usersService.createUser(userDto);
    }

    @UseGuards(Jwt_authGuard)
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }
}
