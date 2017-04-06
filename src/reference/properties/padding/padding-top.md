#padding-top

##语法

- padding-top：&lt;length&gt; | &lt;percentage&gt;
- 默认值：0
- 适用于：所有元素，除 table-row-group | table-header-group | table-footer-group | table-column-group | table-row 外
- 继承性：无
- 动画性：是
- 计算值：&lt;length&gt;
- 相关属性：[ padding ] || [ padding-right ] || [ padding-bottom ] || [ padding-left ]


##取值

- &lt;length&gt;：用长度值来定义内补白。不允许负值
- &lt;percentage&gt;：用百分比来定义内补白。水平（默认）书写模式下，参照其包含块 width 进行计算，其它情况参照 height 。不允许负值


##说明

检索或设置对象顶边的内补白。

- 非替代(non-Replaced)行内元素要使用该属性必须先使该对象表现为块级或内联块级。
- 对应的脚本特性为paddingTop。


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
	float: left;
	padding-top: 10px;
	border: 1px solid #000;
}
</style>
</head>
<body>
<div class="test">注意我离顶部边框线的距离</div>
</body>
</html>

```
