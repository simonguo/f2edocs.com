#&lt;string&gt;

##说明

字符串(含转义字符串)。

- 字符串可以由双引号或单引号包起来。
- 转义字符串由 反斜杠(\) 开始，如：\', \"
- 2个常规字符串例子。请看下述代码：


**示例代码：**

```css
div:after {
	content: "任意字符串";
}
a[title="external"] {
	/*...*/
}
```

- 2个转义字符串例子。请看下述代码：


**示例代码：**

```css
div:after {
	content: "任意字符串\"String\"";
}
div {
	/* \5b8b\4f53 = 宋体 */
	font-family:'\5b8b\4f53';
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
