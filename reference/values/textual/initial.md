#initial

##说明

属性初始值。

- initial属于CSS-wide关键字，这表示所有的属性都可以接受该值，本手册为了与规范保持一致，未将该值放置到各属性的取值中。
- 如果你想重置某个属性为UA默认设置，那么就可以使用该值
- 正常工作的例子：


**示例代码：**

```css
ul {
	list-style: none;
}
.news-list {
	list-style: initial;
}
```

>如上述代码，ul会被reset掉list-style，如果你想某个地方需要UA初始定义，那么就可以直接设置为initial


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
		<td class="unsupport" rowspan="2">6.0-11.0</td>
		<td class="unsupport">2.0-18.0</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">3.1+</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="support" rowspan="2">3.2+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">19.0+</td>
	</tr>
</tbody>
</table>
