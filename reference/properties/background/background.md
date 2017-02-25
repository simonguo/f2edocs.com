#background

##语法

- background：[ &lt;bg-layer&gt;, ]* &lt;final-bg-layer&gt;
- &lt;bg-layer&gt; = &lt;bg-image&gt; || &lt;position&gt; [ / &lt;bg-size&gt; ]? || &lt;repeat-style&gt; || &lt;attachment&gt; || &lt;box&gt; || &lt;box&gt;
- &lt;final-bg-layer&gt; = &lt;bg-image&gt; || &lt;position&gt; [ / &lt;bg-size&gt; ]? || &lt;repeat-style&gt; || &lt;attachment&gt; || &lt;box&gt; || &lt;box&gt; || &lt;' background-color '&gt;
- 默认值：看每个独立属性
- 适用于：所有元素
- 继承性：无
- 动画性：看每个独立属性
- 计算值：看每个独立属性


##取值

- &lt;' background-image '&gt;：指定对象的背景图像。可以是真实图片路径或使用渐变创建的“背景图像”
- &lt;' background-position '&gt;：指定对象的背景图像位置。
- &lt;' background-size '&gt;：指定对象的背景图像的尺寸大小。
- &lt;' background-repeat '&gt;：指定对象的背景图像如何铺排填充。
- &lt;' background-attachment '&gt;：指定对象的背景图像是随对象内容滚动还是固定的。
- &lt;' background-origin '&gt;：指定对象的背景图像显示的原点。
- &lt;' background-clip '&gt;：指定对象的背景图像向外裁剪的区域。
- &lt;' background-color '&gt;：指定对象的背景颜色。


##说明

复合属性。检索或设置对象的背景特性（背景色 &lt;' background-color '&gt; 不能设置多组）。

- 一个元素可以设置多重背景图像。
- 每组属性间使用逗号分隔。
- 如果设置的多重背景图之间存在着交集（即存在着重叠关系），前面的背景图会覆盖在后面的背景图之上。
- 示例：假设要在同一个元素上定义3个背景图像

**缩写方式**
```css
background:url(test1.jpg) no-repeat scroll 10px 20px/50px 60px content-box padding-box,
	   url(test1.jpg) no-repeat scroll 10px 20px/70px 90px content-box padding-box,
	   url(test1.jpg) no-repeat scroll 10px 20px/110px 130px content-box padding-box #aaa;
```

>注意， <' background-color '> 只能设置一次，且由于写在前面的背景会叠在之后的背景之上，所以背景色通常都定义在最后一组上，避免背景色将图像盖住。

**拆分方式：**
```css
background-image:url(test1.jpg),url(test2.jpg),url(test3.jpg);
background-repeat:no-repeat,no-repeat,no-repeat;
background-attachment:scroll,scroll,scroll;
background-position:10px 20px,10px 20px,10px 20px;
background-size:50px 60px,70px 90px,110px 130px;
background-origin:content-box,content-box,content-box;
background-clip:padding-box,padding-box,padding-box;
background-color:#aaa;
```

- 如果定义了多个背景图片，而其他属性只有一个参数值，则表明所有背景图片的该属性都应用同一个参数值。据此可以对上面的例子进行缩写：

**缩写方式：**

```css
background-image:url(test1.jpg),url(test2.jpg),url(test3.jpg);
background-repeat:no-repeat;
background-attachment:scroll;
background-position:10px 20px;
background-size:50px 60px,70px 90px,110px 130px;
background-origin:content-box;
background-clip:padding-box;
background-color:#aaa;
```

如果定义了多个背景图片，而 <' background-origin '> 和 <' background-clip '> 设置了相同的值。可这样缩写：

**缩写方式

```css
background:url(test1.jpg) no-repeat scroll 10px 20px/50px 60px padding-box,
	   url(test1.jpg) no-repeat scroll 10px 20px/70px 90px padding-box,
	   url(test1.jpg) no-repeat scroll 10px 20px/110px 130px padding-box #aaa;
```
> 这表示 <' background-origin '> 和 <' background-clip '> 都使用了padding-box参数值。


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
		<td><strong>Basic Support</strong></td>
		<td class="support">6.0+</td>
		<td class="support">2.0+</td>
		<td class="support">4.0+</td>
		<td class="support">3.1+</td>
		<td class="support">3.5+</td>
		<td class="support">3.2+</td>
		<td class="support">2.1+</td>
		<td class="support">18.0+</td>
	</tr>
	<tr>
		<td rowspan="2">Multiple backgrounds</td>
		<td class="unsupport">6.0-8.0</td>
		<td class="unsupport">2.0-3.5</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">3.1+</td>
		<td class="support" rowspan="2">3.5+</td>
		<td class="support" rowspan="2">3.2+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">9.0+</td>
		<td class="support">3.6+</td>
	</tr>
	<tr>
		<td rowspan="2">background-size <sup><a href="#support1">#1</a></sup></td>
		<td class="unsupport">6.0-8.0</td>
		<td class="unsupport">2.0-3.5</td>
		<td class="unsupport">4.0-14.0</td>
		<td class="unsupport">6.0-6.1</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="unsupport">6.0-6.1</td>
		<td class="unsupport">2.1-4.3</td>
		<td class="support" rowspan="4">18.0+</td>
	</tr>
	<tr>
		<td class="support">9.0+</td>
		<td class="support">3.6+</td>
		<td class="support">15.0+</td>
		<td class="support">7.0+</td>
		<td class="support">7.0+</td>
		<td class="support">4.4+</td>
	</tr>
	<tr>
		<td rowspan="2">background-origin<br>background-clip <sup><a href="#support2">#2</a></sup></td>
		<td class="unsupport">6.0-8.0</td>
		<td class="unsupport">2.0-3.5</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="unsupport">2.1-2.3</td>
	</tr>
	<tr>
		<td class="support">9.0+</td>
		<td class="support">3.6+</td>
		<td class="support">3.0+</td>
	</tr>
</tbody>
</table>


- &lt;' background-size '&gt; 写入缩写方式。
- &lt;' background-origin '&gt; || &lt;' background-clip '&gt; 写入缩写方式。


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test{
width:300px;
height:300px;
background:url(skin/p_103x196_1.jpg) no-repeat 10px 20px/60px 60px padding-box,
		   url(skin/p_103x196_1.jpg) no-repeat 50px 60px/60px 80px padding-box,
		   url(skin/p_103x196_1.jpg) no-repeat 90px 100px/60px padding-box #aaa;
}
</style>
</head>
<body>
<div class="test">定义多重背景图像</div>
</body>
</html>

```
