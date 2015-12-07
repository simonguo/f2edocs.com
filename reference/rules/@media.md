#@media

##语法

- @media：&lt;media_query_list&gt;
- &lt;media_query_list&gt;：[&lt;media_query&gt;[',' &lt;media_query&gt;]*]?
- &lt;media_query&gt;：[only | not]? &lt;media_type&gt; [and &lt;expression&gt;]* | &lt;expression&gt; [and &lt;expression&gt;]*
- &lt;expression&gt;：'('&lt;media_feature&gt;[:&lt;value&gt;]?')'


##取值

- &lt;media_type&gt;：指定设备类型。媒体类型包括：参阅媒体类型。(CSS2)
- &lt;expression&gt;：指定媒体查询使用的媒体特性。这类似于CSS属性，如：max-width:960px。(CSS3)


##说明

指定样式表规则用于指定的媒体类型和查询条件。

- IE8及以下只能实现CSS2中的部分，即只可以设置媒体类型。
- 媒体查询可以被用在CSS中的@media和@import规则上，也可以被用在HTML和XML中。


**示例代码：**

```css
@media screen and (width:800px){ … }
@import url(example.css) screen and (width:800px);
```

- 列举几种使用方式：

```css
@media all and (width:1024px){
	body{color:#f00;}
}
@media all and (device-height:800px){ … }
@media all and (orientation:landscape){ … }
@media all and (device-aspect-ratio:16/10){ … }
@media all and (min-color:1){ … }
@media all and (monochrome:0){ … }
@media all and (grid:0){ … }
```


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
		<td class="support" rowspan="2">2.0+</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">3.1+</td>
		<td class="support" rowspan="2">15.0+</td>
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
.test,
.test2 {
	display: none;
}
/* 本条为CSS2部分，IE8及以下只支持本条 */
@media screen {
	body{ color: #f00; }
}
/* 下列为CSS3部分 */
@media screen and (min-width: 960px) {
	body{ background: #999; }
}
@media screen and (device-width: 1024px) {
	.test { display: block; }
}
@media screen and (width: 1024px) {
	.test2 { display: block; }
}
</style>
</head>
<body>
<div>Media Queries媒体查询</div>
<div class="test">如果你的显示器水平分辨率为1024px的话将能看到本条规则的效果（取决于输出设备屏幕分辨率的大小，不随包括浏览器在内的窗体大小而改变）</div>
<div class="test2">如果视口宽度为1024px的话将能看到本条规则的效果（随包括浏览器在内的窗体大小而改变）</div>
</body>
</html>

```
