#@import

##语法

- @import &lt;url&gt; &lt;media_query_list&gt;
- &lt;media_query_list&gt;：[&lt;media_query&gt;[',' &lt;media_query&gt;]*]?
- &lt;media_query&gt;：[only | not]? &lt;media_type&gt; [and &lt;expression&gt;]* | &lt;expression&gt; [and &lt;expression&gt;]*
- &lt;expression&gt;：'('&lt;media_feature&gt;[:&lt;value&gt;]?')'


##取值

- &lt;url&gt;：使用绝对或相对地址指定导入的外部样式表文件。可以是url(url)或者直接是一个url
- &lt;media_query_list&gt;：指定媒体类型和查询条件。


##说明

指定导入的外部样式表及目标媒体。

- 该规则必须在样式表头部最先声明。并且其后的分号是必需的，如果省略了此分号，外部样式表将无法正确导入，并会生成错误信息。
- IE使用@import无法引入超过35条的样式表。
- 使用url(url)和直接使用url需要注意的地方：


**示例代码：**

```css
@import url("global.css");
@import url(global.css);
@import "global.css";
```

>以上3种方式都有效。当使用url(url)的方式时，包住路径的引号可有可无；当直接使用url时，包住路径的引号必须保留。


- 指定媒体查询：


**示例代码：**

```css
@import url(example.css) screen and (min-width:800px);
@import url(example.css) screen and (width:800px),(color);
@import url(example.css) screen and (min-device-width:500px) and (max-device-width:1024px);
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
		<td><strong>Basic Support</strong></td>
		<td class="support">6.0+</td>
		<td class="support" rowspan="5">2.0+</td>
		<td class="support" rowspan="5">4.0+</td>
		<td class="support" rowspan="5">3.1+</td>
		<td class="support" rowspan="5">15.0+</td>
		<td class="support" rowspan="5">3.2+</td>
		<td class="support" rowspan="5">2.1+</td>
		<td class="support" rowspan="5">18.0+</td>
	</tr>
	<tr>
		<td rowspan="2">媒体类型</td>
		<td class="unsupport">6.0-7.0</td>
	</tr>
	<tr>
		<td class="support">8.0+</td>
	</tr>
	<tr>
		<td rowspan="2">媒体查询</td>
		<td class="unsupport">6.0-8.0</td>
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
@import url("style.css") screen, print;
</style>
</head>
<body>

</body>
</html>

```
