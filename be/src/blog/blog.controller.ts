import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from './blog.model';

@Controller('api/blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async getall() {
    return this.blogService.getAll();
  }

  @Post()
  async create(@Body() postData: Blog) {
    return this.blogService.create(postData);
  }

  @Get(':id')
  async get(@Param('id') id: number): Promise<Blog> {
    return this.blogService.getOne(id);
  }

  @Put(':id')
  async put(@Param('id') id: number, @Body() body: Blog): Promise<Blog> {
    await this.blogService.update(id, body);

    return this.blogService.getOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<Blog> {
    return this.blogService.delete(id);
  }
}
