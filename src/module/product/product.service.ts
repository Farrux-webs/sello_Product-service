import type { Product } from '@prisma/client';
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
  CreateProductRequest,
  UpdateProductRequest,
  CreateProductResponse,
  UpdateProductResponse,
  RetrieveProductResponse,
} from './interfaces';



@Injectable()
export class ProductService {
  readonly prisma: PrismaService;

  constructor(prisma: PrismaService) {
    this.prisma = prisma;
  }

  async create(Payload: CreateProductRequest): Promise<any> {
    try {

      await this.prisma.product.create({
          data: {
            title: Payload.title,
            descr: Payload.descr,
            price: Payload.price,
            subcategoryId: Payload.subcategoryId,
          }});

      console.log('newProduct');

      return {
        message: 'Created',
      };
    } catch (error) {
      console.log(error);
      
    }

  }

  async retrieveAll(){

    const products: RetrieveProductResponse[] =
      await this.prisma.product.findMany({
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
      });

    return products;
  }

  async Put(payload: UpdateProductRequest): Promise<UpdateProductResponse> {
    const existingData = await this.prisma.product.findFirst();
    if (!existingData) {
      throw new Error('No data found.');
    }
    await this.prisma.product.update({
      where: { id: existingData.id },
      data: payload,
    });

    return { message: 'Updated' };
  }

  async delete(id: string): Promise<Object> {
    await this.prisma.product.delete({
      where: { id },
    });

    return { message: 'Deleted' };
  }
}
