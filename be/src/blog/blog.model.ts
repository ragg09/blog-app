import { Prisma } from '@prisma/client';

export class Blog implements Prisma.BlogCreateInput {
  title: string;
  content: string;
  published?: boolean;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  // author: Prisma.UserCreateNestedOneWithoutBlogsInput;
  // comments?: Prisma.CommentCreateNestedManyWithoutBlogInput;
}
