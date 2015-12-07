#Media Queries: device-aspect-ratio

##语法

- device-aspect-ratio：&lt;ratio&gt;


##取值

- &lt;ratio&gt;：指定比率


##说明

定义输出设备的屏幕可见宽度与高度的比率。

- 如常讲的显示器屏幕比率：4/3, 16/9, 16/10
- 本特性接受min和max前缀，因此可以派生出min-device-aspect-ratio和max-device-aspect-ratio两个媒体特性。


**简单列举几个应用示例：**

```css
@media screen and (device-aspect-ratio:4/3){ … }
@import url(example.css) screen and (min-device-aspect-ratio:4/3);
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
@media screen and (device-aspect-ratio:16/10){
	body{color:#f00;}
}
</style>
</head>
<body>
<div class="test">当你将输出设备屏幕分辨率为16:10时，本行文字显示为红色</div>
<script>
</script>
</body>
</html>

```
