import type { SubCategory } from '@prisma/client';
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
  CreateSubCategoryRequest,
  UpdateSubCategoryRequest,
  CreateSubCategoryResponse,
  UpdateSubCategoryResponse,
  RetrieveSubCategoryResponse,
} from './interfaces';

@Injectable()
export class SubCategoryService {
  readonly #_prisma: PrismaService;

  constructor(prisma: PrismaService) {
    this.#_prisma = prisma;
  }

  async create(
    payload: CreateSubCategoryRequest,
  ): Promise<CreateSubCategoryResponse> {
    const newSubCategory = await this.#_prisma.subCategory.create({
      data: {
        title: payload.title,
        cetgoryId: payload.categoryId,
      },
      select: {
        id: true,
      },
    });

    return {
      message: 'Created',
    };
  }

  async retrieveAll(): Promise<RetrieveSubCategoryResponse[]> {
    const AllSubCategories = await this.#_prisma.subCategory.findMany({
      select: {
        id: true,
        title: true,
        updatedAt: true,
        createdAt: true,
        cetgoryId: true,
        Product: {
          select: {
            id: true,
            title: true,
            descr: true,
            price: true,
            subcategoryId: true,
            createdAt: true,
            updatedAt: true,
            deletedAt: true,
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
    });

    return AllSubCategories;
  }

  async Put(
    payload: UpdateSubCategoryRequest,
  ): Promise<UpdateSubCategoryResponse> {
    const existingData = await this.#_prisma.subCategory.findFirst();
    if (!existingData) {
      throw new Error('No data found.');
    }
    await this.#_prisma.subCategory.update({
      where: { id: existingData.id },
      data: payload,
    });

    return { message: 'Updated' };
  }

  async delete(id: string): Promise<Object> {
    await this.#_prisma.subCategory.delete({
      where: { id },
    });

    return { message: 'Deleted' };
  }
}
