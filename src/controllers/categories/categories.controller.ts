import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateCategoriDto, UpdateCategoryDto } from 'src/dtos/categories.dtos';
import { CategoriesService } from 'src/services/categories/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}
  @Get()
  getCategories() {
    return this.categoriesService.findAll();
  }

  @Get('filter')
  getCategoryFilter(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `soy un filtro ${limit} offset => ${offset}`,
    };
  }

  @Get(':id')
  getCategory(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.findOne(id);
  }
  /*
  @Get(':id/products/:producId')
  getCategoryP(@Param('id') id: string, @Param('producId') producId: string) {
    return `product ${producId}, categorie ${id}`;
  }*/

  @Post()
  createCategory(@Body() payload: CreateCategoriDto) {
    return this.categoriesService.create(payload);
  }

  @Put(':id')
  updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(id, payload);
  }

  @Delete(':id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.remove(id);
  }
}
