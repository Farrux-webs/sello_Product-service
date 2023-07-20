import { IsString, IsNotEmpty } from 'class-validator';
import type { UpdateSubCategoryRequest } from '../interfaces';

export class UpdateSubCategoryDto implements UpdateSubCategoryRequest {
  @IsString()
  @IsNotEmpty()
  title: string;
}
