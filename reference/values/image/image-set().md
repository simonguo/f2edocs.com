#image-set()

##语法

- image-set() = image-set( &lt;image-set-option&gt;# )
- &lt;image-set-option&gt; = [ &lt;image&gt; | &lt;string&gt; ] &lt;resolution&gt;


##说明

image-set() 可以根据用户设备的分辨率匹配合适的图像。

- 为不同的设备分配合适得图像;


示例

```css
div {
	background-image: image-set( "test.png" 1x, "test-2x.png" 2x, "test-print.png" 600dpi );
}
```

>上述代码将会为普通屏幕使用 test.png，为高分屏使用 test-2x.png，如果更高的分辨率则使用 test-print.png，比如印刷。



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
		<td class="unsupport" rowspan="2">2.0-38.0</td>
		<td class="unsupport">4.0-20.0</td>
		<td class="unsupport">3.1-5.1</td>
		<td class="support" rowspan="2">15.0-28.0<sup class="fix">-webkit-</sup> <sup><a href="#support1">#1</a></sup></td>
		<td class="unsupport">3.2-5.1</td>
		<td class="unsupport">2.1-4.3</td>
		<td class="unsupport">18.0-20.0</td>
	</tr>
	<tr>
		<td class="support">21.0-43.0<sup class="fix">-webkit-</sup> <sup><a href="#support1">#1</a></sup></td>
		<td class="support">6.0-8.1<sup class="fix">-webkit-</sup> <sup><a href="#support1">#1</a></sup></td>
		<td class="support">6.0-8.1<sup class="fix">-webkit-</sup> <sup><a href="#support1">#1</a></sup></td>
		<td class="support">4.4-4.4.4<sup class="fix">-webkit-</sup> <sup><a href="#support1">#1</a></sup></td>
		<td class="support">21.0-43.0<sup class="fix">-webkit-</sup> <sup><a href="#support1">#1</a></sup></td>
	</tr>
</tbody>
</table>


- 需要注意的是，目前这些浏览器支持的语法是：image-set( &lt;url&gt; | &lt;string&gt; )，写法如下：

**示例**

```css
div {
	background-image: image-set( url(test.png) 1x, url(test-2x.png) 2x );
}
```
