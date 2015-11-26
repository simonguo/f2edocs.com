#counter-increment

##语法

- counter-increment：none | [&lt;identifier&gt; &lt;integer&gt;]+
- 默认值：none
- 适用于：所有元素，::before, ::after, ::alternate, ::marker, ::line-marker, margin areas, @footnote areas, and @page context
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- none：阻止计数器增加
- &lt;identifier&gt;：identifier定义一个或多个将被增加的selector，id，或者class
- &lt;integer&gt;：定义计算器每次增加的数值，可以为负值，默认值是1


##说明

设定当一个selector发生时计数器增加的值。

- 对应的脚本特性为counterIncrement。


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
.test ol{margin:16px 0;padding:0;list-style:none;}
.test li li:before{color:#f00;font-family:georgia,serif,sans-serif;}
.counter1 li{counter-increment:testname;}
.counter1 li:before{content:counter(testname)".";}
.counter2 li{counter-increment:testname2 2;}
.counter2 li:before{content:counter(testname2)".";}
.counter3 li{counter-increment:testname3 -1;}
.counter3 li:before{content:counter(testname3)".";}
</style>
</head>
<body>
<ul class="test">
	<li class="counter1">
		<strong>默认时的计数器：</strong>
		<ol>
			<li>列表项</li>
			<li>列表项</li>
			<li>列表项</li>
		</ol>
	</li>
	<li class="counter2">
		<strong>修改计数器每次增加的值为2：</strong>
		<ol>
			<li>列表项</li>
			<li>列表项</li>
			<li>列表项</li>
		</ol>
	</li>
	<li class="counter3">
		<strong>修改计数器每次增加的值为-1：</strong>
		<ol>
			<li>列表项</li>
			<li>列表项</li>
			<li>列表项</li>
		</ol>
	</li>
</ul>
</body>
</html>

```
