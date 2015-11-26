#Media Queries: scan

##语法

- scan：progressive | interlace


##取值

- progressive：连续扫描
- interlace：交织扫描


##说明

定义电视类设备的扫描工序。

- 本特性不接受min和max前缀。

**简单列举几个应用示例：**
```css
@media tv and (scan:progressive){ … }
@import url(example.css) tv and (scan:interlace);
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
		<td rowspan="2" class="unsupport">5.1.7</td>
		<td rowspan="2" class="unsupport">13-23</td>
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
@media tv and (scan:progressive){
	body{color:#f00;}
}
</style>
</head>
<body>
<div class="test">当你的电视类设备的扫描工序为progressive时，本行文字显示为红色</div>
<script>
</script>
</body>
</html>

```
