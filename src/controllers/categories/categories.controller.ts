import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getCategories(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `Category limit => ${limit} offset => ${offset}`,
    };
  }

  @Get('filter')
  getCategoryFilter(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `soy un filtro ${limit} offset => ${offset}`,
    };
  }

  @Get(':id')
  getCategory(@Param('id') id: string) {
    return {
      message: `Category ${id}`,
    };
  }

  @Get(':id/products/:producId')
  getCategoryP(@Param('id') id: string, @Param('producId') producId: string) {
    return `product ${producId}, categorie ${id}`;
  }

  @Post()
  createCategory(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload: payload,
    };
  }
}
