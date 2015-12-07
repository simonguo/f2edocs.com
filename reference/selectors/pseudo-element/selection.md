#E::selection

##语法

- E::selection { sRules }


##说明

设置对象被选择时的样式。

- 需要注意的是，::selection只能定义被选择时的background-color，color及text-shadow(IE11尚不支持定义该属性)。


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
		<td class="unsupport">6.0-8.0</td>
		<td class="support" rowspan="2">2.0-38.0<br><sup class="fix">-moz-</sup></td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">3.1+</td>
		<td class="support" rowspan="2">3.5+</td>
		<td class="support" rowspan="2">3.2+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">9.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
p::-moz-selection{background:#000;color:#f00;}
p::selection{background:#000;color:#f00;}
</style>
</head>
<body>
<h1>选中下面的文字，看看它的颜色</h1>
<p>你选中这段文字后，看看它们的文本颜色和背景色，就能明白::selection的作用。</p>
</body>
</html>

```
