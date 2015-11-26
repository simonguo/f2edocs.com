#Media Queries: grid

##语法

- grid：&lt;integer&gt;


##取值

- &lt;integer&gt;：用整数值来定义是否使用栅格或点阵。只有1和0才是有效值，1代表是，0代表否


##说明

用来查询输出设备是否使用栅格或点阵。

- 本特性不接受min和max前缀。

**简单列举几个应用示例：**

```css
@media all and (grid){ … }
@import url(example.css) all and (grid:0);
```


##兼容性


<table class="compatible">
<thead>
	<tr>
		<th><a href="#title" title="查看本文档测试时所用浏览器版本">支持版本</a>\类型</th>
		<th><span class="browser-ie">IE</span></th>
		<th><span class="browser-firefox">Firefox</span></th>
		<th><span class="browser-safari">Safari</span></th>
		<th><span class="browser-chrome">Chrome</span></th>
		<th><span class="browser-opera">Opera</span></th>
	</tr>
</thead>
<tbody>
	<tr>
		<th>较早版本</th>
		<td class="unsupport">6-8</td>
		<td rowspan="2" class="support">4</td>
		<td rowspan="2" class="support">5.1.7</td>
		<td rowspan="2" class="support">13</td>
		<td rowspan="2" class="support">11.5</td>
	</tr>
	<tr>
		<th>较近版本</th>
		<td class="support">9</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
@media screen and (grid:0){
	body{color:#f00;}
}
</style>
</head>
<body>
<div class="test">当你的输出设备未使用栅格或点阵时，本行文字显示为红色</div>
<script>
</script>
</body>
</html>

```
