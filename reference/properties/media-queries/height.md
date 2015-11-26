#Media Queries: height

##语法

- height：&lt;length&gt;


##取值

- &lt;length&gt;：用长度值来定义高度。不允许负值


##说明

定义输出设备中的页面可见区域高度。

- 与盒模型height不同，媒体特性height的取值只能是&lt;length&gt;。
- 本特性接受min和max前缀，因此可以派生出min-height和max-height两个媒体特性。


**简单列举几个应用示例：**

```css
@media (min-height:400px){ … }
@media screen and (height:600px){ … }
@import url(example.css) screen and (height:800px);
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
		<td rowspan="3"><strong>Basic Support</strong></td>
		<td class="unsupport">6.0-8.0</td>
		<td class="unsupport">2.0-3.0</td>
		<td class="partsupport">4.0-25.0<sup><a href="#support1">#1</a></sup></td>
		<td class="partsupport">6.0<sup><a href="#support1">#1</a></sup></td>
		<td class="support" rowspan="3">15.0+</td>
		<td class="partsupport">6.0-6.1<sup><a href="#support1">#1</a></sup></td>
		<td class="partsupport">2.1-4.3<sup><a href="#support1">#1</a></sup></td>
		<td class="partsupport">18.0-24.0<sup><a href="#support1">#1</a></sup></td>
	</tr>
	<tr>
		<td class="partsupport">9.0<sup><a href="#support1">#1</a> <a href="#support2">#2</a></sup></td>
		<td class="support" rowspan="2">3.5+</td>
		<td class="support" rowspan="2">26.0+</td>
		<td class="support" rowspan="2">6.1+</td>
		<td class="support" rowspan="2">7.0+</td>
		<td class="support" rowspan="2">4.4+</td>
		<td class="support" rowspan="2">25.0+</td>
	</tr>
	<tr>
		<td class="partsupport">10.0-11.0<sup><a href="#support1">#1</a></sup></td>
	</tr>
</tbody>
</table>


- 不支持嵌套媒体查询。
- 使用height作为媒体查询条件，是包含滚动条在内的


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
@media all and (min-height:300px) and (max-height:500px){
	body{color:#f00;}
}
</style>
</head>
<body>
<div class="test">当页面可见高度大于300px小于500px时，本行文字显示为红色。试着调整你的viewport使得页面高度介于这个区间以查看效果</div>
</body>
</html>

```
