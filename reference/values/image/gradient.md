#&lt;gradient&gt;

##语法

- &lt;gradient&gt; = linear-gradient() | repeating-linear-gradient() | radial-gradient() | repeating-radial-gradient()


##说明

&lt;gradient&gt; 允许使用简单的语法实现颜色渐变，以便UA在渲染页面自动生成图像。

- 渐变在一个拥有尺寸的盒子中被生成，被称之为渐变盒，但是渐变本身并没有内在的尺寸，也就说如果在一个没有尺寸的容器上定义渐变，将无法被呈现。
- &lt;gradient&gt; 可以应用在所有接受图像的属性上


**示例：**

```css
background-image: linear-gradient(white, gray);
list-style-image: radial-gradient(circle, #006, #00a 90%, #0000af 100%, white 100%);
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
		<td class="unsupport">6.0-9.0</td>
		<td class="unsupport">2.0-3.5</td>
		<td class="partsupport">4.0-9.0<br><sup class="fix">-webkit-</sup></td>
		<td class="unsupport">3.1-3.2</td>
		<td class="support" rowspan="4">15.0+</td>
		<td class="partsupport">3.2-4.3<br><sup class="fix">-webkit-</sup></td>
		<td class="partsupport">2.1-3.0<br><sup class="fix">-webkit-</sup></td>
		<td class="support">10.0-25.0<br><sup class="fix">-webkit-</sup></td>
	</tr>
	<tr>
		<td class="support" rowspan="3">10.0+</td>
		<td class="support">3.6-15.0<br><sup class="fix">-moz-</sup></td>
		<td class="support">10.0-25.0<br><sup class="fix">-webkit-</sup></td>
		<td class="partsupport">4.0-5.0<br><sup class="fix">-webkit-</sup></td>
		<td class="support">5.0-6.1</td>
		<td class="support">4.0-4.3<br><sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="3">26.0+</td>
	</tr>
	<tr>
		<td class="support" rowspan="2">16.0+</td>
		<td class="support" rowspan="2">26.0+</td>
		<td class="support">5.1-6.0<br><sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">7.0+</td>
		<td class="support" rowspan="2">4.4+</td>
	</tr>
	<tr>
		<td class="support">6.1+</td>
	</tr>
</tbody>
</table>
