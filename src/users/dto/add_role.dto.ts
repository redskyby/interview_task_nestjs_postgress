import { IsNumber, IsString } from "class-validator";

export class Add_roleDto {
    @IsString({ message: "Должно быть строкой" })
    readonly value: string;
    @IsNumber({}, { message: "Должно быть числом" })
    readonly userId: number;
}
