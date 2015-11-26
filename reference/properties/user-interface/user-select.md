#user-select

##语法

- user-select：none | text | all | element
- 默认值：text
- 适用于：除替换元素外的所有元素
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- none：文本不能被选择
- text：可以选择文本
- all：当所有内容作为一个整体时可以被选择。如果双击或者在上下文上点击子元素，那么被选择的部分将是以该子元素向上回溯的最高祖先元素。
- element：可以选择文本，但选择范围受元素边界的约束


##说明

设置或检索是否允许用户选中文本。

- IE6-9不支持该属性，但支持使用标签属性 onselectstart="return false;" 来达到 user-select:none 的效果；Safari和Chrome也支持该标签属性；
- 直到Opera12.5仍然不支持该属性，但和IE6-9一样，也支持使用私有的标签属性 unselectable="on" 来达到 user-select:none 的效果；unselectable 的另一个值是 off；
- 除Chrome和Safari外，在其它浏览器中，如果将文本设置为 -ms-user-select:none;，则用户将无法在该文本块中开始选择文本。不过，如果用户在页面的其他区域开始选择文本，则用户仍然可以继续选择将文本设置为 -ms-user-select:none; 的区域文本；
- 对应的脚本特性为userSelect。


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
		<td class="unsupport">6.0-9.0</td>
		<td rowspan="2" class="support">4.0-40.0<sup class="fix">-moz-</sup></td>
		<td rowspan="2" class="support">4.0-8.0<sup class="fix">-webkit-</sup></td>
		<td rowspan="2" class="support">4.0-45.0<sup class="fix">-webkit-</sup></td>
		<td rowspan="2" class="support">6.0-8.0<sup class="fix">-webkit-</sup></td>
		<td rowspan="2" class="support">15.0-27.0<sup class="fix">-webkit-</sup></td>
		<td rowspan="2" class="support">6.0-8.3<sup class="fix">-webkit-</sup></td>
		<td rowspan="2" class="support">18.0-42.0<sup class="fix">-webkit-</sup></td>
	</tr>
	<tr>
		<td class="support">10.0-11.0<sup class="fix">-ms-</sup></td>
	</tr>
	<tr>
		<td rowspan="2">element</td>
		<td class="unsupport">6.0-9.0</td>
		<td rowspan="2" class="support">4.0-40.0<sup class="fix">-moz-</sup></td>
		<td rowspan="2" class="unsupport">4.0-8.0</td>
		<td rowspan="2" class="unsupport">4.0-45.0</td>
		<td rowspan="2" class="unsupport">6.0-8.0</td>
		<td rowspan="2" class="unsupport">15.0-27.0</td>
		<td rowspan="2" class="unsupport">6.0-8.3</td>
		<td rowspan="2" class="unsupport">18.0-42.0</td>
	</tr>
	<tr>
		<td class="support">10.0-11.0<sup class="fix">-ms-</sup></td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test{padding:10px;-webkit-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;background:#eee;}
</style>
</head>
<body>
<div class="test" onselectstart="return false;" unselectable="on">选择我试试，你会发现怎么也选择不到我，哈哈哈哈</div>
</body>
</html>

```
