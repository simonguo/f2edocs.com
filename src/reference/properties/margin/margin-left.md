#margin-left

##语法

- margin-left：&lt;length&gt; | &lt;percentage&gt; | auto
- 默认值：0
- 适用于：所有元素，除非 table | inline-table | table-caption 的表格类元素之外
- 继承性：无
- 动画性：是
- 计算值：指定的百分比、绝对长度或auto
- 相关属性：[ margin ] || [ margin-top ] || [ margin-right ] || [ margin-bottom ]


##取值

- auto：水平（默认）书写模式下，其计算值取决于可用空间
- &lt;length&gt;：用长度值来定义外补白。可以为负值
- &lt;percentage&gt;：用百分比来定义外补白。水平（默认）书写模式下，参照其包含块 width 进行计算，其它情况参照 height ，可以为负值


##说明

检索或设置对象左边的外延边距。

- 所有行内元素均可使用该属性设置左边距。
- 外延边距始终透明。
- 对应的脚本特性为marginLeft。


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
.test{margin-left:50px;background:#eee;}
</style>
</head>
<body>
<div class="test">注意我距左边的距离</div>
</body>
</html>

```
