import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  // 可选
  @IsOptional()
  // 值为正数 则大于零
  @IsPositive()
  // 转换为 number 类型 可以在main.ts 进行全局设置 transformOptions
  // @Type(() => Number)
  limit: number;

  @IsOptional()
  @IsPositive()
  // @Type(() => Number)
  offset: number;
}
