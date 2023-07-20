import { Controller, Param, Body } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CategoryService } from './category.service';
import { Command } from './enums';
import { CreateCategoryDto, UpdateCategoryDto } from './dtos';
import type {
  CreateCategoryResponse,
  UpdateCategoryResponse,
  RetrieveCategoryResponse,
} from './interfaces';

@Controller()
export class CategoryController {
  readonly #_service: CategoryService;

  constructor(service: CategoryService) {
    this.#_service = service;
  }

  @MessagePattern(Command.CREATE_CATEGORY)
  create(
    @Payload() payload: CreateCategoryDto,
  ): Promise<CreateCategoryResponse> {
    return this.#_service.create(payload);
  }
  @MessagePattern(Command.RETRIEVE_CATEGORY)
  retrieveAll(): Promise<RetrieveCategoryResponse[]> {
    return this.#_service.retrieveAll();
  }
  @MessagePattern(Command.UPDATE_CATEGORY)
  update(
    @Payload() payload: UpdateCategoryDto,
  ): Promise<UpdateCategoryResponse> {
    return this.#_service.Put(payload);
  }
  @MessagePattern(Command.DELETE_CATEGORY)
  delete(
     id: string
  ): Promise<Object> {
    
    return this.#_service.delete(id);
  }
}
