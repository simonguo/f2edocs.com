#CSS Media Queries Module

##语法

- &lt;media_query_list&gt;：[&lt;media_query&gt;[',' &lt;media_query&gt;]*]?
- &lt;media_query&gt;：[only | not]? &lt;media_type&gt; [and &lt;expression&gt;]* | &lt;expression&gt; [and &lt;expression&gt;]*
- &lt;expression&gt;：'('&lt;media_feature&gt;[:&lt;value&gt;]?')'


##说明

通过不同的媒体类型和条件定义样式表规则。

- 媒体查询让CSS可以更精确作用于不同的媒体类型和同一媒体的不同条件。
- 媒体查询的大部分媒体特性都接受min和max用于表达“大于或等于”和“小与或等于”。如：width会有min-width和max-width
- 媒体查询可以被用在CSS中的@media和@import规则上，也可以被用在HTML和XML中。


示例代码：

```css
@media screen and (width:800px){ … }
@import url(example.css) screen and (width:800px);
&lt;link media="screen and (width:800px)" rel="stylesheet" href="example.css" /&gt;
&lt;?xml-stylesheet media="screen and (width:800px)" rel="stylesheet" href="example.css" ?&gt;
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
		<th>版本</th>
		<td class="unsupport">6-8</td>
		<td rowspan="2" class="support">4</td>
		<td rowspan="2" class="support">5.1.7</td>
		<td rowspan="2" class="support">13</td>
		<td rowspan="2" class="support">11.5</td>
	</tr>
	<tr>
		<th>版本</th>
		<td class="support">9</td>
	</tr>
</tbody>
</table>
