import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:producId')
  getCategory(@Param('id') id: string, @Param('producId') producId: string) {
    return `product ${producId}, categorie ${id}`;
  }
}
