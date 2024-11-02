import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true }) // 开启跨域访问

  // 全局管道
  // app.useGlobalPipes(new ValidationPipe())
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }))

  // 启动热重载
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  // 配置 Swagger 文档
  const swaggerOptions = new DocumentBuilder()
    .setTitle('Nest-后台管理API')
    .setDescription('真正的大师永远怀着一颗学徒的心！')
    .setVersion('1.0')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, swaggerOptions)

  // 项目依赖当前文档功能，最好不要改变当前地址
  // 生产环境使用 nginx 可以将当前文档地址 屏蔽外部访问
  SwaggerModule.setup('api-docs', app, document)

  await app.listen(process.env.PORT ?? 3000)

  console.log('接口文档:http://localhost:3000/api-docs')
}

bootstrap()
