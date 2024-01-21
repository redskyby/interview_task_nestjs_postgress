import { Body, Controller, Post, Get } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Create_userDto } from "./dto/create_user.dto";

@Controller("/users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() userDto: Create_userDto) {
        return this.usersService.createUser(userDto);
    }

    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }
}
