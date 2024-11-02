/*
 * @Description: 公共参数
 */
import { ApiProperty } from '@nestjs/swagger'
import { Transform } from 'class-transformer'
import { IsInt, IsNotEmpty, Min, IsDateString, IsObject, IsOptional, IsString } from 'class-validator'

/**
 * 时间区间对象
 */
export class DateParamsDTO {
  @IsDateString()
  beginTime: string

  @IsDateString()
  endTime: string
}
/**
 * 分页DTO
 */
export class PagingDto {
  @ApiProperty({
    type: Number,
    description: '当前页码',
    default: 1,
  })
  @IsInt({ message: 'pageNum 参数只能是 number 类型' })
  @Min(1, { message: 'pageNum 参数不能小于 1' })
  @IsNotEmpty({ message: '缺少 pageNum 页码参数' })
  @Transform(({ value }) => parseInt(value, 10))
  pageNum: number

  @ApiProperty({
    type: Number,
    description: '当前页条数',
    default: 10,
  })
  @IsInt({ message: 'pageSize 参数只能是 number 类型' })
  @Min(1, { message: 'pageSize 参数不能小于 1' })
  @IsNotEmpty({ message: '缺少 pageSize 页码参数' })
  @Transform(({ value }) => parseInt(value, 10))
  pageSize: number

  /**
   * 时间区间
   */
  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  params?: DateParamsDTO

  /**
   * 排序字段
   */
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  orderByColumn?: string

  /**
   * 排序规则
   */
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  isAsc?: 'ascending' | 'descending'
}
