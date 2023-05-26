import { Injectable } from '@nestjs/common';
import { Cart } from '../dto/create-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsService } from 'src/products/products.service';
@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(Cart)
    private repository: Repository<Cart>,
  ) { }

  create(createCartDto: Cart) {
    const entity = this.repository.create(createCartDto);
    return this.repository.save(entity);
  }

  // findAll() {
  //   return this.repository.find();
  // }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return `cart nay`;
  }

  remove(id: number) {
    return `T`;
  }
}
