import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `product limit => ${limit} brand => ${brand} offset => ${offset}`;
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return `product ${id}`;
  }
}
