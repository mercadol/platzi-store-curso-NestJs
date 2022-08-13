import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrders(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `order limit => ${limit} offset => ${offset}`,
    };
  }

  @Get('filter')
  getOrderFilter(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `soy un filtro ${limit} offset => ${offset}`,
    };
  }

  @Get(':id')
  getOrder(@Param('id') id: string) {
    return {
      message: `Order ${id}`,
    };
  }

  @Post()
  createOrder(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload: payload,
    };
  }
}
