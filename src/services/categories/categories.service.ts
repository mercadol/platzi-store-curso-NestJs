import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoriDto, UpdateCategoryDto } from 'src/dtos/categories.dtos';
import { Category } from 'src/entities/categories.entity';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: Category[] = [
    {
      id: 1,
      name: 'category 1',
    },
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const category = this.categories.find((item) => item.id === id);
    if (!category) {
      throw new NotFoundException(`category id# ${id} is not fount`);
    }
    return category;
  }

  create(payload: CreateCategoriDto) {
    this.counterId++;
    const newCategory = {
      id: this.counterId,
      ...payload,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: number, payload: UpdateCategoryDto) {
    const category = this.findOne(id);
    const index = this.categories.findIndex((item) => item.id === id);
    this.categories[index] = {
      ...category,
      ...payload,
    };
    return this.categories[index];
  }

  remove(id: number) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`category id# ${id} is not fount`);
    }
    this.categories.splice(index, 1);
    return true;
  }
}
