import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) { }

  create(createUserDto: CreateUserDto) {
    return 'Tạo moi';
  }

  async register(body: RegisterUserDto) {
    const user = this.repository.create({
      username: body.username,
      password: body.password,
      phonenumber: body.phonenumber
    });
    return this.repository.save(user);
  }

  async login(body: RegisterUserDto) {
    const user = await this.repository.findOneBy({ username: body.username, password: body.password });
    if (user === null || user.password !== body.password)
      return 'Tài khoản hoặc mật khẩu không đúng';
    return this.repository.find();
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.repository.delete({ id });
  }
}
