#flex-flow

##语法

- flex-flow：&lt;' flex-direction '&gt; || &lt;' flex-wrap '&gt;
- 默认值：看各分拆属性
- 适用于：flex容器
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- &lt;' flex-direction '&gt;：定义弹性盒子元素的排列方向。
- &lt;' flex-wrap '&gt;：控制flex容器是单行或者多行。


##说明

复合属性。设置或检索弹性盒模型对象的子元素排列方式。

- 对应的脚本特性为flexFlow。


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
	-webkit-flex-flow:row nowrap;
	flex-flow:row nowrap;
}
#box2{
	-webkit-flex-flow:row wrap-reverse;
	flex-flow:row wrap-reverse;
}
#box3{
	height:220px;
	-webkit-flex-flow:column wrap-reverse;
	flex-flow:column wrap-reverse;
}
</style>
</head>
<body>
<h1>flex-flow示例：</h1>
<h2>flex-flow:row nowrap</h2>
<ul id="box" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>flex-flow:row wrap-reverse</h2>
<ul id="box2" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>flex-flow:column wrap-reverse;</h2>
<ul id="box3" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
</body>
</html>

```
