#toggle()

##语法

- toggle() = toggle(&lt;value&gt;#)


##说明

允许子孙元素使用取值序列中的值循环替换继承而来的值。

- 每级ul使用不同的标记：


**示例代码：**

```css
ul {
	list-style-type: toggle(disk, circle, square, box);
}
em {
	font-style: toggle(italic, normal);
}
```

>在上述代码中，定义一个多级的ul，第一级使用disk markers，子孙级依次使用circle, square, box。



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
		<td class="unsupport">6.0-11.0</td>
		<td class="unsupport">2.0-38.0</td>
		<td class="unsupport">4.0-43.0</td>
		<td class="unsupport">3.1-8.1</td>
		<td class="unsupport">5.0-28.0</td>
		<td class="unsupport">3.2-8.1</td>
		<td class="unsupport">2.1-4.4.4</td>
		<td class="unsupport">18.0-40.0</td>
	</tr>
</tbody>
</table>
