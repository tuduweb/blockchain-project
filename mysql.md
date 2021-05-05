## mysql安装记录

原文地址:https://blog.csdn.net/weixx3/article/details/80782479

### 安装步骤

1. 更新源`sudo apt-get update`
2. 安装mysql`sudo apt-get install mysql-server`
3. 初始化配置`sudo mysql_secure_installation`
    ```
    #1
    VALIDATE PASSWORD PLUGIN can be used to test passwords...
    Press y|Y for Yes, any other key for No: N (我的选项)

    #2
    Please set the password for root here...
    New password: (输入密码)
    Re-enter new password: (重复输入)

    #3
    By default, a MySQL installation has an anonymous user,
    allowing anyone to log into MySQL without having to have
    a user account created for them...
    Remove anonymous users? (Press y|Y for Yes, any other key for No) : N (我的选项)

    #4
    Normally, root should only be allowed to connect from
    'localhost'. This ensures that someone cannot guess at
    the root password from the network...
    Disallow root login remotely? (Press y|Y for Yes, any other key for No) : Y (我的选项)

    #5
    By default, MySQL comes with a database named 'test' that
    anyone can access...
    Remove test database and access to it? (Press y|Y for Yes, any other key for No) : N (我的选项)

    #6
    Reloading the privilege tables will ensure that all changes
    made so far will take effect immediately.
    Reload privilege tables now? (Press y|Y for Yes, any other key for No) : Y (我的选项)
    ```

#### 配置远程访问

1. 进入`mysql`:`sudo mysql -uroot -p`
2. 更新访问``GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY "root";``
3. 在mysql的配置文件（`/etc/mysql/mysql.conf.d/mysqld.cnf`）找到`bind-address`的值修改为`0.0.0.0`
