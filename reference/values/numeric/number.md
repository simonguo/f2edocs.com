#&lt;number&gt;

##说明

浮点数。

- Number值可能是约束在一定范围内的，如果超过了这个范围，申明将被忽略。
- 列举几个使用场景。请看下述代码：


**示例代码：**

```css
div {
	line-height: 1.5;
}
div {
	opacity: .5;
}
```

>在上述代码中，opacity属性的值就是被约束在[0.0-1.0]这个范围内的，如果超过了这个范围，其计算结果将截取到与之最相近的值。

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
