import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto'
// import { UpdateUserDto } from './dto/update-user.dto'
import { ApiTags, ApiOperation } from '@nestjs/swagger'

@ApiTags('用户管理') // 给他定义一个用户的分组
@Controller('system/user')
export class UserController {
//   // 使用 InjectModel 注入模型
//   // private 定义到自己的属性上
//   // readonly 只读的，不可被修改
  constructor(
    private readonly userService: UserService,
//     // private readonly uploadService: UploadService,
  ) {}

  @Post('/register')
  @ApiOperation({ summary: '用户-创建' })
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto)
  }

//   @Get()
//   @ApiOperation({ summary: '查找所有用户' })
//   findAll() {
//     return this.userService.findAll()
//   }

//   @Get(':id')
//   @ApiOperation({ summary: '根据ID查找用户' })
//   findOne(@Param('id') id: string) {
//     // return this.userService.findOne(id)
//   }

//   @Patch(':id')
//   @ApiOperation({ summary: '更新用户' })
//   update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
//     return this.userService.update(+id, updateUserDto)
//   }

//   @Delete(':id')
//   @ApiOperation({ summary: '根据id删除用户' })
//   remove(@Param('id') id: string) {
//     return this.userService.remove(+id)
//   }
}
