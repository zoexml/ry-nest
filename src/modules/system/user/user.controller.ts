import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto'
// import { UpdateUserDto } from './dto/update-user.dto'
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger'

@ApiTags('用户管理') // 给他定义一个用户的分组
@Controller('system/user')
export class UserController {
  //   // 使用 InjectModel 注入模型
  //   // private 定义到自己的属性上
  //   // readonly 只读的，不可被修改
  constructor(
    private readonly userService: UserService,
    // private readonly uploadService: UploadService,
  ) {}

  @ApiBody({
    type: CreateUserDto,
    required: true,
  })
  //  @RequirePermission('system:user:add')
  @Post('/register')
  // @ApiOkResponse({ type: ResponseUserDto })
  @ApiOperation({ summary: '用户-创建' })
  create(@Body() body: CreateUserDto) {
    return this.userService.create(body)
  }

  @ApiOperation({
    summary: '个人中心-用户信息',
  })
  // @RequirePermission('system:user:query')
  @Get('/profile')
  profile(@Request() req) {
    const user = req.user.user
    return this.userService.profile(user)
  }

  //   create(@Body() createUserDto: CreateUserDto, @Request() req) {
  //     createUserDto['createTime'] = GetNowDate()
  //     createUserDto['createBy'] = req.user.user.userName
  //     return this.userService.create(createUserDto)
  //   }

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
