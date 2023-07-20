import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { PrismaService } from '@prisma';
import { ProductController } from './product.controller';

@Module({
  providers: [ProductService, PrismaService],
  controllers: [ProductController],
})
export class ProductModule {}
