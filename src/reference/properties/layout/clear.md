#clear

##语法

- clear：none | left | right | both
- 默认值：none
- 适用于：块级元素
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- none：允许两边都可以有浮动对象
- both：不允许有浮动对象
- left：不允许左边有浮动对象
- right：不允许右边有浮动对象


##说明

该属性的值指出了不允许有浮动对象的边。

- 对应的脚本特性为clear。


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
.test {
	float: right;
	background: #eee;
}
.test2 {
	clear: right;
	background: #ddd;
}
</style>
</head>
<body>
<div class="test">我将出现在屏幕右方</div>
<div class="test2">注意我出现的位置</div>
</body>
</html>

```
