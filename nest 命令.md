# nest 命令

```powershell
# 生成 controller
nest g co name
nest generate controller name
nest g co modules/name
# 生成 service
nest g service
# 生成 module
nest g module name
# 生成 dto 并且不生成测试文件
nest g class coffees/dto/create-coffee.dto --no-spec
# 生成 entities （理解为创建一张表）
nest g class coffees/entities/flavor.entity --no-spec
# 创建事务实体
nest g class events/entities/event.entity --no-spec
```

# 其他

```powershell
# 将接收的类型设置为可选，并且继承装饰器的验证规则 @IsString()
pnpm i @nestjs/mapped-types
# 接口参数类型验证和接口参数类型转换
pnpm i class-validator class-transformer
# 根据yml配置启动docker
docker-compose up -d
# TypeOrm 用于连接数据库
pnpm i @nestjs/typeorm typeorm pg
# 数据库迁移
npx typeorm migration:create -n CoffeeRefactor
```

dto用来做函数参数验证 entity就是对应数据表