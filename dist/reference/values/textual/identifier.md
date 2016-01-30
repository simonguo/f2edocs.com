#&lt;identifier&gt;

##说明

使用用户自定义标识名作为组件取值。

- 自定义标识区分大小写，例如test与TEST是2个不同的值
- 自定义标识不能使用与CSS属性及属性值相同的名字
- 正常工作的例子：


**示例代码：**

```css
li {
	counter-increment: testname;
}
li {
	counter-reset: testname2;
}
@keyframes testanimations {
	from { opacity:1; }
	to { opacity:0; }
}
```

- 无法工作的例子：


**示例代码：**

```css
li {
	counter-increment: border;
}
li {
	counter-reset: background;
}
@keyframes auto {
	from { opacity:1; }
	to { opacity:0; }
}
```


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
