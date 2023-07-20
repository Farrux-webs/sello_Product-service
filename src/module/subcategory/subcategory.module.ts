import { Module } from '@nestjs/common';
import { SubCategoryService } from './subcategory.service';
import { PrismaService } from '@prisma';
import { SubCategoryController } from './subcategory.controller';

@Module({
  providers: [SubCategoryService, PrismaService],
  controllers: [SubCategoryController],
})
export class SubCategoryModule {}
