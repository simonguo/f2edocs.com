#text-size-adjust

##语法

- text-size-adjust：auto | none | &lt;percentage&gt;
- 默认值：auto
- 适用于：所有元素
- 继承性：有
- 动画性：当取值为&lt;percentage&gt;时
- 计算值：指定值


##取值

- auto：文本大小根据设备尺寸进行调整。
- none：文本大小不会根据设备尺寸进行调整。
- &lt;percentage&gt;：用百分比来指定文本大小在设备尺寸不同的情况下如何调整。


##说明

检索或设置移动端页面中对象文本的大小调整。

- 该属性只在移动设备上生效；
- 如果你的页面没有定义meta viewport，此属性定义将无效；
- 对应的脚本特性为textSizeAdjust。


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
		<td class="unsupport">6.0-11.0</td>
		<td class="unsupport">2.0-40.0</td>
		<td class="unsupport">4.0-45.0</td>
		<td class="unsupport">6.0-8.0</td>
		<td class="unsupport">15.0-29.0</td>
		<td class="support">6.0-8.3 <sup class="fix">-webkit-</sup></td>
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
.demo2 {
	-webkit-text-size-adjust: auto;
}
</style>
</head>
<body>
	<div class="demo1">
		<p>请在移动设备上查看本例，设备尺寸的变化将会使得文本大小变化</p>
	</div>
</body>
</html>

```
