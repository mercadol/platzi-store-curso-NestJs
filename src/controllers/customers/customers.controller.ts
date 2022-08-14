import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from 'src/dtos/customers.dtos';
import { CustomersService } from 'src/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor (private customersService: CustomersService) {}
  @Get()
  getCostumers() {
    return this.customersService.findAll();
  }

  @Get('filter')
  getCostumerFilter(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `soy un filtro ${limit} offset => ${offset}`,
    };
  }

  @Get(':id')
  getCostumer(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.findOne(id);
  }

  @Post()
  createCostumer(@Body() payload: CreateCustomerDto) {
    return this.customersService.create(payload);
  }

  @Put(':id')
  updateCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCustomerDto,
  ) {
    return this.customersService.update(id, payload);
  }

  @Delete(':id')
  deleteCustomer(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.remove(id);
  }
}
