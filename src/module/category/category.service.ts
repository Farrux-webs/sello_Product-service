import type { Category } from '@prisma/client';
import {
  ConflictException,
  Injectable,
  NotFoundException,
  Inject,
  BadRequestException,
} from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PrismaService } from '@prisma';
import type {
  CreateCategoryRequest,
  UpdateCategoryRequest,
  CreateCategoryResponse,
  UpdateCategoryResponse,
  RetrieveCategoryResponse,
} from './interfaces';

@Injectable()
export class CategoryService {
  readonly #_prisma: PrismaService;

  constructor(prisma: PrismaService) {
    this.#_prisma = prisma;
  }

  async create(
    payload: CreateCategoryRequest,
  ): Promise<CreateCategoryResponse> {

    console.log(payload);
    

    const newCategory = await this.#_prisma.category.create({
      data: {
        title: payload.title,
      },
      select: {
        id: true,
      },
    });

    console.log(newCategory);

    return {
      message: 'Created'
    };
  }

  async retrieveAll() {
    const AllCategories: RetrieveCategoryResponse[] =
      await this.#_prisma.category.findMany({
        select: {
          id: true,
          title: true,
          updatedAt: true,
          createdAt: true,
          SubCategory: {
            select: {
              id: true,
              title: true,
              createdAt: true,
              updatedAt: true,
              Product: {
                select: {
                  id: true,
                  title: true,
                  descr: true,
                  price: true,
                  createdAt: true,
                  updatedAt: true,
                  Order: {
                    select: {
                      id: true,
                      count: true,
                      productId: true,
                      userId: true,
                      createdAt: true,
                      updatedAt: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

    return AllCategories;
  }

  async Put(payload: UpdateCategoryRequest): Promise<UpdateCategoryResponse> {
    const existingData = await this.#_prisma.category.findFirst();
    if (!existingData) {
      throw new Error('No data found.');
    }
    await this.#_prisma.category.update({
      where: { id: existingData.id },
      data: payload,
    });

    return { message: 'Updated' };
  }

  async delete(id: string): Promise<Object> {
    await this.#_prisma.category.delete({
      where: { id },
    });

    return { message: 'Deleted' };
  }
}
