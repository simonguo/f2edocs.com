# ECMAScript6 编码规范--广发证券前端团队

> 本规范是基于JavaScript规范拟定的，只针对ES6相关内容进行约定

> 如变量命名，是否加分号等约定的请参考JavaScript规范

> 应注意目前的代码转换工具(如Babel，Traceur)不够完善,有些特性须谨慎使用

### [ES6 Coding Style English Version](https://github.com/gf-web/es6-coding-style/blob/master/es6-coding-style-en.md)

## 规范内容

1. [声明 Declarations](#声明)
2. [字符串 Strings](#字符串)
3. [解构 Destructuring](#解构)
4. [数组 Arrays](#数组)
5. [函数 Functions](#函数)
6. [类 Classes](#类)
7. [模块 Modules](#模块)
8. [版权 Copyright](#copyright)

### 声明

- 1.1 变量

> 对于只在当前作用域下有效的变量，应使用`let`来代替`var`

> 对于全局变量声明，采用`var`，但应避免声明过多全局变量污染环境

```js
// 不好
const variables;
const globalObj = null; // 不是常量
let globalObj = null;

for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); // 4


// 好
let variables;
var globalObj = null;

for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); // ReferenceError: i is not defined
```

- 1.2 常量

> 对于常量应使用`const`进行声明，命名采用驼峰写法

> 对于使用 immutable 数据应用`const`进行声明

> 注意: `const`与`let`只在声明所在的块级作用域内有效

```js
// 不好
let someNum = 123;
const AnotherStr = '不变的字符串';
let arr = ['不', '变', '数', '组'];
var ANOTHER_OBJ = {
  '不变对象': true
};


// 好
const someNum = 123;
const anotherStr = '不变的字符串';
const arr = ['不', '变', '数', '组'];
const anotherObj = {
  '不变对象': true
};

```

#### 字符串

- 2.1 处理多行字符串,使用模板字符串

> 以反引号( ` )标示

> 可读性更强，代码更易编写

> 注意排版引起空格的问题，使用场景为声明HTML模板字符串

```js
// 不好
const tmpl = '<div class="content"> \n' +
              '<h1>这是换行了。</h1> \n' +
            '</div>';


// 好
const tmpl = `
<div class="content">
  <h1>这是换行了。</h1>
</div>`;
```

- 2.2 处理字符串拼接变量时,使用模板字符串

```js
  // 不好
  function sayHi(name) {
    return 'How are you, ' + name + '?';
  }


  // 好
  function sayHi(name) {
    return `How are you, ${name}?`;
  }
```

#### 解构

- 3.1 嵌套结构的对象层数不能超过3层

```js
// 不好
let obj = {
  'one': [
    {
      'newTwo': [
        {
          'three': [
            'four': '太多层了，头晕晕'
          ]
        }
      ]
    }
  ]
};


// 好
let obj = {
  'one': [
    'two',
    {
      'twoObj': '结构清晰'
    }
  ]
};

```

- 3.2 解构语句中统一不使用圆括号

```js
// 不好
[(a)] = [11]; // a未定义
let { a: (b) } = {}; // 解析出错


// 好
let [a, b] = [11, 22];
```

- 3.3 对象解构

> 对象解构 元素与顺序无关

> 对象指定默认值时仅对恒等于undefined ( !== null ) 的情况生效

- 3.3.1 若函数形参为对象时，使用对象解构赋值

```js
// 不好
function someFun(opt) {
  let opt1 = opt.opt1;
  let opt2 = opt.opt2;
  console.log(op1);
}


// 好
function someFun(opt) {
  let { opt1, opt2 } = opt;
  console.log(`$(opt1) 加上 $(opt2)`);
}

function someFun({ opt1, opt2 }) {
  console.log(opt1);
}
```

- 3.3.2 若函数有多个返回值时，使用对象解构，不使用数组解构，避免添加顺序的问题

```js
// 不好
function anotherFun() {
  const one = 1, two = 2, three = 3;
  return [one, two, three];
}
const [one, three, two] = anotherFun(); // 顺序乱了
// one = 1, two = 3, three = 2


// 好
function anotherFun() {
  const one = 1, two = 2, three = 3;
  return { one, two, three };
}
const { one, three, two } = anotherFun(); // 不用管顺序
// one = 1, two = 2, three = 3
```

- 3.3.3 已声明的变量不能用于解构赋值（语法错误）

```js
// 语法错误
let a;
{ a } = { b: 123};
```

- 3.4 数组解构

> 数组元素与顺序相关

- 3.4.1 交换变量的值

```js
let x = 1;
let y = 2;

// 不好
let temp;
temp = x;
x = y;
y = temp;


// 好
[x, y] = [y, x]; // 交换变量
```

- 3.4.2 将数组成员赋值给变量时，使用数组解构

```js
const arr = [1, 2, 3, 4, 5];

// 不好
const one = arr[0];
const two = arr[1];


// 好
const [one, two] = arr;
```

#### 数组

- 4.1 将类数组(array-like)对象与可遍历对象(如`Set`, `Map`)转为真正数组

> 采用`Array.from`进行转换

```js
// 不好
function foo() {
  let args = Array.prototype.slice.call(arguments);
}


// 好
function foo() {
  let args = Array.from(arguments);
}

```
- 4.2 数组去重

> 结合`Set`结构与`Array.from`

> 使用indexOf，HashTable等形式，不够简洁清晰

```js
// 好
function deduplication(arr) {
  return Array.from(new Set(arr));
}
```
- 4.3 数组拷贝

> 采用数组扩展`...`形式

```js
const items = [1, 2, 3];

// 不好
const len = items.length;
let copyTemp = [];
for (let i = 0; i < len; i++) {
  copyTemp[i] = items[i];
}


// 好
let copyTemp = [...items];
```
- 4.4 将一组数值转为数组

> 采用`Array.of`进行转换

```js
// 不好
let arr1 = new Array(2); // [undefined x 2]
let arr2 = new Array(1, 2, 3); // [1, 2, 3]


// 好
let arr1 = Array.of(2);  // [2]
let arr2 = Array.of(1, 2, 3); // [1, 2, 3]
```

#### 函数

- 5.1 当要用函数表达式或匿名函数时，使用箭头函数(Arrow Functions)

> 箭头函数更加简洁，并且绑定了this

```js
// 不好
const foo = function(x) {
  console.log(foo.name); // 返回'' ，函数表达式默认省略name属性
};

[1, 2, 3].map(function(x) {
  return x + 1;
});

var testObj = {
  name: 'testObj',
  init() {
    var _this = this; // 保存定义时的this引用
    document.addEventListener('click', function() {
      return _this.doSth();
    }, false);
  },
  doSth() {
    console.log(this.name);
  }
};

// 好
const foo = (x) => {
  console.log(foo.name); // 返回'foo'
};

[1, 2, 3].map( (x) => {
  return x + 1;
});

var testObj = {
  name: 'testObj',
  init() {
    // 箭头函数自动绑定定义时所在的对象
    document.addEventListener('click', () => this.doSth(), false);
  },
  doSth() {
    console.log(this.name);
  }
};
```

- 5.1.1 箭头函数书写约定

> 函数体只有单行语句时，允许写在同一行并去除花括号

> 当函数只有一个参数时，允许去除参数外层的括号

```js
// 好
const foo = x => x + x; // 注意此处会隐性return x + x

const foo = (x) => {
  return x + x; // 若函数体有花括号语句块时须进行显性的return
};

[1, 2, 3].map( x => x * x);

```
- 5.1.2 用箭头函数返回一个对象，应用括号包裹

```js
// 不好
let test = x => { x: x }; // 花括号会变成语句块，不表示对象


// 好
let test = x => ({ x: x }); // 使用括号可正确return {x:x}
```

- 5.2 立即调用函数 IIFE

> 使用箭头函数

```js
// 不好
(function() {
  console.log('哈');
})();


// 好
(() => {
  console.log('哈');
})();

```

- 5.3 不使用 `arguments`, 采用rest语法`...`代替

> rest参数是真正的数组，不需要再转换

> 注意：箭头函数中不能使用`arguments`对象

```js
// 不好
function foo() {
  let args = Array.prototype.slice.call(arguments);
  return args.join('');
}


// 好
function foo(...args) {
  return args.join('');
}

```

- 5.4 函数参数指定默认值

> 采用函数默认参数赋值语法

```js
// 不好
function foo(opts) {
  opts = opts || {};// 此处有将0，''等假值转换掉为默认值的副作用
}


// 好
function foo(opts = {}) {
  console.log('更加简洁，安全');
}
```

- 5.5 对象中的函数方法使用缩写形式

> 更加简洁

> 函数方法不要使用箭头函数，避免this指向的混乱

```js
// 不好
const shopObj = {
  des: '对象模块写法',
  foo: function() {
    console.log(this.des);
  }
};

const shopObj = {
  des: '对象模块写法',
  foo: () => {
    console.log(this.des); // 此处会变成undefined.des，因为指向顶层模块的this
  }
};

// 好
const des = '对象模块写法'; // 使用对象属性值简写方式
const shopObj = {
  des,
  foo() {
    console.log(this.des);
  }
};
```


#### 类

- 6.1 类名应使用帕斯卡写法(`PascalCased`)

```js
// 好
class SomeClass {

}
```

- 6.1.1 类名与花括号须保留一个空格间距

> 类中的方法定义时，括号 `)` 也须与花括号 `{` 保留一个空格间距

```js
// 不好
class Foo{
  constructor(){
    // constructor
  }
  sayHi()    {
    // 仅保留一个空格间距
  }
}


// 好
class Foo {
  constructor() {
    // constructor
  }
  sayHi() {
    // 仅保留一个空格间距
  }
}
```

- 6.2 定义类时，方法的顺序如下：

  - `constructor`

  - public `get/set` 公用访问器，`set`只能传一个参数

  - public methods 公用方法，公用相关命名使用小驼峰式写法(`lowerCamelCase`)

  - private `get/set` 私有访问器，私有相关命名应加上下划线 `_` 为前缀

  - private methods 私有方法

```js
// 好
class SomeClass {
  constructor() {
    // constructor
  }

  get aval() {
    // public getter
  }

  set aval(val) {
    // public setter
  }

  doSth() {
    // 公用方法
  }

  get _aval() {
    // private getter
  }

  set _aval() {
    // private setter
  }

  _doSth() {
    // 私有方法
  }
}

```

- 6.3 如果不是class类，不使用`new`

```js
// 不好
function Foo() {

}
const foo = new Foo();


// 好
class Foo {

}
const foo = new Foo();
```


- 6.4 使用真正意思上的类Class写法，不使用`prototype`进行模拟扩展

> Class更加简洁，易维护

```js
// 不好
function Dog(names = []) {
  this._names = [...names];
}
Dog.prototype.bark = function() {
  const currName = this._names[0];
  alert(`one one ${currName}`);
}

// 好
class Dog {
  constructor(names = []) {
    this._names = [...names];
  }
  bark() {
    const currName = this._names[0];
    alert(`one one ${currName}`);
  }
}
```

- 6.5 class应先定义后使用

> class不存在hoist问题，应先定义class再实例化

> 使用继承时，应先定义父类再定义子类

```js
// 不好
let foo = new Foo();
class SubFoo extends Foo {

}
class Foo {

}


// 好
class Foo {

}
let foo = new Foo();
class SubFoo extends Foo {

}
```

- 6.6 `this`的注意事项

> 子类使用`super`关键字时，`this`应在调用`super`之后才能使用

> 可在方法中`return this`来实现链式调用写法

```js
class Foo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// 不好
class SubFoo extends Foo {
  constructor(x, y, z) {
    this.z = z; // 引用错误
    super(x, y);
  }
}


// 好
class SubFoo extends Foo {
  constructor(x, y, z) {
    super(x, y);
    this.z = z; // this 放在 super 后调用
  }
  setHeight(height) {
    this.height = height;
    return this;
  }
}
```


#### 模块

- 7.1 使用`import / export`来做模块加载导出，不使用非标准模块写法

> 跟着标准走的人，运气总不会太差

```js
// 不好
const colors  = require('./colors');
module.exports = color.lightRed;


// 好
import { lightRed } from './colors';
export default lightRed;

```

- 7.1.1 `import / export` 后面采用花括号`{ }`引入模块的写法时，须在花括号内左右各保留一个空格

```js
// 不好
import {lightRed} from './colors';
import { lightRed} from './colors';

// 好
import { lightRed } from './colors';
```

- 7.2 应确保每个module有且只有一个默认导出模块

> 方便调用方使用

```js
// 不好
const lightRed = '#F07';

export lightRed;


// 好
const lightRed = '#F07';

export default lightRed;
```

- 7.3 `import` 不使用统配符 `* ` 进行整体导入

> 确保模块与模块之间的关系比较清晰

```js
// 不好
import * as colors from './colors';

// 好
import colors from './colors';

```

- 7.4 不要将`import`与`export`混合在一行

> 分开导入与导出，让结构更清晰，可读性更强

```js
// 不好
export { lightRed as default } from './colors';

// 好
import { lightRed } from './colors';
export default lightRed;
```

- 7.5 多变量要导出时应采用对象解构形式

> `export`置于底部，使欲导出变量更加清晰

```js
// 不好
export const lightRed = '#F07';
export const black  = '#000';
export const white  = '#FFF';

// 好
const lightRed = '#F07';
const black  = '#000';
const white  = '#FFF';

export default { lightRed, black, white };
```

#### Copyright

Copyright (c) 2015 广发证券IT
