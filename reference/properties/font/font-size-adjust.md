#font-size-adjust

##语法

- font-size-adjust：none | &lt;number&gt;
- 默认值：none
- 适用于：所有元素
- 继承性：有
- 动画性：当值为 &lt;number&gt; 时
- 计算值：指定值


##取值

- none：不保留首选字体的 x-height
- &lt;number&gt;：定义字体的 aspect 值。


##说明

设置或检索对象的 aspect 值，用以保持首选字体的 x-height。

- 字体的小写字母 "x" 的高度与字号之间的比率被称为一个字体的 aspect 值
- 高 aspect 值的字体被设置为很小的尺寸时会更易阅读。举例：Verdana 的 aspect 值是 0.58（意味着当字体尺寸为 100px 时，它的 x-height 是 58px）。Times New Roman 的 aspect 值是 0.46。这就意味着 Verdana 在小尺寸时比 Times New Roman 更易阅读。
- 可以使用这个公式来为可用字体推演出合适的字号：可应用到可用字体的字体尺寸 = 首选字体的字体尺寸 * （font-size-adjust 值 / 可用字体的 aspect 值）
- 详述：如果 14px 的 Verdana（aspect 值是 0.58）不可用，但是某个可用的字体的 aspect 值是 0.46，那么替代字体的尺寸将是 14 * (0.58/0.46) = 17.65px。
- 对应的脚本特性为fontSizeAdjust。


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
		<td class="unsupport" rowspan="2">6.0-11.0</td>
		<td class="unsupport">2.0</td>
		<td class="unsupport" rowspan="2">4.0-43.0</td>
		<td class="unsupport" rowspan="2">3.1-8.1</td>
		<td class="unsupport" rowspan="2">15.0-28.0</td>
		<td class="unsupport" rowspan="2">3.2-8.1</td>
		<td class="unsupport" rowspan="2">2.1-4.4.4</td>
		<td class="unsupport" rowspan="2">18.0-40.0</td>
	</tr>
	<tr>
		<td class="support">3.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
body {
	font: 14px/1.5 Verdana, Times New Roman;
	font-size-adjust: .58;
}
</style>
</head>
<body>
<p>Hello World!</p>
</body>
</html>

```
