#box-shadow

##语法

- box-shadow：none | &lt;shadow&gt; [ , &lt;shadow&gt; ]*
- &lt;shadow&gt; = inset? && &lt;length&gt;{2,4} && &lt;color&gt;?
- 默认值：none
- 适用于：所有元素
- 继承性：无
- 动画性：是，除了内、外阴影切换时
- 计算值：指定值


##取值

- none：无阴影
- &lt;length&gt;①：第1个长度值用来设置对象的阴影水平偏移值。可以为负值
- &lt;length&gt;②：第2个长度值用来设置对象的阴影垂直偏移值。可以为负值
- &lt;length&gt;③：如果提供了第3个长度值则用来设置对象的阴影模糊值。不允许负值
- &lt;length&gt;④：如果提供了第4个长度值则用来设置对象的阴影外延值。可以为负值
- &lt;color&gt;：设置对象的阴影的颜色。
- inset：设置对象的阴影类型为内阴影。该值为空时，则对象的阴影类型为外阴影


##说明

设置或检索对象阴影。

- 可以设定多组效果，每组参数值以逗号分隔。
- 对应的脚本特性为boxShadow。


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
		<td class="unsupport" rowspan="2">6.0-8.0</td>
		<td class="unsupport">2.0-3.0</td>
		<td class="support" rowspan="2">4.0-43.0<br><sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">3.1-8.1<br><sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">10.5-28.0<br><sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">3.2-8.1<br><sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">2.1-4.4.4<br><sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">18.0-40.0<br><sup class="fix">-webkit-</sup></td>
	</tr>
	<tr>
		<td class="partsupport">4.0-12.0<br><sup class="fix">-moz-</sup> <sup><a href="#support1">#1</a></sup></td>
	</tr>
	<tr>
		<td class="support">9.0+</td>
		<td class="support">4.0+</td>
		<td class="support">10.0+</td>
		<td class="support">5.1+</td>
		<td class="support">10.5+</td>
		<td class="support">5.0+</td>
		<td class="support">4.0+</td>
		<td class="support">18.0+</td>
	</tr>
</tbody>
</table>


- Firefox从13.0开始移除对-moz-的支持，仅支持标准的 &lt;' box-shadow '&gt; 写法，在4.0-12.0区间，两种方式都支持。


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test li {
	margin-top: 20px;
	list-style: none;
	width: 400px;
	padding: 10px;
	background: #eee;
}
.test .outset {
	box-shadow: 5px 5px rgba(0, 0, 0, .6);
}
.test .outset-blur {
	box-shadow: 5px 5px 5px rgba(0, 0, 0, .6);
}
.test .outset-extension {
	box-shadow: 5px 5px 5px 10px rgba(0, 0, 0, .6);
}
.test .inset {
	box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, .6) inset;
}
.test .multiple-shadow {
	box-shadow:
		0 0 5px 3px rgba(255, 0, 0, .6),
		0 0 5px 6px rgba(0, 182, 0, .6),
		0 0 5px 10px rgba(255, 255, 0, .6);
}
</style>
</head>
<body>
<ul class="test">
	<li class="outset">外阴影常规效果<br>box-shadow:5px 5px rgba(0,0,0,.6);</li>
	<li class="outset-blur">外阴影模糊效果<br>box-shadow:5px 5px 5px rgba(0,0,0,.6);</li>
	<li class="outset-extension">外阴影模糊外延效果<br>box-shadow:5px 5px 5px 10px rgba(0,0,0,.6);</li>
	<li class="inset">内阴影效果<br>box-shadow:2px 2px 5px 1px rgba(0,0,0,.6) inset;</li>
	<li class="multiple-shadow">外阴影模糊效果<br>box-shadow:5px 5px 5px rgba(0,0,0,.6);</li>
</ul>
</body>
</html>

```
