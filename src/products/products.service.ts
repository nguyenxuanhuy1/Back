import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private repository: Repository<Product>,
  ) { }

  create(createProductDto: CreateProductDto) {
    const entity = this.repository.create(createProductDto);
    return this.repository.save(entity);
  }

  async findAll(q: string, pageNumber: number) {
    const pageSize = 9;
    const where = { name: Like(`%${q}%`) };
    const total = await this.repository.count({ where });
    const items = await this.repository
      .find({
        where: where,
        order: { id: 'DESC' },
        skip: (pageNumber - 1) * pageSize,
        take: pageSize,
      });
    return {
      items,
      total,
      pageNumber,
      pageSize,
      size: items.length
    };
  }



  // findAll(q: string) {
  //   return this.repository
  //     .find({
  //       where: { name: Like(`%${q}%`) },
  //       order: { id: 'DESC' },
  //       take: 9
  //     });
  // }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }
  find1(name: string) {
    return this.repository.findOneBy({ name });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const entity = await this.repository.findOneBy({ id });
    entity.name = updateProductDto.name;
    entity.price = updateProductDto.price;
    entity.des = updateProductDto.des;
    entity.link = updateProductDto.link;
    entity.pricesale = updateProductDto.pricesale
    return this.repository.save(entity);
  }

  remove(id: number) {
    return this.repository.delete({ id })
  }
}
