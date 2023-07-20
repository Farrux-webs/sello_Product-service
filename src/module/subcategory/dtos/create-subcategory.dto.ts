import { IsString, IsNotEmpty } from 'class-validator';
import type { CreateSubCategoryRequest } from '../interfaces';

export class CreateSubCategoryDto implements CreateSubCategoryRequest {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  categoryId: string;
}
