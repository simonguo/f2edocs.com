# 条件Hack
## 语法
## 取值
- 是否：指定是否IE或IE某个版本。关键字：空
- 大于：选择大于指定版本的IE版本。关键字：gt（greater than）
- 大于或等于：选择大于或等于指定版本的IE版本。关键字：gte（greater than or equal）
- 小于：选择小于指定版本的IE版本。关键字：lt（less than）
- 小于或等于：选择小于或等于指定版本的IE版本。关键字：lte（less than or equal）
- 非指定版本：选择除指定版本外的所有IE版本。关键字：!

## 说明
用于选择IE浏览器及IE的不同版本
- if条件Hack是HTML级别的（包含但不仅是CSS的Hack，可以选择任何HTML代码块）
- 如不想在非IE中看到某区域，可这样写：

```html
<!--[if IE]>
<p>你在非IE中将看不到我的身影</p>
<![endif]-->
```
上述p代码块，将只在IE中可见。

- if条件6种选择方式的使用示例（下述代码中被条件注释包含的HTML代码块也可以是link标记）：
- 是否，示例代码：

```html
<!--[if IE]>
<style>
.test{color:red;}
</style>
<![endif]-->
```

在上述代码中，只有IE浏览，才能看到应用了test类的元素是红色文本。
- 大于，示例代码：

```html
<!--[if gt IE 6]>
<style>
.test{color:red;}
</style>
<![endif]-->
```


在上述代码中，只有IE6以上，才能看到应用了test类的元素是红色文本。
- 大于或等于，示例代码：

```html
<!--[if gte IE 6]>
<style>
.test{color:red;}
</style>
<![endif]-->
```

在上述代码中，只有IE6以上（含IE6），才能看到应用了test类的元素是红色文本。
- 小于，示例代码：

```html
<!--[if lt IE 7]>
<style>
.test{color:red;}
</style>
<![endif]-->
```

在上述代码中，只有IE7以下，才能看到应用了test类的元素是红色文本。
- 小于或等于，示例代码：

```html
<!--[if lte IE 7]>
<style>
.test{color:red;}
</style>
<![endif]-->
```

在上述代码中，只有IE7以下（含IE7），才能看到应用了test类的元素是红色文本。
- 非指定版本，示例代码：

```html
<!--[if ! IE 7]>
<style>
.test{color:red;}
</style>
<![endif]-->
```

在上述代码中，除IE7以外的IE版本，都能看到应用了test类的元素是红色文本。

## 示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
h1{margin:10px 0;font-size:16px;}
span{display:none;}
.not-ie{display:inline;}
</style>
<!--[if IE]>
<style>
.ie{display:inline;}
.not-ie{display:none;}
</style>
<![endif]-->

<!--[if IE 5]>
<style>
.ie5{display:inline;}
</style>
<![endif]-->

<!--[if IE 6]>
<style>
.ie6{display:inline;}
</style>
<![endif]-->

<!--[if IE 7]>
<style>
.ie7{display:inline;}
</style>
<![endif]-->

<!--[if IE 8]>
<style>
.ie8{display:inline;}
</style>
<![endif]-->

<!--[if IE 9]>
<style>
.ie9{display:inline;}
</style>
<![endif]-->
</head>
<body>
<div>
    您正在使用
    <span class="not-ie">非IE</span>
    <span class="ie">IE</span>
    <span class="ie5">5</span>
    <span class="ie6">6</span>
    <span class="ie7">7</span>
    <span class="ie8">8</span>
    <span class="ie9">9</span>
    浏览器
</div>
</body>
</html>
```
