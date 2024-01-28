import { Injectable } from "@nestjs/common";
import { Create_postDto } from "./dto/create_post.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Post } from "./post.model";
import { FilesService } from "../files/files.service";

@Injectable()
export class PostService {
    constructor(
        @InjectModel(Post) private postRepository: typeof Post,
        private fileService: FilesService,
    ) {}
    async createPost(dto: Create_postDto, image: string) {
        const fileName = await this.fileService.createFile(image);
        const post = await this.postRepository.create({ ...dto, image: fileName });
        return post;
    }
}
