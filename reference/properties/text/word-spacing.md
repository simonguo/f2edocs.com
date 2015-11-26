#word-spacing

##语法

- word-spacing：normal | &lt;length&gt; | &lt;percentage&gt;<i class='fa fa-css3'></i>
- 默认值：normal
- 适用于：所有元素
- 继承性：有
- 动画性：非normal值时
- 计算值：指定值
- 相关属性：&lt;' letter-spacing '&gt;


##取值

- normal：默认间隔
- &lt;length&gt;：用长度值指定间隔。可以为负值。
- &lt;percentage&gt;：用百分比指定间隔。可以为负值。（CSS3）


##说明

检索或设置对象中的单词之间的最小，最大和最佳间隙。

- 该属性将指定的间隔添加到每个单词(词内不发生)之后，但最后一个字将被排除在外。
- 判断是否为单词的依据是单词间是否有空格。
- 对应的脚本特性为wordSpacing。


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
		<td class="support">2.0+</td>
		<td class="support">4.0+</td>
		<td class="support">6.0+</td>
		<td class="support">15.0+</td>
		<td class="support">6.0+</td>
		<td class="support">2.1+</td>
		<td class="support">18.0+</td>
	</tr>
	<tr>
		<td><a href="../../values/numeric/percentage.htm">&lt;percentage&gt;</a></td>
		<td class="unsupport">6.0-11.0</td>
		<td class="unsupport">2.0-37.0</td>
		<td class="unsupport">4.0-41.0</td>
		<td class="unsupport">6.0-8.0</td>
		<td class="unsupport">15.0-27.0</td>
		<td class="unsupport">6.0-8.3</td>
		<td class="unsupport">2.1-4.4.4</td>
		<td class="unsupport">18.0-40.0</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test p{border:1px solid #000;}
.normal p{word-spacing:normal;}
.length p{word-spacing:20px;}
</style>
</head>
<body>
<ul class="test">
	<li class="normal">
		<strong>默认间隔</strong>
		<p>how are you!</p>
	</li>
	<li class="length">
		<strong>自定义的间隔大小</strong>
		<p>how are you!</p>
	</li>
</ul>
</body>
</html>

```
