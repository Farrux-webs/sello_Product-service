import { IsString, IsNotEmpty } from 'class-validator';
import type { UpdateCategoryRequest } from '../interfaces';

export class UpdateCategoryDto implements UpdateCategoryRequest {
  @IsString()
  @IsNotEmpty()
  title: string;
}
