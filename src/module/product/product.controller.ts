import { Controller, Param, Body } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProductService } from './product.service';
import { PCommand } from './enums';
import { CreateProductDto, UpdateProductDto } from './dtos';
import type {
  CreateProductResponse,
  UpdateProductResponse,
  RetrieveProductResponse,
} from './interfaces';

@Controller()
export class ProductController {
  readonly #_service: ProductService;

  constructor(service: ProductService) {
    this.#_service = service;
  }

  @MessagePattern(PCommand.POST_PRODUCT)
 create(@Payload() Payload: CreateProductDto): Promise<any>{    
  
    return this.#_service.create(Payload);
  }
  @MessagePattern(PCommand.RETRIEVE_PRODUCT)
  retrieveAll(): Promise<RetrieveProductResponse[]> {
    return this.#_service.retrieveAll();
  }
  @MessagePattern(PCommand.UPDATE_PRODUCT)
  update(@Payload() payload: UpdateProductDto) {
    return this.#_service.Put(payload);
  }
  @MessagePattern(PCommand.DELETE_PRODUCT)
  delete(id: string): Promise<Object> {
    return this.#_service.delete(id);
  }
}
