#border-image

##语法

- border-image：&lt;' border-image-source '&gt; || &lt;' border-image-slice '&gt; [ / &lt;' border-image-width '&gt; | / &lt;' border-image-width '&gt;? / &lt;' border-image-outset '&gt; ]? || &lt;' border-image-repeat '&gt;
- 默认值：看每个独立属性
- 适用于：看每个独立属性
- 继承性：无
- 动画性：看每个独立属性
- 计算值：看每个独立属性


##取值

- &lt;' border-image-source '&gt;：设置或检索对象的边框是否用图像定义样式或图像来源路径。
- &lt;' border-image-slice '&gt;：设置或检索对象的边框背景图的分割方式。
- &lt;' border-image-width '&gt;：设置或检索对象的边框厚度。
- &lt;' border-image-outset '&gt;：设置或检索对象的边框背景图的扩展。
- &lt;' border-image-repeat '&gt;：设置或检索对象的边框图像的平铺方式。


##说明

复合属性。设置或检索对象的边框样式使用图像来填充。

- 使用图像替代 &lt;' border-style '&gt; 去定义边框样式。当 &lt;' border-image '&gt; 为none或图像不可见时，将会显示 &lt;' border-style '&gt; 所定义的边框样式效果。


示例：

```css
.test {
	border: 10px solid gray;
	border-image: url(test.png) 10/10px;
}
```

>如果例子中的图片不可见，或者未被加载，则会以 &lt;' border '&gt; 的定义呈现，如果图片载入成功，则以 &lt;' border-image '&gt; 的定义呈现。


- 对应的脚本特性为borderImage。


##兼容性


<table class="compatible">
<thead>
	<tr>
		<th>Values</th>
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
		<td rowspan="3"><strong>Basic Support</strong></td>
		<td class="unsupport">6.0-10.0</td>
		<td class="unsupport">2.0-3.0</td>
		<td class="partsupport">4.0-14.0<br><sup class="fix">-webkit-</sup></td>
		<td class="partsupport">3.1-5.1<br><sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="3">15.0+</td>
		<td class="partsupport">3.2-5.1<br><sup class="fix">-webkit-</sup></td>
		<td class="partsupport">2.1-4.3<br><sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="3">18.0+</td>
	</tr>
	<tr>
		<td class="support" rowspan="2">11.0+</td>
		<td class="partsupport">3.5-14.0<br><sup class="fix">-moz-</sup></td>
		<td class="support">15.0<br><sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">6.1+</td>
		<td class="support" rowspan="2">4.4-4.4.4</td>
	</tr>
	<tr>
		<td class="support">15.0+</td>
		<td class="support">16.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test {
	border-width: 2px 9px;
	border-style: solid;
	border-color: orange;
	border-image: url(skin/button.png) 2 9 fill repeat;
}
</style>
</head>
<body>
<div class="test">用图片来做边框</div>
</body>
</html>

```
