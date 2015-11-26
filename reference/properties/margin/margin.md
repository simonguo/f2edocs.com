#margin

##语法

- margin：[ &lt;length&gt; | &lt;percentage&gt; | auto ]{1,4}
- 默认值：看每个独立属性
- 适用于：所有元素，除非 table | inline-table | table-caption 的表格类元素之外
- 继承性：无
- 动画性：是
- 计算值：看每个独立属性
- 相关属性：[ margin-top ] || [ margin-right ] || [ margin-bottom ] || [ margin-left ]


##取值

- auto：水平（默认）书写模式下，margin-top/margin-bottom计算值为0，margin-left/margin-right取决于可用空间。详见：margin系列之keyword auto
- &lt;length&gt;：用长度值来定义外补白。可以为负值
- &lt;percentage&gt;：用百分比来定义外补白。水平（默认）书写模式下，参照其包含块 width 进行计算，其它情况参照 height ，可以为负值


##说明

检索或设置对象四边的外延边距。

- 如果提供全部四个参数值，将按上、右、下、左的顺序作用于四边。
- 如果只提供一个，将用于全部的四边。
- 如果提供两个，第一个用于上、下，第二个用于左、右。
- 如果提供三个，第一个用于上，第二个用于左、右，第三个用于下。
- 非替代(non-Replaced)行内元素可以使用该属性设置左、右两边的外补丁；若要设置上、下两边的外补丁，必须先使该对象表现为块级或内联块级。
- 外延边距始终透明。
- 某些相邻的margin会发生合并，我们称之为margin折叠：

```css
h2{margin:10px 0;}
div{margin:20px 0;}
```

```html
<h2>这是一个标题</h2>
<div>
	<h2>这是又一个标题</h2>
</div>
```
>本例中，第一个h2的margin-bottom（10px），div的margin-top（20px），第二个h2的margin-top（10px）将被合并，它们之间的margin间隙最后是（20px），即取三者之间最大的那个值。

**如果给上例中的div加上border的话：**

```css
h2{margin:10px 0;}
div{margin:20px 0;border:1px solid #aaa;}
```

```html
<h2>这是一个标题</h2>
<div>
	<h2>这是又一个标题</h2>
</div>
```
>本例中，第一个h2的margin-bottom（10px），div的margin-top（20px）将被合并，但第二个h2的margin-top不与它们合并，因为它被border分隔，不与它们相邻。

- margin折叠常规认知：
	- margin折叠只发生在块级元素上；
	- 浮动元素的margin不与任何margin发生折叠；
	- 设置了属性overflow且值不为visible的块级元素，将不与它的子元素发生margin折叠；
	- 绝对定位元素的margin不与任何margin发生折叠；
	- 根元素的margin不与其它任何margin发生折叠；
- 对应的脚本特性为margin。


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
.test{margin:20px;background:#eee;}
</style>
</head>
<body>
<div class="test">注意我距上、右、下、左的距离</div>
</body>
</html>

```
