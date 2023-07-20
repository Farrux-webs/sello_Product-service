import { Controller, Param, Body, Query } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SubCategoryService } from './subcategory.service';
import { SCommands } from './enums';
import { CreateSubCategoryDto, UpdateSubCategoryDto } from './dtos';
import type {
  CreateSubCategoryResponse,
  UpdateSubCategoryResponse,
  RetrieveSubCategoryResponse,
} from './interfaces';

@Controller()
export class SubCategoryController {
  readonly #_service: SubCategoryService;

  constructor(service: SubCategoryService) {
    this.#_service = service;
  }

  @MessagePattern(SCommands.CREATE_SUBCATEGORY)
  create(
    @Payload() payload: CreateSubCategoryDto,
  ): Promise<CreateSubCategoryResponse> {
    return this.#_service.create(payload);
  }
  @MessagePattern(SCommands.RETRIEVE_SUBCATEGORY)
  retrieveAll(): Promise<RetrieveSubCategoryResponse[]> {
    return this.#_service.retrieveAll();
  }
  @MessagePattern(SCommands.UPDATE_SUBCATEGORY)
  update(
    @Payload() payload: UpdateSubCategoryDto,
  ): Promise<UpdateSubCategoryResponse> {
    return this.#_service.Put(payload);
  }
  @MessagePattern(SCommands.DELETE_SUBCATEGORY)
  delete(id: string): Promise<Object> {
    return this.#_service.delete(id);
  }
}
