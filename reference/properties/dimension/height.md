#height

##语法

- height：&lt;length&gt; | &lt;percentage&gt; | auto
- 默认值：auto
- 适用于：除非置换内联元素，table-column, table-column-group之外的所有元素
- 继承性：无
- 动画性：当值为&lt;length&gt; | &lt;percentage&gt;时
- 计算值：指定的值


##取值

- auto：无特定高度值，取决于其它属性值
- &lt;length&gt;：用长度值来定义高度。不允许负值
- &lt;percentage&gt;：用百分比来定义高度。不允许负值


##说明

检索或设置对象的高度。

- 对于img对象来说，仅指定此属性，其width值将根据图片源尺寸等比例缩放。
- 对于盒模型规则，请参阅box-sizing属性。
- 对应的脚本特性为height。


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
	height: 200px;
	background: #eee;
}
</style>
</head>
<body>
<div class="test">我的高度为200</div>
</body>
</html>

```
