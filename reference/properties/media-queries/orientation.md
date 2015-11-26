#Media Queries: orientation

##语法

- orientation：portrait | landscape
- 接受min/max前缀：是


##取值

- portrait：指定输出设备中的页面可见区域高度大于或等于宽度
- landscape：除portrait值情况外，都是landscape


##说明

定义输出设备中的页面可见区域高度是否大于或等于宽度。

- 本特性不接受min和max前缀。


**简单列举几个应用示例：**

```css
@media screen and (orientation:portrait){ … }
@import url(example.css) screen and (orientation:landscape);
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
.test::after {
	color: red;
}
@media screen and (orientation: portrait){
	.test::after {
		content: "竖屏";
	}
}
@media screen and (orientation: landscape){
	.test::after {
		content: "横屏";
	}
}
</style>
</head>
<body>
<div class="test">你现在是：</div>
</body>
</html>

```
