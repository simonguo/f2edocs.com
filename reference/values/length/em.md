#em

##说明

相对长度单位。相对于当前对象内文本的字体尺寸。

- 如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。


##兼容性


<table class="compatible">
<thead>
	<tr>
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
		<td class="support">6.0+</td>
		<td class="support">2.0+</td>
		<td class="support">4.0+</td>
		<td class="support">3.1+</td>
		<td class="support">3.5+</td>
		<td class="support">3.2+</td>
		<td class="support">2.1+</td>
		<td class="support">18.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
body { font-size: 14px; }
h1 { font-size: 16px; }
.size1 p { font-size: 1em; }
.size2 p { font-size: 2em; }
.size3 p { font-size: 3em; }
</style>
</head>
<body>
<h1>假定当前默认字体尺寸是14px，n em即为14px字体尺寸的n倍：</h1>
<ul>
	<li class="size1">
		<strong>1em</strong>:
		<p>1em大小的文字</p>
	</li>
	<li class="size2">
		<strong>2em</strong>:
		<p>2em大小的文字</p>
	</li>
	<li class="size3">
		<strong>3em</strong>:
		<p>3em大小的文字</p>
	</li>
</ul>
</body>
</html>

```
