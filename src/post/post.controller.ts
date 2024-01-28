import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { PostService } from "./post.service";
import { Create_postDto } from "./dto/create_post.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("post")
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Post()
    @UseInterceptors(FileInterceptor("image"))
    createPost(@Body() dto: Create_postDto, @UploadedFile() image) {
        return this.postService.createPost(dto, image);
    }
}
