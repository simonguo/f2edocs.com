#@charset

##语法

- @charset &lt;charset&gt;;


##取值

- &lt;charset&gt;：字符编码。如：@charset "utf-8";


##说明

在外部样式表文件内使用。指定该样式表使用的字符编码。

- 该规则后面的分号是必需的，如果省略了此分号，会生成错误信息。
- 在外部css文件中写法如下：


**示例代码：**

```css
@charset "utf-8";
body { sRules }
div { sRules }
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
