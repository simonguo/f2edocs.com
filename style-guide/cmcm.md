猎豹移动前端编码规范
==============


##一.文件相关

1. 文件名以英文为主，可以使用下划线(如`active.html`)，在后端开发前的html页面如果数量比较多，为了方便寻找，可以使用数字+中文的形式(直观并且可以自动排序)；压缩包以项目名+日期的形式
2. 一律使用`utf-8`编码
3. html、css、js发布到线上都需要压缩
4. 在追求高度优化的站点，需要对图片也进行无损压缩

##二.HTML相关

1. 统一使用html5的dtd申明，并且title要尽量靠前，keywords和description，一个比较合理的示例

```
<!doctype html>
<html>
<head>
<meta http-equiv=Content-Type content="text/html;charset=utf-8">
<title>金山毒霸 – 最好的免费杀毒软件</title>
<meta name="keywords" content="金山毒霸,金山毒霸 2012,金山毒霸 2012体验版,金山毒霸2012免费下载" />
<meta name="description" content="杀毒软件免费下载 2012之全新金山毒霸2012今天正式发布alpha版本，马上报名体验，先睹为快！" />

````
2.两种合理引入`js`的方法

* (1)在head内使用动态创建script标签的方式引入js，实现异步加载

```
<head>
<script type="text/javascript">
    var s = document.createElement("script"),
    h = document.getElementsByTagName("head")[0];
    s.type = "text/javascript";s.async = true;
    s.src = "min.base.js";h.appendChild(s);
</script>
</head>
```
* (2)在底部`</body>`前使用同步加载的方式

```
<script src="http://l.tbcdn.cn/apps/top/x/sdk.js?appkey=21555299"></script>
</body>
```

* (3)标签语义化；代码简洁化；必要的注释；适当考虑内容的重要程度来安排文档流的先后顺序
* (4)移动端站点极度追求简洁，比如导航代码通常一个容器内编写一系列a标签即可，不必再写ul、li什么的，如

```
<div class=”nav”>
<a href=”#”>首页</a>
<a href=”#”>关于我们</a>
</div>
```
* (5)允许代码缩进，但须以一个tab等于4个空格来设置
* (6)可见的内联标签禁止换行书写，避免多人合作内联或者内联块状标签间的空白带来的问题，如下面是不太合理的

```
<!--不合理的代码-->
<div>
<span>test1</span>
<span>test2</span>
<a href=”#”>test3</a>
</div>

<!--合理的代码-->
<div><span>test1</span><span>test2</span><a href=”#”>test3</a></div>

```
* (7)页面中的引号统一使用双引号`"`

##CSS相关

