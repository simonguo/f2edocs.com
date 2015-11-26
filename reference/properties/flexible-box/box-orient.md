#box-orient

##语法

- box-orient：horizontal | vertical | inline-axis | block-axis
- 默认值：horizontal
- 适用于：伸缩盒容器
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- horizontal：设置伸缩盒对象的子元素从左到右水平排列
- vertical：设置伸缩盒对象的子元素从上到下纵向排列
- inline-axis：设置伸缩盒对象的子元素沿行轴排列
- block-axis：设置伸缩盒对象的子元素沿块轴排列


##说明

设置或检索伸缩盒对象的子元素的排列方式。

- 可以通过box-orient:horizontal + box-direction:normal 达到新版本 flex-direction:row 的效果；
- 可以通过box-orient:horizontal + box-direction:reverse 达到新版本 flex-direction:row-reverse 的效果；
- 可以通过box-orient:vertical + box-direction:normal 达到新版本 flex-direction:column 的效果；
- 可以通过box-orient:horizontal + box-direction:reverse 达到新版本 flex-direction:column-reverse 的效果；
- 对应的脚本特性为boxOrient。


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
		<td class="support">2.0-40.0<sup class="fix">-moz-</sup></td>
		<td class="support">4.0-45.0<sup class="fix">-webkit-</sup></td>
		<td class="support">6.0-8.0<sup class="fix">-webkit-</sup></td>
		<td class="support">15.0-29.0<sup class="fix">-webkit-</sup></td>
		<td class="support">6.0-8.3<sup class="fix">-webkit-</sup></td>
		<td class="support">2.1-4.4.4<sup class="fix">-webkit-</sup></td>
		<td class="support">18.0-42.0<sup class="fix">-webkit-</sup></td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
h1{font:bold 20px/1.5 georgia,simsun,sans-serif;}
.box{display:-webkit-box;display:-moz-box;display:-ms-box;width:600px;height:180px;margin:0;padding:0;list-style:none;}
#box{-webkit-box-orient:horizontal;-moz-box-orient:horizontal;-ms-box-orient:horizontal;}
#box2{-webkit-box-orient:vertical;-moz-box-orient:vertical;-ms-box-orient:vertical;}
.box li:nth-child(1){-webkit-box-flex:1;-moz-box-flex:1;-ms-box-flex:1;background:#666;}
.box li:nth-child(2){-webkit-box-flex:2;-moz-box-flex:2;-ms-box-flex:2;background:#999;}
.box li:nth-child(3){-webkit-box-flex:3;-moz-box-flex:3;-ms-box-flex:3;background:#ccc;}
</style>
</head>
<body>
<h1>子元素横向排列 box-orient:horizontal;</h1>
<ul id="box" class="box">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
<h1>子元素纵向排列 box-orient:vertical;</h1>
<ul id="box2" class="box">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
</body>
</html>

```
