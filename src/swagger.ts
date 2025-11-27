import { INestApplication } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { Response } from 'express'

export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('ry-nest')
    .setDescription('真正的大师永远怀着一颗学徒的心！')
    .setVersion('1.0')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api-docs', app, document)

  // 添加这行来提供 JSON 格式的文档访问
  app.getHttpAdapter().get('/api-docs-json', (req, res: Response) => {
    res.json(document)
  })

  console.log('接口文档:http://localhost:3000/api-docs')
}
