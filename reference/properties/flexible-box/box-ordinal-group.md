#box-ordinal-group

##语法

- box-ordinal-group：&lt;integer&gt;
- 默认值：1
- 适用于：伸缩盒子元素
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- &lt;integer&gt;：用整数值来定义伸缩盒对象的子元素显示顺序。


##说明

设置或检索伸缩盒对象的子元素的显示顺序。

- 效果等同于过渡版本的flex-order属性和新版本的order属性；
- 数值较低的元素显示在数值较高的元素前面；
- 相同数值的元素，它们的显示顺序取决于它们的代码顺序；
- 对应的脚本特性为boxOrdinalGroup。


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
.box{display:-webkit-box;display:-moz-box;display:-ms-box;background:#000;width:240px;height:100px;margin:0;padding:10px;list-style:none;vertical-align:top;}
.box li{padding:20px;}
.box li:nth-child(1){-webkit-box-ordinal-group:3;-moz-box-ordinal-group:3;-ms-box-ordinal-group:3;background:#666;}
.box li:nth-child(2){background:#999;}
.box li:nth-child(3){background:#ccc;}
</style>
</head>
<body>
<h1>box-radinal-group</h1>
<ul id="box" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
</body>
</html>

```
