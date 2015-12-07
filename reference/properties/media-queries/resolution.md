#Media Queries: resolution

##语法

- resolution：&lt;resolution&gt;


##取值

- &lt;resolution&gt;：用整数值来定义宽度。不允许负值


##说明

定义设备的分辨率。如：96dpi, 300dpi, 118dpcm

- 本特性接受min和max前缀，因此可以派生出min-resolution和max-resolution两个媒体特性。

**简单列举几个应用示例：**

```css
@media screen and (resolution){ … }
@import url(example.css) screen and (min-resolution:96dpi);
```

```html
<link media="screen and (resolution:96dpi)" rel="stylesheet" href="example.css" />
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
@media screen and (min-resolution:96dpi){
	body{color:#f00;}
}
</style>
</head>
<body>
<div class="test">当你的输出设备分辨率大于或等于96dpi时，本行文字显示为红色</div>
<script>
</script>
</body>
</html>

```
