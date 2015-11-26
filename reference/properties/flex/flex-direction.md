#flex-direction

##语法

- flex-direction：row | row-reverse | column | column-reverse
- 默认值：row
- 适用于：flex容器
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- row：主轴与行内轴方向作为默认的书写模式。即横向从左到右排列（左对齐）。
- row-reverse：对齐方式与row相反。
- column：主轴与块轴方向作为默认的书写模式。即纵向从上往下排列（顶对齐）。
- column-reverse：对齐方式与column相反。


##说明

该属性通过定义flex容器的主轴方向来决定felx子项在flex容器中的位置。这将决定flex需要如何进行排列

- 该属性的反转取值不影响元素的绘制，语音和导航顺序，只改变流动方向。这与 &lt;' writing-mode '&gt; 和 &lt;' direction '&gt; 相同。
- 示例：将一个容器内的子元素反转横向排列

**Code：**

```html
<ul id="flex">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
```


```css
#box {
	display: flex;
	flex-direction: row-reverse;
	list-style: none;
}
```

>请自行根据需要补全厂商前缀。flex生效需定义 &lt;' display '&gt; 为flex或inline-flex(box或inline-box，这是旧的方式)


- 对应的脚本特性为flexDirection。


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
		<td class="unsupport">2.0-21.0</td>
		<td class="unsupport">4.0-20.0</td>
		<td class="unsupport">6.0</td>
		<td class="support">15.0+<sup class="fix">-webkit-</sup></td>
		<td class="unsupport">6.0-6.1</td>
		<td class="unsupport">2.1-4.3</td>
		<td class="unsupport">18.0-19.0</td>
	</tr>
	<tr>
		<td class="support" rowspan="2">11.0+</td>
		<td class="support" rowspan="2">22.0+</td>
		<td class="support">21.0+<sup class="fix">-webkit-</sup></td>
		<td class="support">6.1+<sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">17.0+</td>
		<td class="support">7.0+<sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">4.4+</td>
		<td class="support">20.0+<sup class="fix">-webkit-</sup></td>
	</tr>
	<tr>
		<td class="support">29.0+</td>
		<td class="support">9.0+</td>
		<td class="support">9.0+</td>
		<td class="support">28.0+</td>
	</tr>
</tbody>
</table>


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
h1{font:bold 20px/1.5 georgia,simsun,sans-serif;}
.box{
	display:-webkit-flex;
	display:flex;
	margin:0;padding:10px;list-style:none;background-color:#eee;}
.box li{width:100px;height:100px;border:1px solid #aaa;text-align:center;}
#box{
	-webkit-flex-direction:row;
	flex-direction:row;
}
#box2{
	-webkit-flex-direction:row-reverse;
	flex-direction:row-reverse;
}
#box3{
	height:500px;
	-webkit-flex-direction:column;
	flex-direction:column;
}
#box4{
	height:500px;
	-webkit-flex-direction:column-reverse;
	flex-direction:column-reverse;
}
</style>
</head>
<body>
<h1>flex-direction示例：</h1>
<h2>flex-direction:row</h2>
<ul id="box" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>flex-direction:row-reverse</h2>
<ul id="box2" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>flex-direction:column</h2>
<ul id="box3" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
<h2>flex-direction:column-reverse</h2>
<ul id="box4" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
</body>
</html>

```
