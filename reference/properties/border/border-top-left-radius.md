#border-top-left-radius

##语法

- border-top-left-radius：[ &lt;length&gt; | &lt;percentage&gt; ]{1,2}
- 默认值：0
- 适用于：所有元素
- 继承性：无
- 动画性：是
- 计算值：指定值


##取值

- &lt;length&gt;：用长度值设置对象的左上角(top-left)圆角半径长度。不允许负值
- &lt;percentage&gt;：用百分比设置对象的左上角(top-left)圆角半径长度。不允许负值


##说明

设置或检索对象的左上角圆角边框。提供2个参数，2个参数以空格分隔，每个参数允许设置1个参数值，第1个参数表示水平半径，第2个参数表示垂直半径，如第2个参数省略，则默认等于第1个参数

- 如设置border-top-left-radius:5px 10px表示top-left这个角的水平圆角半径为5px，垂直圆角半径为10px。
- 对应的脚本特性为borderTopLeftRadius。


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
		<td rowspan="2"><strong>Basic Support</strong></td>
		<td class="unsupport">6.0-8.0</td>
		<td class="partsupport">2.0-12.0<br><sup class="fix">-moz-</sup> <sup><a href="#support1">#1</a> <a href="#support2">#2</a></sup></td>
		<td class="support">4.0-43.0<br><sup class="fix">-webkit-</sup></td>
		<td class="support">3.1-8.1<br><sup class="fix">-webkit-</sup></td>
		<td class="support">10.5-28.0<br><sup class="fix">-webkit-</sup></td>
		<td class="support">3.2-8.1<br><sup class="fix">-webkit-</sup></td>
		<td class="support">2.1-4.4.4<br><sup class="fix">-webkit-</sup></td>
		<td class="support">18.0-40.0<br><sup class="fix">-webkit-</sup></td>
	</tr>
	<tr>
		<td class="support">9.0+</td>
		<td class="support">4.0+</td>
		<td class="support">5.0+</td>
		<td class="support">5.0+</td>
		<td class="support">10.5+</td>
		<td class="support">4.0+</td>
		<td class="support">2.2+</td>
		<td class="support">18.0+</td>
	</tr>
</tbody>
</table>


- Firefox从13.0开始移除对-moz-的支持，仅支持标准的border-radius写法，在4.0-12.0区间，两种方式都支持。
- Firefox支持的厂商前缀写法是非标准的-moz-border-radius-topleft，而不是-moz-border-top-left-radius。


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
ul {
	margin: 0;
	padding: 0;
}
li {
	list-style: none;
	margin: 10px 0 0 0;
	padding: 10px;
	background: #bbb;
}
.test .one {
	border-top-left-radius: 30px;
}
.test .two {
	border-top-left-radius: 10px 30px;
}
</style>
</head>
<body>
<ul class="test">
	<li class="one">水平与垂直半径相同时<br>border-top-left-radius:30px;</li>
	<li class="two">水平与垂直半径不同时<br>border-top-left-radius:10px 30px;</li>
</ul>
</body>
</html>

```
