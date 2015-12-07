#currentColor

##说明

currentColor是 color 属性的值，具体意思是指：currentColor关键字的使用值是 color 属性值的计算值。

- 如果currentColor关键字被应用在 color 属性自身，则相当于是 color: inherit。
- 上述这些话都是什么意思呢？先看个例子


**示例代码：**

```css
div {
	border: 1px solid;
	color: red;
}

```

>如果你能立马知道上述代码的运行结果，那么就差不多理解 currentColor 关键字的意思了。
>上述代码将会让div拥有一个红色的边框，这就解释了 border-color 属性的默认值是 color 属性的值；
>如果将上述代码中的color属性定义删除，那么边框的颜色将取决于父元素的 color 计算值，因为 color 拥有继承性；


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
