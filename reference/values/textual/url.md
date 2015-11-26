#&lt;url&gt;

##语法

- URL 是对一个资源的指针，它使用函数符号 &lt;url&gt; 来表示，语法如下：
- &lt;url&gt; = url( &lt;string&gt; &lt;url-modifier&gt;* )


##说明

在网页上提供一个资源地址。（图像，声频，视频或浏览器支持的其他任何资源）

- 由于历史原因，&lt;url&gt; 可以不加引号，所以对于 &lt;url&gt; 的处理，有引号和无引号都是正确的，示例代码如下：


**示例代码：**

```css
div {
	background-image: url("1.gif");
}
div {
	background-image: url(1.gif);
}
```

>以上2个定义是等价的。

- 使用在@import上时，可以使用 &lt;string&gt; 来表示一个 &lt;url&gt;，也就是说可以省略 url() 符号，直接是一个资源地址，示例代码如下：


**示例代码：**

```css
@import url(global.css);
@import "global.css";  //使用 string 表示 url
```

>以上2种方式都有效。


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
