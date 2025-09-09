import { Module } from '@nestjs/common'

import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './entities/sys-user.entity'
import { UserController } from './user.controller'
import { UserService } from './user.service'

@Module({
  // 引入实体并使用
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // 将 UserService 导出，以便其他模块可以使用它
})
export class UserModule {}
