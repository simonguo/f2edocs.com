#flex-wrap

##语法

- flex-wrap：nowrap | wrap | wrap-reverse
- 默认值：nowrap
- 适用于：flex容器
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- nowrap：flex容器为单行。该情况下flex子项可能会溢出容器
- wrap：flex容器为多行。该情况下flex子项溢出的部分会被放置到新行，子项内部会发生断行
- wrap-reverse：反转 wrap 排列。


##说明

该属性控制flex容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向。

- 对应的脚本特性为flexWrap。


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
		<td rowspan="3"><strong>Basic Support</strong></td>
		<td class="unsupport">6.0-10.0</td>
		<td class="unsupport">2.0-27.0</td>
		<td class="unsupport">4.0-20.0</td>
		<td class="unsupport">6.0</td>
		<td class="support">15.0+<sup class="fix">-webkit-</sup></td>
		<td class="unsupport">6.0-6.1</td>
		<td class="unsupport">2.1-4.3</td>
		<td class="unsupport">18.0-19.0</td>
	</tr>
	<tr>
		<td class="support" rowspan="2">11.0</td>
		<td class="support" rowspan="2">28.0+</td>
		<td class="support">21.0+<sup class="fix">-webkit-</sup></td>
		<td class="support">6.1+<sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">17.0+</td>
		<td class="support">7.0+<sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">4.4+</td>
		<td class="support">20.0+<sup class="fix">-webkit-</sup></td>
	</tr>
	<tr>
		<td class="support">29.0+</td>
		<td class="support">9.0+</td>
		<td class="support">9.0+</td>
		<td class="support">28.0+</td>
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
.box{
	display:-webkit-flex;
	display:flex;
	width:220px;margin:0;padding:10px;list-style:none;background-color:#eee;}
.box li{width:100px;height:100px;border:1px solid #aaa;text-align:center;}
#box{
	-webkit-flex-wrap:nowrap;
	flex-wrap:nowrap;
}
#box2{
	-webkit-flex-wrap:wrap;
	flex-wrap:wrap;
}
#box3{
	-webkit-flex-wrap:wrap-reverse;
	flex-wrap:wrap-reverse;
}
</style>
</head>
<body>
<h1>flex-wrap示例：</h1>
<h2>flex-wrap:nowrap</h2>
<ul id="box" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>flex-wrap:wrap</h2>
<ul id="box2" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>flex-wrap:wrap-reverse</h2>
<ul id="box3" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
</body>
</html>

```
