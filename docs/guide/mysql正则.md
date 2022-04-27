mysql

REGEXP

假设，我现在需要匹配不仅仅是包含100数字的用户，而是100,200，或者300，只要是整百的都需要匹配。或者说，我需要所有名字里面包含数字的，无论什么数字。那么使用`LIKE`来实现就会显得十分的困难。而正则表达式就会显得十分简单。

```
SELECT * FROM my_user WHERE `name` REGEXP '.00'; // 匹配包含整百的名字，如100,200,300等等
```

表达式`.00`里面的点，代表的任意字符。也就是无论是1还是2还是9，或者是字母什么的都可以匹配，匹配任意。

```
SELECT * FROM my_user WHERE `name` REGEXP '[0-9]'; // 匹配所有名字里面包含数字的用户
```

或查询也叫`OR`查询，是条件并列查询的一种情况。类似于编程语言里面的`if else`只要有一个条件符合就会被匹配。

```
SELECT * FROM my_user WHERE `name` REGEXP '100|200';
```

正则匹配中有一种特殊的`OR`匹配。

```
SELECT * FROM my_user WHERE `name` REGEXP '[12]';


```

## 使用预定义字符集

| 类         | 说明                                                         |
| ---------- | ------------------------------------------------------------ |
| [:alnum:]  | 任意数字和字母。相当于[a-zA-Z0-9]                            |
| [:alpha:]  | 任意字符。相当于[a-zA-z]                                     |
| [:blank:]  | 空格和制表。相当于[（双斜杠，segmentfault这里双斜杠打不出来）t] |
| [:cntrl:]  | ASCII控制字符（ASCII 0 到31和127）                           |
| [:digit:]  | 任意数字。相当于[0-9]                                        |
| [:graph:]  | 与[:print:]相同，但是不包含空格                              |
| [:lower:]  | 任意的小写字母。相当于[a-z]                                  |
| [:print:]  | 任意可打印字符                                               |
| [:punct:]  | 既不在[:alnum:]又不在[:cntrl:]中的任意字符                   |
| [:space:]  | 包括空格在内的任意空白字符。                                 |
| [:upper:]  | 任意大写字母。相当于[A-Z]                                    |
| [:xdigit:] | 任意十六进制的数字。相当于[a-fA-F0-9]                        |

## 元字符

| 元字符 | 作用                         |
| ------ | ---------------------------- |
| *      | 重复0次或者多次              |
| +      | 重复一次或者多次。相当于{1,} |
| ?      | 重复0次或者1次               |
| {n}    | 重复n次                      |
| {n,}   | 重复至少n次                  |
| {n,m}  | 重复n-m次                    |

## 定位元字符

除了之前的重复元字符，正则还有一种特殊的定位元字符

| 元字符  | 作用     |
| ------- | -------- |
| ^       | 文本开始 |
| $       | 文本结尾 |
| [[:<:]] | 词的开始 |
| [[:>:]] | 词的结尾 |



## REGEXP_REPLACE

例子

下面的示例进行检查`phone_number`，寻找模式*`xxx`*。*`xxx`*. *`xxxx`*. Oracle 使用 ( *`xxx`*) *`xxx`*-重新格式化此模式*`xxxx`*。

```

选择
  REGEXP_REPLACE（电话号码，
                 '([[:digit:]]{3})\.([[:digit:]]{3})\.([[:digit:]]{4})',
                 '(\\1) \\2-\\3') "REGEXP_REPLACE"
  来自员工
  ORDER BY "REGEXP_REPLACE";

REGEXP_REPLACE
-------------------------------------------------- ------------------------------
(515) 123-4444
(515) 123-4567
(515) 123-4568
(515) 123-4569
(515) 123-5555
. . .
```

以下示例检查`country_name`. Oracle 在字符串中的每个非空字符后放置一个空格。

```

选择
  REGEXP_REPLACE(country_name, '(.)', '\\1 ') "REGEXP_REPLACE"
  来自国家；

REGEXP_REPLACE
-------------------------------------------------- ------------------------------
阿根廷
澳大利亚
比利时
巴西
加拿大
. . .
```

以下示例检查字符串，查找两个或多个空格。Oracle 将每次出现的两个或多个空格替换为一个空格。

```

选择
  REGEXP_REPLACE('500 Oracle Parkway, Redwood Shores, CA',
                 '( ){2,}', ' ') "REGEXP_REPLACE"
  从双重;

REGEXP_REPLACE
-------------------------------
500 Oracle Parkway, Redwood Shores, CA
```

**REGEXP_REPLACE 模式匹配：示例**

以下语句创建一个表 regexp_temp 并向其中插入值：

```

创建表 regexp_temp(empName varchar2(20), emailID varchar2(20));

INSERT INTO regexp_temp (empName, emailID) VALUES ('John Doe', 'johndoe@example.com');
INSERT INTO regexp_temp (empName, emailID) VALUES ('Jane Doe', 'janedoe@example.com');
```

以下语句将字符串 'Jane' 替换为 'John'：

```

SELECT empName, REGEXP_REPLACE (empName, 'Jane', 'John') "STRING_REPLACE" FROM regexp_temp;

EMPNAME STRING_REPLACE

```

以下语句将字符串 'John' 替换为 'Jane'：

```

SELECT empName, REGEXP_REPLACE (empName, 'Jane', 'John') "STRING_REPLACE" FROM regexp_temp;

EMPNAME STRING_REPLACE

```





**update** t_wb_blog t1,

(**SELECT** * **FROM** t_wb_blog 

**WHERE** Frelease_time **REGEXP** '^[0-9]+\\-[0-9]+\\ [0-9]+\\:[0-9]+$') **as** t2

**set** t1.Frelease_time = **REGEXP_REPLACE**(t1.Frelease_time, '([0-9]+\\-[0-9]+)(\\ [0-9]+\\:[0-9]+)', '2021-\\1')

**where** t1.Fid = t2.Fid;