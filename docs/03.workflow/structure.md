# 项目结构说明

## Domian.Share 领域共享层
- 存放通用基础数据类型，不涉及的数据库模型，如2维点类型
- 存放领域模型中涉及到的枚举类型
- 存放其他领域模型中涉及到的常量

## Domain 领域模型层
- 存放该领域的数据库模型
- 存放改领域的 Dbcontext 和对应的开发 Factory
- 存放数据库升级的 migration 和对应的升级 sql

## Application.Constrain 应用接口层
- 存放应用层的DTO模型和服务接口

## Application 应用实现层
- 存放应用层对应的接口实现
- 存放 领域模型 和 DTO 模型对应的 AutoMapper 配置