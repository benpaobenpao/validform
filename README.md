# 数据校验
数据内容检测校验，内置了常用正则表达式。通过返回成功信息，异常时返回异常信息。


## 描述信息
desObj指数据描述内容信息。
valObj指数据值信息。
> ValidForm(desObj, valObj);


### desObj 结构
|名称|默认值|描述|
|----|----|----|
|transform| 空 |转换函数|
|rules| 空 | 校验信息 |


### rules 结构
|名称|默认值|描述|
|----|----|----|
|rule|  | true、RegExp、 Function |
|msg| 空 | 异常时描述信息 |
| typeLevel| 'error' | 字符串 error 或 warn



## 结果

|名称|默认值|描述|
|----|----|----|
|result| |返回数据校验结果，success 、 warn 、 error|
|rtObj| |成功不返回，返回异常信息|
|valObj| | 描述信息 |
|valObj| | 数据信息 |



## 安装
```
npm i @qdk/validform
const ValidForm = require("@qdk/validform");
```


## 例一、
```javascript
let transformFn = (val) => {
  return val + 10;
};

let ruleFn = (maxAge, val) => {
  return maxAge > val;
}


let descriptors = {
  name: {
    rules: [{
      rule: true,
      msg: '请输入姓名',
    }, {
      rule: /^\S{6,20}$/,
      msg: '请输入6到20位'
    }]
  },
  age: {
    transform: transformFn,
    rules: [{
      rule: true,
      msg: '请输入年龄',
    }, {
      rule: ruleFn.bind(this, 100),
      msg: '请年龄超过100',
      typeLevel: 'warn'
    }]
  },
  email: {
    rules: [{
      rule: ValidForm.email,
      msg: '请输入正确邮箱'
    }]
  }
};

let valObjs1 = {
  name: '张三',
  age: 110，
  email: 'qianduanka@qdk'
}

ValidForm(descriptors, valObjs1);


let valObjs2 = {
  name: 'zhangsan',
  age: 10,
  email: 'qianduanka@qdk.com'
}

ValidForm(descriptors, valObjs2);

let valObjs3 = {
  name: '张三',
  age: 10,
  email: 'qianduanka@qdk.com'
}

ValidForm(descriptors, valObjs3);
```


## 网站

[前端咖](https://www.qianduanka.com)

## 联系

微信号：qdk_qdk   
球球号：3313362924