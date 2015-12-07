#flex-basis

##语法

- flex-basis：&lt;length&gt; | &lt;percentage&gt; | auto | content
- 默认值：auto
- 适用于：flex子项
- 继承性：无
- 动画性：是，当值为非关键字时
- 计算值：指定值


##取值

- &lt;length&gt;：用长度值来定义宽度。不允许负值
- &lt;percentage&gt;：用百分比来定义宽度。不允许负值
- auto：无特定宽度值，取决于其它属性值
- content：基于内容自动计算宽度


##说明

设置或检索弹性盒伸缩基准值。

- 如果所有子元素的基准值之和大于剩余空间，则会根据每项设置的基准值，按比率伸缩剩余空间
- 对应的脚本特性为flexBasis。


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
		<td rowspan="3"><strong>Basic Support</strong></td>
		<td class="unsupport">6.0-10.0</td>
		<td class="unsupport">2.0-21.0</td>
		<td class="unsupport">4.0-20.0</td>
		<td class="unsupport">6.0</td>
		<td class="support">15.0+<sup class="fix">-webkit-</sup></td>
		<td class="unsupport">6.0-6.1</td>
		<td class="unsupport">2.1-4.3</td>
		<td class="unsupport">18.0-19.0</td>
	</tr>
	<tr>
		<td class="support" rowspan="2">11.0+</td>
		<td class="support" rowspan="2">22.0+</td>
		<td class="support">21.0+<sup class="fix">-webkit-</sup></td>
		<td class="support">6.1+<sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">17.0+</td>
		<td class="support">7.0+<sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">4.4+</td>
		<td class="support">20.0+<sup class="fix">-webkit-</sup></td>
	</tr>
	<tr>
		<td class="support">29.0+</td>
		<td class="support">9.0+</td>
		<td class="support">9.0+</td>
		<td class="support">28.0+</td>
	</tr>
	<tr>
		<td>content</td>
		<td class="unsupport">6.0-11.0</td>
		<td class="unsupport">2.0-42.0</td>
		<td class="unsupport">4.0-47.0</td>
		<td class="unsupport">6.0-9.0</td>
		<td class="unsupport">15.0-32.0</td>
		<td class="unsupport">6.0-9.0</td>
		<td class="unsupport">2.1-4.4.4</td>
		<td class="unsupport">18.0-42.0</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
h1{font:bold 20px/1.5 georgia,simsun,sans-serif;}
.box{
	display:-webkit-flex;
	display:flex;
	width:600px;margin:0;padding:10px;list-style:none;background-color:#eee;}
.box li{width:100px;height:100px;border:1px solid #aaa;text-align:center;}
#box li:nth-child(3){
	-webkit-flex-basis:600px;
	flex-basis:600px;
}
</style>
</head>
<body>
<h1>flex-basis示例：</h1>
<ul id="box" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
	<li>d</li>
	<li>e</li>
</ul>
</body>
</html>

```
