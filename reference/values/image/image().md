#image()

##语法

- image() = image( [ [ &lt;image&gt; | &lt;string&gt; ]? , &lt;color&gt;? ]! )


##说明

image() 用于指定图像或者图像替代。

- 使用媒体片段（media fragments）裁减图像的部分区域;



我们知道假设是使用背景图的话，可以通过 background-position 来决定从背景图的哪个位置开始显示所以之后可以这么做：

```css
div {
	background-image: url(test.png);
	background-position: 10px 10px;
}div {
	background-image: image(test.png#xywh=10,10,20,20);
}
```

>上述代码会以图像 test.png 的 (10,10) 位置作为圆点以进行显示，但如果你只想显示图像一部分，就变得有点困难。上述代码会以图像 test.png 的 (10,10) 位置作为圆点，截取一个 20x20 的矩形以进行显示。


- 使用纯色作为图像；


**示例：**

```css
div {
	background-image: image(black), url(test.png);
}
```

>可以使用 image() 来指定使用纯色作为图像，但此时 background-color 将不再生效，因为背景色总是在所有的背景图之下。


- 当指定的图像不能下载或者正确解码时，回退使用纯色图像；

**之前的语法中，有一个不太恰当的场景与之类似，如下代码：所以 image() 能更好的解决这个问题，如下代码：**

```css
body { background: white; color: black; }
div { background: url(black.png) black; color: white; }body { background: white; color: black; }
div { background: image(black.png, black); color: white; }
```

>上述代码能保证当 black.png 加载失败，文本也仍然是可读的，因为被纯黑色的背景替代了图像，所以白色的文本仍然可见。唯一的问题是，如果图像不是矩形的，或者图像是半透明的，那么这时图像下面的黑色背景会被看到。本例的代码能保证当图像无法加载时，使用黑色背景替代，并且如果图像正确加载时，黑色背景将不渲染，很好的解决了之前例子中存在的问题。

- 在图像元数据中自动遵循图像的定位；

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
