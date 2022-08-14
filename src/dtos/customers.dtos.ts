import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly fullname: string;

  @IsNumber()
  @IsNotEmpty()
  readonly age: number;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}

export class UpdateCustomerDto extends PartialType(CreateBrandDto) {}
