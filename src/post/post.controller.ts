import { Body, Controller, Post, UploadedFile } from "@nestjs/common";
import { PostService } from "./post.service";
import { Create_postDto } from "./dto/create_post.dto";

@Controller("post")
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Post()
    createPost(@Body() dto: Create_postDto, @UploadedFile() image) {
        return this.postService.createPost(dto, image);
    }
}
