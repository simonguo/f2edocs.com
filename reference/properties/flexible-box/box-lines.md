#box-lines

##语法

- box-lines：single | multiple
- 默认值：single
- 适用于：伸缩盒容器
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- single：伸缩盒对象的子元素只在一行内显示
- multiple：伸缩盒对象的子元素超出父元素的空间时换行显示


##说明

设置或检索伸缩盒对象的子元素是否可以换行显示。

- 效果类似于过渡版本和新版本的flex-wrap属性；
- 对应的脚本特性为boxLines。


##兼容性


<table class="compatible">
<thead>
	<tr>
		<th>Values</th>
		<th>IE</th>
		<th>Firefox</th>
		<th>Chrome</th>
		<th>Safari</th>
		<th>Opera</th>
		<th>iOS Safari</th>
		<th>Android Browser</th>
		<th>Android Chrome</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td><strong>Basic Support</strong></td>
		<td class="unsupport">6.0-11.0</td>
		<td class="unsupport">2.0-40.0</td>
		<td class="unsupport">4.0-45.0<sup class="fix">-webkit-</sup><sup><a href="#support1">#1</a></sup></td>
		<td class="unsupport">6.0-8.0<sup class="fix">-webkit-</sup><sup><a href="#support1">#1</a></sup></td>
		<td class="unsupport">15.0-29.0<sup class="fix">-webkit-</sup><sup><a href="#support1">#1</a></sup></td>
		<td class="unsupport">6.0-8.3</td>
		<td class="unsupport">2.1-4.4.4</td>
		<td class="unsupport">18.0-42.0</td>
	</tr>
</tbody>
</table>


- 实验性质支持box-lines，但没有实现该属性的效果（相当于不支持），请勿使用该属性


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
h1{font:bold 20px/1.5 georgia,simsun,sans-serif;}
.box{display:-webkit-box;display:-moz-box;display:-ms-box;background:#000;width:240px;height:100px;margin:0;padding:10px;list-style:none;vertical-align:top;}
.box li{width:160px;}
.box li:nth-child(1){background:#666;}
.box li:nth-child(2){background:#999;}
.box li:nth-child(3){background:#ccc;}
#box{-webkit-box-lines:single;-moz-box-lines:single;-ms-box-lines:single;}
#box2{-webkit-box-lines:multiple;-moz-box-lines:multiple;-ms-box-lines:multiple;}
</style>
</head>
<body>
<h1>box-lines:single;</h1>
<ul id="box" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h1>box-lines:multiple;</h1>
<ul id="box2" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
</body>
</html>

```
