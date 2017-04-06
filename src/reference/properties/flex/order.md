#order

##语法

- order：&lt;integer&gt;
- 默认值：0
- 适用于：flex子项和flex容器中的绝对定位子元素
- 继承性：无
- 动画性：是
- 计算值：指定值


##取值

- &lt;integer&gt;：用整数值来定义排列顺序，数值小的排在前面。可以为负值。


##说明

设置或检索弹性盒模型对象的子元素出現的順序。

- order定义将会影响 &lt;' position '&gt; 值为static元素的层叠级别，数值小的会被数值大的盖住。


**demo：**

```css
.test {
	display: flex;
}
.item2 {
	order: -1;
	margin: -30px;
}
```

```html
<div class="test">
	<p class="item1">flex item1</p>
	<p class="item2">flex item2</p>
</div>
```

>此时，item1将会盖在item2之上


- 对应的脚本特性为order。


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
		<td class="unsupport">2.0-21.0</td>
		<td class="unsupport">4.0-20.0</td>
		<td class="unsupport">6.0</td>
		<td class="support">15.0+<sup class="fix">-webkit-</sup></td>
		<td class="unsupport">6.0-6.1</td>
		<td class="unsupport">2.1-4.3</td>
		<td class="unsupport">18.0-19.0</td>
	</tr>
	<tr>
		<td class="support" rowspan="2">11.0+</td>
		<td class="support" rowspan="2">22.0+</td>
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
	margin:0;padding:10px;list-style:none;background-color:#eee;}
.box li{width:100px;height:100px;border:1px solid #aaa;text-align:center;}
#box li:nth-child(3){
	-webkit-order:-1;
	order:-1;
}
</style>
</head>
<body>
<h1>order示例：</h1>
<ul id="box" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
	<li>d</li>
	<li>e</li>
</ul>
</body>
</html>

```
