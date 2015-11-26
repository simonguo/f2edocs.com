#Media Queries: color

##语法

- color：&lt;integer&gt;


##取值

- &lt;integer&gt;：用用整数值来定义彩色原件数。不允许负值


##说明

定义输出设备每一组彩色原件的个数。如果不是彩色设备，则值等于0

- 与色彩color不同，媒体特性color的取值只能是&lt;integer&gt;，用来表示色彩数。
- 本特性接受min和max前缀，因此可以派生出min-color和max-color两个媒体特性。


**简单列举几个应用示例：**

```css
@media screen and (color){ … }
@import url(example.css) screen and (color:0);

```

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
		<td class="unsupport">2.0-3.0</td>
		<td class="partsupport">4.0-25.0<sup><a href="#support1">#1</a></sup></td>
		<td class="partsupport">6.0<sup><a href="#support1">#1</a></sup></td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="partsupport">6.0-6.1<sup><a href="#support1">#1</a></sup></td>
		<td class="partsupport">2.1-4.3<sup><a href="#support1">#1</a></sup></td>
		<td class="partsupport">18.0-24.0<sup><a href="#support1">#1</a></sup></td>
	</tr>
	<tr>
		<td class="partsupport">9.0-11.0<sup><a href="#support1">#1</a></sup></td>
		<td class="support">3.5+</td>
		<td class="support">26.0+</td>
		<td class="support">6.1+</td>
		<td class="support">7.0+</td>
		<td class="support">4.4+</td>
		<td class="support">25.0+</td>
	</tr>
</tbody>
</table>


- 不支持嵌套媒体查询。


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
@media screen and (color){
	body{color:#f00;}
}
</style>
</head>
<body>
<div class="test">当你的输出设备是彩色的，本行文字显示为红色</div>
<script>
</script>
</body>
</html>

```
