#z-index

##语法

- z-index: auto | &lt;integer&gt;
- 默认值：auto
- 适用于：定位元素。即定义了position为非static的元素
- 继承性：无
- 动画性：当值为&lt;integer&gt;时
- 计算值：指定的值
- 媒体：视觉


##取值

- auto：元素在当前层叠上下文中的层叠级别是0。元素不会创建新的局部层叠上下文，除非它是根元素。
- &lt;integer&gt;：用整数值来定义堆叠级别。可以为负值。


##说明

检索或设置对象的层叠顺序。

- z-index用于确定元素在当前层叠上下文中的层叠级别，并确定该元素是否创建新的局部层叠上下文。
- 每个元素层叠顺序由所属的层叠上下文和元素本身的层叠级别决定（每个元素仅属于一个层叠上下文）。
- 同一个层叠上下文中，层叠级别大的显示在上面，反之显示在下面。
- 同一个层叠上下文中，层叠级别相同的两个元素，依据它们在HTML文档流中的顺序，写在后面的将会覆盖前面的。
- 不同层叠上下文中，元素的显示顺序依据祖先的层叠级别来决定，与自身的层叠级别无关。
- 当z-index未定义或者值为auto时，在IE6,7下会创建新的局部层叠上下文，而在高级浏览器中，按照规范不产生新的局部层叠上下文，如下例：


demo：

```css
div {
	position: relative;
}
p {
	position: absolute;
}
.a {
	background: #f00;
	z-index: 10;
}
.b {
	background: #0ff;
	z-index: 3;
}
```

```html
<div class="test">
	<p class="a">asdas</p>
</div>
<div class="test2">
	<p class="b">asdas</p>
</div>
```

>细心的你会发现上述代码在IE6,7下的呈现与高级浏览器下不同。.test1和.test2未设置z-index，在高级浏览器下不会产生新的局部层叠上下文，也就是说它们的子元素没有被新的局部层叠上下文包裹，那么它们的子元素就处在同一个层叠上下文中，可以直接通过自身的层叠级别来决定显示顺序，所以结果是.a 覆盖了.b，因为.a的层叠级别比.b高；而在IE6,7下，.test1和.test2会产生新的局部层叠上下文，即它们的子元素被新的局部层叠上下文包裹，于是子元素显示顺序只能依赖.test1和.test2层叠级别来确定。所以结果是.b 覆盖了.a，因为.b的父元素.test2在HTML文档流中排在.test1之后，后来者居上覆盖前者。参见demo: z-index创建局部层叠上下文在IE6,7下与高级浏览器下的区别


- 对应的脚本特性为zIndex。


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
	<tr>
		<td rowspan="2">负值 <sup><a href="#support1">#1</a></sup></td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="unsupport">1.0-2.0</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">3.0+</td>
	</tr>
</tbody>
</table>


- z-index负值是CSS2.1中定义的，在CSS2中是不被支持的；


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.z1,
.z2,
.z3 {
	position: absolute;
	width: 200px;
	height: 100px;
	padding: 5px 10px;
	color: #fff;
	text-align: right;
}
.z1 {
	z-index: 1;
	background: #000;
}
.z2 {
	z-index: 2;
	top: 30px;
	left: 30px;
	background: #C00;
}
.z3 {
	z-index: 3;
	top: 60px;
	left: 60px;
	background: #999;
}
</style>
</head>
<body>
<div class="z1">z-index:1</div>
<div class="z2">z-index:2</div>
<div class="z3">z-index:3</div>
</body>
</html>

```
