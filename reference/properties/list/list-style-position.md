#list-style-position

##语法

- list-style-position：outside | inside
- 默认值：outside
- 适用于：所有 &lt;' display '&gt; 设置为list-item的元素
- 继承性：有
- 动画性：否
- 计算值：特定值


##取值

- outside：列表项目标记放置在文本以外，且环绕文本不根据标记对齐
- inside：列表项目标记放置在文本以内，且环绕文本根据标记对齐


##说明

设置或检索作为对象的列表项标记如何根据文本排列。

- 仅作用于具有 &lt;' display '&gt; 值等于list-item的对象（如li对象）。
- 注意：ol对象和ul对象的type特性为其后的所有列表项目（如li对象）指明列表属性。
- 对应的脚本特性为listStylePosition。


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
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.outside{width:120px;list-style-position:outside;}
.inside{width:120px;list-style-position:inside;}
</style>
</head>
<body>
<h1>outside的项目符号：</h1>
<ul class="outside">
	<li>项目符号的位置是outside</li>
	<li>项目符号的位置是outside</li>
	<li>项目符号的位置是outside</li>
</ul>
<h1>inside的项目符号：</h1>
<ul class="inside">
	<li>项目符号的位置是inside</li>
	<li>项目符号的位置是inside</li>
	<li>项目符号的位置是inside</li>
</ul>
</body>
</html>

```
