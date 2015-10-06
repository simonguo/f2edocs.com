#float

##语法

- float：none | left | right
- 默认值：none
- 适用于：所有元素
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- none：设置对象不浮动
- left：设置对象浮在左边
- right：设置对象浮在右边


##说明

该属性的值指出了对象是否及如何浮动。

- 如果float不是none，当display:inline-table时，display的计算值为table；当display:inline | inline-block | run-in | table-* 系时，display的计算值为block，其它情况为指定值；
- float在绝对定位和display为none时不生效。
- 对应的脚本特性为styleFloat（IE）或cssFloat（非IE）。(注意这里为styleFloat或cssFloat，而不是float)


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
		<td class="support">7.0+</td>
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
</style>
</head>
<body>
<div class="test">我将出现在屏幕右方</div>
</body>
</html>

```
