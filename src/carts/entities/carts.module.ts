import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { Cart } from '../dto/create-cart.dto';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cart])],
  controllers: [CartsController],
  providers: [CartsService]
})
export class CartsModule { }
