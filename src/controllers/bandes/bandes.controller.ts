import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from 'src/dtos/brands.dtos';
import { BrandsService } from 'src/services/brands/brands.service';

@Controller('bandes')
export class BandesController {
  constructor(private brandsService: BrandsService) {}

  @Get()
  getBrands() {
    return this.brandsService.findAll();
  }

  @Get('filter')
  getBrandFilter(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `soy un filtro ${limit} offset => ${offset}`,
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getBrand(@Param('id', ParseIntPipe) id: number) {
    return this.brandsService.findOne(id);
  }

  @Post()
  createBrand(@Body() payload: CreateBrandDto) {
    return this.brandsService.create(payload);
  }

  @Put(':id')
  updateBrand(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateBrandDto,
  ) {
    return this.brandsService.update(id, payload);
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.brandsService.remove(id);
  }
}
