import { PrismaService } from 'src/prisma.service';
import { Injectable } from '@nestjs/common';
import { Blog } from './blog.model';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Blog[]> {
    return this.prisma.blog.findMany();
  }

  async getOne(id: number): Promise<Blog | null> {
    return this.prisma.blog.findUnique({ where: { id: Number(id) } });
  }

  async create(data: Blog): Promise<Blog> {
    return this.prisma.blog.create({
      data,
    });
  }

  async update(id: number, data: Blog): Promise<Blog> {
    return this.prisma.blog.update({
      where: { id: Number(id) },
      data: {
        title: data.title,
        content: data.content,
      },
    });
  }

  async delete(id: number): Promise<Blog> {
    return this.prisma.blog.delete({ where: { id: Number(id) } });
  }
}
