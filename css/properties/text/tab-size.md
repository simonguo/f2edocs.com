#tab-size

##语法

- tab-size：&lt;integer&gt; | &lt;length&gt;
- 默认值：8
- 适用于：块容器
- 继承性：有
- 动画性：当值为 &lt;length&gt; 时
- 计算值：指定值


##取值

- &lt;integer&gt;：用整数值指定制表符的长度。不允许负值。
- &lt;length&gt;：用长度值指定制表符的长度。不允许负值。


##说明

检索或设置对象中的制表符的长度。

- 该属性决定了制表符(U+0009)的宽度，整数代表空格(U+0020)的倍数(如：tab-size:4; 表示制表符宽度是4个空格的宽度)
- 只有当 &lt;' white-space '&gt; 的属性值为：pre | pre-wrap时，该属性的定义才有效
- 对应的脚本特性为tabSize。


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
		<td rowspan="2"><a href="../../values/numeric/integer.htm">&lt;integer&gt;</a></td>
		<td class="unsupport" rowspan="2">6.0-11.0</td>
		<td class="unsupport">2.0-3.6</td>
		<td class="unsupport">4.0-20.0</td>
		<td class="unsupport">6.0</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="unsupport">6.0-6.1</td>
		<td class="unsupport">2.1-4.3</td>
		<td class="unsupport">18.0-19.0</td>
	</tr>
	<tr>
		<td class="support">4.0-40.0 <sup class="fix">-moz-</sup></td>
		<td class="support">21.0+</td>
		<td class="support">6.1+</td>
		<td class="support">7.0+</td>
		<td class="support">4.4.0+</td>
		<td class="support">20.0+</td>
	</tr>
	<tr>
		<td rowspan="2"><a href="../../values/length/length.htm">&lt;length&gt;</a></td>
		<td class="unsupport" rowspan="2">6.0-11.0</td>
		<td class="unsupport" rowspan="2">2.0-40.0</td>
		<td class="unsupport">4.0-41.0</td>
		<td class="unsupport" rowspan="2">6.0-8.0</td>
		<td class="unsupport">15.0-28.0</td>
		<td class="unsupport" rowspan="2">6.0-8.3</td>
		<td class="unsupport" rowspan="2">2.1-4.4.4</td>
		<td class="unsupport">18.0-40.0</td>
	</tr>
	<tr>
		<td class="support">42.0+</td>
		<td class="support">29.0+</td>
		<td class="support">41.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
pre{background:#eee;-moz-tab-size:4;-o-tab-size:4;tab-size:4;}
</style>
</head>
<body>
<pre>
你站在桥上看风景，
	看风景的人在楼上看你。
明月装饰了你的窗子，
	你装饰了别人的梦。
</pre>
</body>
</html>

```
