#quotes

##语法

- quotes：none | [&lt;string&gt; &lt;string&gt;]+
- 默认值：none
- 适用于：所有元素，::before, ::after, ::alternate, ::marker, ::line-marker, margin areas, @footnote areas, and @page context
- 继承性：有
- 动画性：否
- 计算值：指定值


##取值

- none：content属性的open-quote和close-quote值将不会生成任何标记
- &lt;string&gt;：定义content属性的open-quote和close-quote值的标记，2个为一组


##说明

设置或检索对象内使用的嵌套标记。

- 对应的脚本特性为quotes。


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
		<td class="unsupport">6.0-7.0</td>
		<td class="support" rowspan="2">2.0+</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">8.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
q:lang(en){quotes:'[' ']' "<" ">";}
q:lang(zh-cmn-Hans){quotes:"«" "»" '"' '"';}
</style>
</head>
<body>
<p lang="en"><q>Quote me <q>Quote me</q> Quote me!</q></p>
<p lang="zh-cmn-Hans"><q>Quote me <q>Quote me</q> Quote me!</q></p>
</body>
</html>

```
