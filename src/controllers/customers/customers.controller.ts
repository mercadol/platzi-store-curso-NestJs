import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getCostumers(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `Costumer limit => ${limit} offset => ${offset}`,
    };
  }

  @Get('filter')
  getCostumerFilter(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `soy un filtro ${limit} offset => ${offset}`,
    };
  }

  @Get(':id')
  getCostumer(@Param('id') id: string) {
    return {
      message: `Costumer ${id}`,
    };
  }

  @Post()
  createCostumer(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload: payload,
    };
  }
}
