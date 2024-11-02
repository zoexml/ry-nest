import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserModule } from './modules/system/user/user.module' // 系统管理 - 用户管理
// import { AuthModule } from './modules/auth/auth.module'
// import config from './config'

@Module({
  // 引入所需模块
  imports: [
    // 配置模块
    ConfigModule.forRoot({
      isGlobal: true,
      //   load: [config]
    }),
    // 数据库
    TypeOrmModule.forRoot({
      type: 'mysql', // 数据库类型
      host: '127.0.0.1', // 数据库的连接地址host
      port: 3306, // 数据库的端口 3306
      username: 'root', // 连接账号
      password: 'root123456', // 连接密码
      database: 'ry_nest', // 连接的表名
      retryDelay: 500, // 重试连接数据库间隔
      retryAttempts: 10, // 允许重连次数
      synchronize: true, // 是否将实体同步到数据库
      autoLoadEntities: true, // 自动加载实体配置，forFeature()注册的每个实体都自己动加载
    }),
    // 业务模块...
    UserModule,
    // AuthModule
  ],
  controllers: [],
  providers: [],
})

// 这是一个类，上面是一个装饰器
export class AppModule {}
