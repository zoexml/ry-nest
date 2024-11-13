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

  /**
   * 后台创建用户
   * @param createUserDto
   * @returns
   */
  async create(createUserDto: CreateUserDto) {
    console.log('🚀 ~ UserService ~ create ~ createUserDto:', createUserDto)
    // const loginDate = GetNowDate();
    // const salt = bcrypt.genSaltSync(10);
    // if (createUserDto.password) {
    //   createUserDto.password = await bcrypt.hashSync(createUserDto.password, salt);
    // }

    // const res = await this.userRepo.save({ ...createUserDto, loginDate, userType: SYS_USER_TYPE.CUSTOM });
    // const postEntity = this.sysUserWithPostEntityRep.createQueryBuilder('postEntity');
    // const postValues = createUserDto.postIds.map((id) => {
    //   return {
    //     userId: res.userId,
    //     postId: id,
    //   };
    // });
    // postEntity.insert().values(postValues).execute();

    // const roleEntity = this.sysUserWithRoleEntityRep.createQueryBuilder('roleEntity');
    // const roleValues = createUserDto.roleIds.map((id) => {
    //   return {
    //     userId: res.userId,
    //     roleId: id,
    //   };
    // });
    // roleEntity.insert().values(roleValues).execute();

    // return ResultData.ok();
  }

  // async create(body: SaveUserDto) {
  //   try {
  //     // 密码加密
  //     const hashedPassword = await this.authService.hashPassword(body.password);
  //     // 这里不知道为什么 prisma 客户端会报类型错误
  //     const result = await this.prisma.user.create({
  //       data: {
  //         ...body,
  //         password: hashedPassword,
  //       } as any,
  //     });
  //     return responseMessage<User>(result);
  //   } catch (error) {
  //     // 判断是否违反 postgresql 唯一性约束
  //     if (error.code === 'P2002') {
  //       return responseMessage(null, '用户名、电子邮箱、手机号已存在!', -1);
  //     }
  //     return responseMessage(error, RESPONSE_MSG.ERROR, -1);
  //   }
  // }

  /**
   * 个人中心-用户信息
   * @param user
   * @returns
   */
  async profile(user) {
    // return ResultData.ok(user);
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
