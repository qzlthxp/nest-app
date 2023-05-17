import { CoffeesService } from './coffees.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';

/**
 * @Controller('coffees') controller装饰器的第一个参数表示路由
 * 这个就对应 /coffees 这个地址
 *
 * @Get() 如果不穿入参数那么就是访问的根路由 -> /coffees/ 当然和上面 /coffees是等效的
 *
 */

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  // 成功的状态码是200 /coffees
  @Get()
  getCoffees(@Res() response) {
    response.status(200).send('coffees');
  }

  // /coffees/flavors
  @Get('flavors')
  findAll(@Query() paginationQuery) {
    return this.coffeesService.findAll(paginationQuery)
    // const { limit, offset } = paginationQuery
    // return `This action returns all coffees. Limit: ${limit}, offset: ${offset}`;
  }

  // 动态路由，路由参数 /coffees/123
  @Get(':id')
  // findOne(@Param() params) {
  //   return `This action returns ${params.id} coffee`;
  // }
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id)
    // return `This action returns #${id} coffee`;
  }

  // post请求 默认成功的状态码是201 /coffees
  @Post()
  @HttpCode(HttpStatus.GONE)
  // 只会获取 name 对应的数据，谨慎使用因为不会对其他数据进行验证
  // create(@Body('name') body) {
  //   return body;
  // }
  create(@Body() body) {
    return this.coffeesService.create(body)
    // return body;
  }

  @Patch(':id')
  update(@Param('id') id: string,@Body() body) {
    return this.coffeesService.update(id, body)
    // return `This action updates #${id} coffee & name is ${body.name}`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id)
    // return `This action removes #${id} coffee`
  }
}
