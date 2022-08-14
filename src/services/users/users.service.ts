import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/users.dtos';
import { User } from 'src/entities/users.entity';

@Injectable()
export class UsersService {
  private counterId = 1;
  private user: User[] = [
    {
      id: 1,
      username: 'usuarioAdmin',
      password: '123456',
      rol: 'admin',
    },
  ];

  findAll() {
    return this.user;
  }

  findOne(id: number) {
    const user = this.user.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`user id:${id} not found`);
    }
    return user;
  }

  create(payload: CreateUserDto) {
    this.counterId++;
    const newUser = {
      id: this.counterId,
      ...payload,
    };
    this.user.push(newUser);
    return newUser;
  }

  update(id: number, pyload: UpdateUserDto) {
    const user = this.findOne(id);
    const index = this.user.findIndex((item) => item.id === id);
    this.user[index] = {
      ...user,
      ...pyload,
    };
    return this.user[index];
  }

  remove(id: number) {
    const indice: number = this.user.findIndex((item) => item.id === id);
    if (indice === -1) {
      throw new NotFoundException(`user #id ${id} not found`);
    }
    this.user.splice(indice, 1);
    return true;
  }
}
