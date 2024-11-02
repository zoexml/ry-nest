import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { setupSwagger } from './swagger'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true }) // 开启跨域访问

  // 全局管道
  // app.useGlobalPipes(new ValidationPipe())
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }))

  // 启动热重载
  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
  // 配置 Swagger 文档
  setupSwagger(app)

  await app.listen(process.env.PORT ?? 3000)
}

bootstrap()
