import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from 'src/dtos/customers.dtos';
import { Customer } from 'src/entities/customers.entity';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      fullname: 'juan perez',
      age: 25,
      email: 'correo@ejemplo.com',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((item) => item.id === id);
    if (!customer) {
      throw new NotFoundException(`customer id:${id} not found`);
    }
    return customer;
  }

  create(payload: CreateCustomerDto) {
    this.counterId++;
    const newCustomer = {
      id: this.counterId,
      ...payload,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, pyload: UpdateCustomerDto) {
    const customer = this.findOne(id);
    const index = this.customers.findIndex((item) => item.id === id);
    this.customers[index] = {
      ...customer,
      ...pyload,
    };
    return this.customers[index];
  }

  remove(id: number) {
    const indice: number = this.customers.findIndex((item) => item.id === id);
    if (indice === -1) {
      throw new NotFoundException(`customer #id ${id} not found`);
    }
    this.customers.splice(indice, 1);
    return true;
  }
}
