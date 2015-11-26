#font-variant

##语法

- font-variant：normal | small-caps
- 默认值：normal
- 适用于：所有元素
- 继承性：有
- 动画性：否
- 计算值：指定值


##取值

- normal：正常的字体
- small-caps：小型的大写字母字体


##说明

设置或检索对象中的文本是否为小型的大写字母。

- 对应的脚本特性为fontVariant。


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
		<td class="support">3.1+</td>
		<td class="support">3.5+</td>
		<td class="support">3.2+</td>
		<td class="support">2.1+</td>
		<td class="support">18.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test p {
	margin: 15px 0;
	border: 1px solid #000;
}
.small-caps span {
	font-variant: small-caps;
}
</style>
</head>
<body>
<ul class="test">
	<li>
		<strong>将文本转换为小型的大写字母</strong>
		<div>原　文： HOW DO YOU DO &amp; <span>how do you do.</span></div>
		<div class="small-caps">转换后： HOW DO YOU DO &amp; <span>how do you do.</span></div>
	</li>
</ul>
</body>
</html>

```
