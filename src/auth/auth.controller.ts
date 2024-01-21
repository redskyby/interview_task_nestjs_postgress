import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Create_userDto } from "../users/dto/create_user.dto";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("/login")
    login(@Body() userDto: Create_userDto) {
        return this.authService.login(userDto);
    }
    @Post("/registration")
    registration(@Body() userDto: Create_userDto) {
        return this.authService.registration(userDto);
    }
}
