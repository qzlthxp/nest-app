import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { response } from 'express';

/**
 * @Controller('coffees') controller装饰器的第一个参数表示路由
 * 这个就对应 /coffees 这个地址
 *
 * @Get() 如果不穿入参数那么就是访问的根路由 -> /coffees/ 当然和上面 /coffees是等效的
 *
 */

@Controller('coffees')
export class CoffeesController {
  // 成功的状态码是200 /coffees
  @Get()
  getCoffees(@Res() response) {
    response.status(200).send('coffees');
  }

  // /coffees/flavors
  @Get('flavors')
  findAll() {
    return 'This action returns all coffees';
  }

  // 动态路由，路由参数 /coffees/123
  @Get(':id')
  // findOne(@Param() params) {
  //   return `This action returns ${params.id} coffee`;
  // }
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  // post请求 默认成功的状态码是201 /coffees
  @Post()
  @HttpCode(HttpStatus.GONE)
  // 只会获取 name 对应的数据，谨慎使用因为不会对其他数据进行验证
  // create(@Body('name') body) {
  //   return body;
  // }
  create(@Body() body) {
    return body;
  }
}
