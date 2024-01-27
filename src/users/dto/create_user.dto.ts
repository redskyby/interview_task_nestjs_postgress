import { IsEmail, IsString, Length } from "class-validator";

export class Create_userDto {
    @IsString({ message: "Должно быть строкой" })
    @IsEmail({}, { message: "Некорректный email" })
    readonly email: string;
    @IsString({ message: "Должно быть строкой" })
    @Length(5, 16, { message: "Не меньше 4 и не больше 16." })
    readonly password: string;
}
