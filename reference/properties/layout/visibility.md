#visibility

##语法

- visibility：visible | hidden | collapse
- 默认值：visible
- 适用于：所有元素
- 继承性：有
- 动画性：是
- 计算值：指定值


##取值

- visible：设置对象可视
- hidden：设置对象隐藏
- collapse：主要用来隐藏表格的行或列。隐藏的行或列能够被其他内容使用。对于表格外的其他对象，其作用等同于hidden。


##说明

设置或检索是否显示对象。

- 如果希望对象为可视，其父对象也必须是可视的。
- 对应的脚本特性为visibility。


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
		<td class="support" rowspan="3">2.0+</td>
		<td class="support" rowspan="3">4.0+</td>
		<td class="support" rowspan="3">3.1+</td>
		<td class="support" rowspan="3">3.5+</td>
		<td class="support" rowspan="3">3.2+</td>
		<td class="support" rowspan="3">2.1+</td>
		<td class="support" rowspan="3">18.0+</td>
	</tr>
	<tr>
		<td rowspan="2">collapse</td>
		<td class="unsupport">6.0</td>
	</tr>
	<tr>
		<td class="support">7.0+</td>
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
	visibility: hidden;
}
</style>
</head>
<body>
<div class="test">我不会出现在屏幕上</div>
</body>
</html>

```
