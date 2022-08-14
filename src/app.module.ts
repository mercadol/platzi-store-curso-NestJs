import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { BandesController } from './controllers/bandes/bandes.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { UsersController } from './controllers/users/users.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { ProductsService } from './services/products/products.service';
import { BrandsService } from './services/brands/brands.service';
import { CategoriesService } from './services/categories/categories.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, BandesController, OrdersController, UsersController, CustomersController],
  providers: [AppService, ProductsService, BrandsService, CategoriesService],
})
export class AppModule {}
