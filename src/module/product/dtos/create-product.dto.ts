import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import type { CreateProductRequest } from '../interfaces';

export class CreateProductDto implements CreateProductRequest {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  descr: string;

  @IsString()
  @IsNotEmpty()
  price: string;

  @IsString()
  @IsNotEmpty()
  subcategoryId: string;




}
