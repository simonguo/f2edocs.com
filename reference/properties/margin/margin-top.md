#margin-top

##语法

- margin-top：&lt;length&gt; | &lt;percentage&gt; | auto
- 默认值：0
- 适用于：所有元素，除非 table | inline-table | table-caption 的表格类元素和非替代行内元素之外
- 继承性：无
- 动画性：是
- 计算值：指定的百分比、绝对长度或auto
- 相关属性：[ margin ] || [ margin-right ] || [ margin-bottom ] || [ margin-left ]


##取值

- auto：水平（默认）书写模式下，其计算值为0
- &lt;length&gt;：用长度值来定义外补白。可以为负值
- &lt;percentage&gt;：用百分比来定义外补白。水平（默认）书写模式下，参照其包含块 width 进行计算，其它情况参照 height ，可以为负值


##说明

检索或设置对象顶边的外延边距。

- 替代(Replaced)行内元素可以应用该属性。
- 非替代(non-Replaced)行内元素要使用该属性必须先使该对象表现为块级或行内块级。
- 外延边距始终透明。
- 对应的脚本特性为marginTop。


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
.test{margin-top:50px;background:#eee;}
</style>
</head>
<body>
<div class="test">注意我距顶边的距离</div>
</body>
</html>

```
