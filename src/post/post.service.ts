import { Injectable } from "@nestjs/common";
import { Create_postDto } from "./dto/create_post.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Post } from "./post.model";

@Injectable()
export class PostService {
    constructor(@InjectModel(Post) private postRepository: typeof Post) {}
    async createPost(dto: Create_postDto, image: string) {
        const fileName = "test";
        const post = await this.postRepository.create({ ...dto, image: fileName });
        return post;
    }
}
