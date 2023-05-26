import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { CartsModule } from './carts/entities/carts.module';
import { cart } from './carts/entities/cart.entity';
import { RegisterUserDto } from './users/dto/register-user.dto';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'huydb',
      entities: [Product, User, cart],
      logging: ['query', 'warn', 'error'],
      synchronize: true,
    }),
    ProductsModule,
    UsersModule,
    CartsModule
  ],
})
export class AppModule { }