可参考[人人网FED CSS规范](https://app.yinxiang.com/shard/s9/sh/f98d6c2b-0dc0-4f82-b489-8d0ab1296162/44c104cf7133c56392e4b34345c03690)

####常用命名

####注释

1. 文件顶部注释

```
/*
* @description: xxxxx中文说明
* @author: sunshilang
* @update: 2012-10-17 18:32
*/
```

2. 模块注释(推荐使用)

```
/* module: module1 by sunshilang */

/* module: module2 by sunshilang */
```

3. 3.编码风格
* (1)一个tab设置为四个空格宽度。
* (2)规则可以写成单行，或者多行，但是整个文件内的规则排版必须统一。如果是在html中写内联的css，则必须写成单行。
* (3)单行形式书写风格的排版约束
    a. 每一条规则的大括号` { `前后加空格
    b. 多个selector共用一个样式集，则多个selector必须写成多行形式
    c. 每一条规则结束的大括号 ` } ` 前加空格
    d. 属性名冒号之前不加空格，冒号之后加空格
    e. 每一个属性值后必须添加分号; 并且分号后空格

```
div.test { width: 100px; height: 200px; }
a:focus, a:hover { position: relative; right: 1px; }
```

4. 4.多行形式书写风格的排版约束
* (1)每一条规则的大括号 { 前添加空格
* (2)多个selector共用一个样式集，则多个selector必须写成多行形式
* (3)每一条规则结束的大括号 } 必须与规则选择器的第一个字符对齐
* (4)属性名冒号之前不加空格，冒号之后加空格
* (5)属性值之后添加分号;
4. 4.其他规范
* (1)使用单引号，不允许使用双引号
* (2)如果使用CSS3的属性，如果有必要加入浏览器前缀，则按照

```
-webkit- / -moz- / -ms- / -o- / std

```
的顺序进行添加，标准属性写在最后，并且属性名称要对齐，例如：

```
div.animation-demo {
    -webkit-animation: mymove 5s infinite;
       -moz-animation: mymove 5s infinite;
         -o-animation: mymove 5s infinite;
            animation: mymove 5s infinite;
}
```
5. 5.书写格式
* (1)规则命名中，一律采用小写加中划线的方式，不允许使用大写字母或 _
* (2)命名避免使用拼音，应该采用更简明有语义的英文单词进行组合
* (3)命名注意缩写，但是不能盲目缩写，具体请参见常用的CSS命名规则
* (4)不允许通过1、2、3等序号进行命名
* (5)避免class与id重名
* (6)id用于标识模块或页面的某一个父容器区域，名称必须唯一，不要随意新建id
* (7)class用于标识某一个类型的对象，命名必须言简意赅。
* (8)尽可能提高代码模块的复用，样式尽量用组合的方式
* (9)避免直接给标签设置样式
7. 7.属性书写顺序

####推荐的样式编写顺序
1. 显示属性
```
display/list-style/position/float/clear
```
2. 自身属性（盒模型）

```
width/height/margin/padding/border
```

3. 背景
```
background
```
(4)行高
```
line-height
```
(5)文本属性
```
color/font/text-decoration/text-align/
text-indent/vertical-align/white-space/content
```
(6)其他
```
cursor/z-index/zoom
```
(7)CSS3属性
```
transform/transition/animation/box-shadow/border-radius
```
(8)链接的样式请严格按照如下顺序添加：
```
a:link -> a:visited -> a:hover -> a:active（LoVeHAte）
```

8. css优化
* (1)合并margin、padding、border的-left/-top/-right/-bottom的设置，尽量使用短名称。
* (2)选择器应该在满足功能的基础上尽量简短，减少选择器嵌套，查询消耗。但是一定要避免覆盖全局样式设置。
* (3)注意选择器的性能，不要使用低性能的选择器，例如：
```
div > * {}
ul > li > a {}
body.profile ul.tabs.nav li a {}
```
* (4)禁止在css中使用*选择符
* (5)除非必须，否则，一般有class或id的，不需要再写上元素对应的tag，例如：
```
div#test { width: 100px; }
```
* (6)0后面不需要单位，比如0px可以省略成0，0.8px可以省略成.8px
* (7)如果可以，颜色尽量用三位字符表示，例如#aabbcc写成#abc
* (8)如果没有边框时，不要写成border:0，应该写成border:none
* (9)尽量避免使用AlphaImageLoader
* (10)在保持代码解耦的前提下，尽量合并重复的样式，例如：
```
h1 { color: black; }
p { color: black; }
h1, p { color: black; }
````
background、font等可以缩写的属性，尽量使用缩写形式
```
background: color image repeat attachment position;
font: style weight size/lineHeight family;
```
9. 9.hack使用规范
重要原则：尽量少用hack，能不hack坚决不hack，不允许滥用hack。
如果需要使用hack，请参考以下hack方式：
```
padding:10px;
padding:9px\9; /*IE*/
padding:8px\0; /*IE8-IE9*/
*padding:5px; /*IE6-IE7*/
_padding:4px; /*IE6*/
firefox	@-moz-document url-prefix() { … }
```
##四.javascript相关
####1.变量名

* (1)普通局部变量小写英文，如果需要组合，使用驼峰命名写法
```
var siteMap;
```
* (2)全局变量，首字母大写
```
var SiteMap;
```
* (3)全局常量，全部大写
```
var SITE_MAP;
```
* (4)dom对象，加el前缀
```
var elSite = $(‘#site’);
```
####2.类名首字母大写

```
var Site = {
	init: function() {

}
}
```
####3.空格
标点后面加一个空格，前面不加空格; 操作符前后各加一个空格;
```
//不规范
for (var i=0;i<l;i++) {
}

//规范
for (var i = 0; i < l; i++) {
}

```
