import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as fs from "fs";
import * as path from "path";
@Injectable()
export class FilesService {
    async createFile(file): Promise<string> {
        try {
        } catch (e) {
            throw new HttpException("Произошла ошибка при записи файла", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
