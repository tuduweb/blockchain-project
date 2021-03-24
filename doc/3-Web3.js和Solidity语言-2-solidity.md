[TOC]

---

### 任务描述

本小节将简要介绍一些本项目案例中应用到的智能合约中使用的`Sodility`语言，内容十分简单，让我们开始学习吧！

### 相关知识

#### Solidity语言简介

Solidity 是一门面向合约的、为实现智能合约而创建的高级编程语言。这门语言受到了 C++，Python 和 Javascript 语言的影响，设计的目的是能在 以太坊虚拟机（EVM）上运行。

Solidity 是静态类型语言，支持继承、库和复杂的用户定义类型等特性。

#### Solidity类型

##### 整型

`int` / `uint` ：分别表示有符号和无符号的不同位数的整型变量。 支持关键字 `uint8` 到 `uint256` （无符号，从 8 位到 256 位）以及 `int8` 到 `int256`，以 `8` 位为步长递增。 `uint` 和 `int` 分别是 `uint256` 和 `int256` 的别名。

##### 变长字节数组

- `bytes`:

  变长字节数组。它并不是值类型。

- `string`:

  变长 UTF-8 编码字符串类型。并不是值类型。

在本项目案例中，用来在以太坊智能合约中存储标题、内容数据的即是`string`类型。

#### 函数

与 Javascript 一样，函数可能需要参数作为输入; 而与 Javascript 和 C 不同的是，它们可能返回任意数量的参数作为输出。

##### 函数参数（输入参数）

函数参数的声明方式与变量相同。不过未使用的参数可以省略参数名。

例如，如果我们希望合约接受有两个整数形参的函数的外部调用，可以像下面这样写:

```solidity
pragma solidity >=0.4.16 <0.9.0;

contract Simple {
    uint sum;
    function taker(uint _a, uint _b) public {
        sum = _a + _b;
    }
}
```

函数参数可以当作为本地变量，也可用在等号左边被赋值。

##### 函数返回变量

函数返回变量的声明方式在关键词 `returns` 之后，与参数的声明方式相同。

例如，如果我们需要返回两个结果：两个给定整数的和与积，我们应该写作

```solidity
contract Simple {
    function arithmetic(uint _a, uint _b)
        public
        pure
        returns (uint o_sum, uint o_product)
    {
        o_sum = _a + _b;
        o_product = _a * _b;
    }
}
```

返回变量名可以被省略。 返回变量可以当作为函数中的本地变量，没有显式设置的话，会使用 :ref:` 默认值 <default-value>` 返回变量可以显式给它附一个值(像上面)，也可以使用 `return` 语句指定，使用 `return` 语句可以一个或多个值。当函数需要使用多个值，可以用语句 `return (v0, v1, ..., vn)` 。 参数的数量需要和声明时候一致。

#### 错误处理：Assert, Require, Revert 和 Exceptions

Solidity 使用状态恢复异常来处理错误。这种异常将撤消对当前调用（及其所有子调用）中的状态所做的所有更改，并且还向调用者标记错误。 便利函数 `assert` 和 `require` 可用于检查条件并在条件不满足时抛出异常。`assert` 函数只能用于测试内部错误，并检查非变量。 `require` 函数用于确认条件有效性，例如输入变量，或合约状态变量是否满足条件，或验证外部合约调用返回的值。 如果使用得当，分析工具可以评估你的合约，并标示出那些会使 `assert` 失败的条件和函数调用。 正常工作的代码不会导致一个 assert 语句的失败；如果这发生了，那就说明出现了一个需要你修复的 bug。

还有另外两种触发异常的方法：`revert` 函数可以用来标记错误并恢复当前的调用。 `revert` 调用中包含有关错误的详细信息是可能的，这个消息会被返回给调用者。已经不推荐的关键字 `throw` 也可以用来替代 `revert()` （但无法返回错误消息）。

下边的例子展示了如何在 revert 和 require 中使用错误字符串：

```solidity
pragma solidity ^0.4.22;

contract VendingMachine {
    function buy(uint amount) payable {
        if (amount > msg.value / 2 ether)
            revert("Not enough Ether provided.");
        // 下边是等价的方法来做同样的检查：
        require(
            amount <= msg.value / 2 ether,
            "Not enough Ether provided."
        );
        // 执行购买操作
    }
}
```

在本次支持以太坊的云笔记小程序项目案例中，在智能合约的方法中使用`require`来检查输入函数的参数是否合法，当非法时，会抛出一个异常。

### 测试说明

根据相关知识，按照要求完成右侧选择题任务。作答完毕，通过点击“评测”，可以验证答案的正确性。

---