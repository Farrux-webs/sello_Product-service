import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import type { UpdateProductRequest } from '../interfaces';

export class UpdateProductDto implements UpdateProductRequest {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  descr: string;

  @IsString()
  @IsNotEmpty()
  price: string;
}
