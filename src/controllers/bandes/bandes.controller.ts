import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('bandes')
export class BandesController {
  @Get()
  getBrands(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `Brand limit => ${limit} offset => ${offset}`,
    };
  }

  @Get('filter')
  getBrandFilter(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `soy un filtro ${limit} offset => ${offset}`,
    };
  }

  @Get(':id')
  getBrand(@Param('id') id: string) {
    return {
      message: `Brand ${id}`,
    };
  }

  @Post()
  createBrand(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload: payload,
    };
  }
}
