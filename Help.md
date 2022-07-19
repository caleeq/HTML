# 我踩过的坑
## MySQL
### 卸载
1. 服务里停止MYSQL
2. CMD里输入命令sc delete mysql
3. 删除安装文件夹的内容
### 安装
1. 官网[下载](https://dev.mysql.com/downloads/mysql/)解压
2. 根目录下新建my.ini 配置文件
```ini
{
    [client]
    default-character-set = utf8
    [mysqld]
    port = 3306
    basedir = C:\web\mysql-8.0.11
    max_connections = 20
    character-set-server = utf8
    default-storage-engine = INNODB
}   
```
3. 以管理员身份打开 cmd 命令行
    - 切换目录
    > cd C:\web\mysql-8.0.11\bin  
    - 初始化数据库, 会得到root用户的初始默认密码
    > mysqld --initialize --console
    - 安装  
    > mysqld install
    - 启动
    > net start mysql
    - 输入密码登录
    > mysql -u root -p
    - 修改root密码
    > mysqladmin -u root password "123456" 
4. 创建数据库
    > mysqladmin -u root -p create user  
      Enter password:******
## MyBatis-Plus
### 代码生成器
> 以下代码写在psvm中
```java
{
    FastAutoGenerator.create("url", "username", "password")
    .globalConfig(builder -> {
        builder.author("baomidou") // 设置作者
            .enableSwagger() // 开启 swagger 模式
            .fileOverride() // 覆盖已生成文件
            .outputDir("D://"); // 指定输出目录
    })
    .packageConfig(builder -> {
        builder.parent("com.baomidou.mybatisplus.samples.generator") // 设置父包名
            .moduleName("system") // 设置父包模块名
            .pathInfo(Collections.singletonMap(OutputFile.xml, "D://")); // 设置mapperXml生成路径
    })
    .strategyConfig(builder -> {
        builder.addInclude("t_simple") // 设置需要生成的表名
            .addTablePrefix("t_", "c_"); // 设置过滤表前缀
    })
    .templateEngine(new FreemarkerTemplateEngine()) // 使用Freemarker引擎模板，默认的是Velocity引擎模板
    .execute();
}
```