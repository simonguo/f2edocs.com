#unset

##说明

擦除属性申明。

- 一个属性定义了unset值，如果该属性是默认继承属性，该值等同于inherit，如果该属性是非继承属性，该值等同于initial
- unset属于CSS-wide关键字，这表示所有的属性都可以接受该值，本手册为了与规范保持一致，未将该值放置到各属性的取值中。
- 正常工作的例子：


**示例代码：**

```css
div {
	border: unset;
}
div {
	border: initial;
}
```

>如上述代码，2条规则的结果是相同的




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
		<td class="unsupport" rowspan="2">6.0-13.0</td>
		<td class="unsupport">2.0-26.0</td>
		<td class="unsupport">4.0-40.0</td>
		<td class="unsupport" rowspan="2">6.0-9.0</td>
		<td class="unsupport">15.0-27.0</td>
		<td class="unsupport" rowspan="2">6.0-9.0</td>
		<td class="unsupport">2.1-4.4.4</td>
		<td class="unsupport">18.0-39.0</td>
	</tr>
	<tr>
		<td class="support">27.0+</td>
		<td class="support">41.0+</td>
		<td class="support">28.0+</td>
		<td class="support">44.0+</td>
		<td class="support">40.0+</td>
	</tr>
</tbody>
</table>
