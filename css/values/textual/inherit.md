#inherit

##说明

该值使得属性能够继承祖先设置。

- inherit属于CSS-wide关键字，这表示所有的属性都可以接受该值，本手册为了与规范保持一致，未将该值放置到各属性的取值中。
- 如何让一个不具备继承特性的属性可以继承父元素的定义？


**示例代码：**

```css
div {
	position: relative;
}
div a {
	position: inherit;
}
```

>上述代码，超链接 a 将会继承父元素的position定义，也会定义为relative


##兼容性

<table class="compatible">
<thead>
	<tr>
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
		<td class="unsupport">6.0-7.0</td>
		<td class="support" rowspan="2">2.0+</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">3.1+</td>
		<td class="support" rowspan="2">3.5+</td>
		<td class="support" rowspan="2">3.2+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">8.0+</td>
	</tr>
</tbody>
</table>
