import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartsService } from './carts.service';
import { Cart } from '../dto/create-cart.dto';
import { get } from 'http';
@Controller('carts')
export class CartsController {
  constructor(private readonly CartsService: CartsService) { }

  @Post()
  create(@Body() createCartDto: Cart) {
    return this.CartsService.create(createCartDto);
  }

  @Get()
  async findAll() {
    return await this.CartsService.findAll();
  }
}
