import { IsString, IsNotEmpty } from 'class-validator';
import type { CreateCategoryRequest } from '../interfaces';

export class CreateCategoryDto implements CreateCategoryRequest {
  @IsString()
  @IsNotEmpty()
  title: string;
}
