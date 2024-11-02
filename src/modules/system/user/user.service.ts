// import { Injectable } from '@nestjs/common'
// import { InjectRepository } from '@nestjs/typeorm'
import { CreateUserDto } from './dto'
// import { UpdateUserDto } from './dto/update-user.dto'
// import { Repository } from 'typeorm'
// // import { User } from './entities/user.entity'
// // import * as bcrypt from 'bcrypt'
// @Injectable()
export class UserService {
//   constructor(
//     // 依赖注入
//     // @InjectRepository(User)
//     // private readonly userRepository: Repository<User>,
//   ) {}
  /**
   * 创建用户
   * @param createUserDto
   * @returns
   */
  async create(dto: CreateUserDto) {
//     const { username, password } = dto
//     const userExists = await this.findOneByUserName(username)

//     if (userExists) {
//       throw new Error('用户名已存在')
//     }
//     // const salt = await bcrypt.genSalt()
//     // const hashedPassword = await bcrypt.hash(password, salt)
//     // dto.password = hashedPassword

//     // const user = await this.userRepository.save(dto)
//     // return user
  }

//   findAll() {
//     return `This action returns all user`
//   }

//   // async findOne(idOrUserName: string | number): Promise<User | undefined> {
//   //   console.log('idOrUserName', idOrUserName)

//   //   // const user = await this.userRepository.findOne({
//   //   //   where: { idOrUserName }
//   //   // })

//   //   // const user =
//   //   return
//   // }
//   // 根据用户名查找
//   async findOneByUserName(username: string) {
//     return this.userRepository.findOne({ where: { username } })
//   }

//   // 根据ID查找
//   async findOneById(id: number) {
//     return this.userRepository.findOne({ where: { id } })
//   }

//   update(id: number, updateUserDto: UpdateUserDto) {
//     return `This action updates a #${id} user`
//   }

//   remove(id: number) {
//     return `This action removes a #${id} user`
//   }
}
