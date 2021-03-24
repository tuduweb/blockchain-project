[TOC]

---

### 任务描述

本小节只有一些基础性的概念，十分简单，让我们开始学习吧！

### 相关知识

#### JavaScript语言

JavaScript 作为一种 Web 页面开发的脚本语言，广泛应用于网站前端、后台、移动开发、插件开发等。在本项目中，`Node.js`后端服务器配置部分和`微信小程序`部分中，都需要用到JavaScript语言来编写基础程序。

##### ES6

ES6: 是 ECMA国际组织于 2015 年 6 月 17 日发布的 ECMAScript 第六版，正式名为 ECMAScript 2015,通常被成为 ES6 或 ECMAScript 6。

ES6标准新增了一种新的函数：Arrow Function（箭头函数），在本项目中，将使用这种新的JavaScript语法特性。

通常情况下，在JavaScript中定义函数的方法为

```javascript
var fn1 = function(a, b) {
    return a + b
}
 
function fn2(a, b) {
    return a + b
```

而使用ES6箭头函数语法定义函数，**将原函数的“function”关键字和函数名都删掉，并使用“=>”连接参数列表和函数体。**

```javascript
var fn1 = (a, b) => {
    return a + b
}
 
(a, b) => {
    return a + b
```

#### MySQL数据库

`MySQL`是最流行的关系型数据库管理系统，在WEB应用方面MySQL是最好的RDBMS(Relational Database Management System：关系数据库管理系统)应用软件之一。

MySQL是一个关系型数据库管理系统，由瑞典MySQL AB公司开发，目前属于Oracle公司。MySQL是一种关联数据库管理系统，关联数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。

##### 初识MySQL

所有的网络应用都有基于数据的操作，数据的安全存储就靠数据库了，所以数据库在网络应用中的重要性是不言而喻的，一般在企业里进行开发都会使用到`MySQL`数据库，所以在之后我们将详细的学习`MySQL`数据库的用法。

`MySQL`是一种开放源代码的关系型数据库管理系统`（RDBMS）`，`MySQL`数据库系统使用最常用的数据库管理语言–结构化查询语言`（SQL）`进行数据库管理。

由于`MySQL`是开放源代码的，因此任何人都可以在`General Public License`的许可下下载并根据个性化的需要对其进行修改。`MySQL`因为其速度、可靠性和适应性而备受关注。大多数人都认为在不需要事务化处理的情况下，`MySQL`是管理内容最好的选择。

`MySQL`这个名字，起源不是很明确。一个比较有影响的说法是，基本指南和大量的库和工具带有前缀`“my”`已经有`10`年以上，而且不管怎样，`MySQL AB`创始人之一的`Monty Widenius`的女儿也叫`My`。这两个到底是哪一个给出了`MySQL`这个名字至今依然是个迷，包括开发者在内也不知道。

`MySQL`的海豚标志的名字叫`“sakila”`，它是由`MySQL AB`的创始人从用户在“海豚命名”的竞赛中建议的大量的名字表中选出的。获胜的名字是由来自非洲斯威士兰的开源软件开发者`Ambrose Twebaze`提供。根据`Ambrose`所说，`Sakila`来自一种叫`SiSwati`的斯威士兰方言，也是在`Ambrose`的家乡乌干达附近的坦桑尼亚的`Arusha`的一个小镇的名字。 `MySQL`，虽然功能未必很强大，但因为它的开源、广泛传播，导致很多人都了解到这个数据库。它的历史也富有传奇性。

##### Mysql基础语法

###### 插入数据

MySQL 表中使用 **INSERT INTO** SQL语句来插入数据。

你可以通过 mysql> 命令提示窗口中向数据表中插入数据，或者通过程序语言或桌面界面来插入数据。

以下为向MySQL数据表插入数据通用的 **INSERT INTO** SQL语法：

```sql
INSERT INTO table_name ( field1, field2,...fieldN )
                       VALUES
                       ( value1, value2,...valueN );
```

如果数据是字符型，必须使用单引号或者双引号，如在本项目中应用到MySQL数据库的部分，存储的云笔记标题`title`信息，就要使用引号包裹标题数据。如`"这是云笔记的标题"`

###### 查询数据

MySQL 数据库使用SQL SELECT语句来查询数据。

你可以通过 mysql> 命令提示窗口中在数据库中查询数据，或者通过程序语言或桌面界面来查询数据。

以下为在MySQL数据库中查询数据通用的 SELECT 语法：

```sql
SELECT column_name,column_name
FROM table_name
[WHERE Clause]
[LIMIT N][ OFFSET M]
```

- 查询语句中你可以使用一个或者多个表，表之间使用逗号(,)分割，并使用WHERE语句来设定查询条件。
- SELECT 命令可以读取一条或者多条记录。
- 你可以使用星号（*）来代替其他字段，SELECT语句会返回表的所有字段数据
- 你可以使用 WHERE 语句来包含任何条件。
- 你可以使用 LIMIT 属性来设定返回的记录数。
- 你可以通过OFFSET指定SELECT语句开始查询的数据偏移量。默认情况下偏移量为0。

在本项目案例中，我们只使用到了基础的`select`语句，只包含基础的`where`语法。

###### 更新数据

如果我们需要修改或更新 MySQL 中的数据，我们可以使用 SQL UPDATE 命令来操作。

以下是 UPDATE 命令修改 MySQL 数据表数据的通用 SQL 语法：

```sql
UPDATE table_name SET field1=new-value1, field2=new-value2
[WHERE Clause]
```

- 你可以同时更新一个或多个字段。
- 你可以在 WHERE 子句中指定任何条件。
- 你可以在一个单独表中同时更新数据。

当你需要更新数据表中指定行的数据时 WHERE 子句是非常有用的。

在本项目案例中，我们通过`update`语句来更新笔记的标题。

### 测试说明

根据相关知识，按照要求完成右侧选择题任务。作答完毕，通过点击“评测”，可以验证答案的正确性。

---

验货啦，验货啦，开始你的任务吧！