#border-bottom

##语法

- border-bottom：&lt;line-width&gt; || &lt;line-style&gt; || &lt;color&gt;
- &lt;line-width&gt; = &lt;length&gt; | thin | medium | thick
- &lt;line-style&gt; = none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset
- 默认值：看每个独立属性
- 适用于：所有元素
- 继承性：无
- 动画性：看每个独立属性
- 计算值：看每个独立属性
- 相关属性：[ border ] || [ border-top ] || [ border-right ] || [ border-left ]


##取值

- &lt;line-width&gt;：设置或检索对象边框宽度。
- &lt;line-style&gt;：设置或检索对象边框样式。
- &lt;color&gt;：设置或检索对象边框颜色。


##说明

复合属性。设置对象底部边框的特性。

- 如使用该复合属性定义其单个参数，则其他参数的默认值将无条件覆盖各自对应的单个属性设置。
- 对应的脚本特性为borderBottom。


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
	border-bottom: 5px solid #000;
}
</style>
</head>
<body>
<div class="test">定义底部边框特性</div>
</body>
</html>

```
