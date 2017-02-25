#opacity

##语法

- opacity：&lt;number&gt;
- 默认值：1
- 适用于：所有元素
- 继承性：无
- 动画性：是
- 计算值：指定值


##取值

- &lt;number&gt;：使用浮点数指定对象的不透明度。值被约束在[0.0-1.0]范围内，如果超过了这个范围，其计算结果将截取到与之最相近的值。


##说明

检索或设置对象的不透明度。

- 对于尚不支持opacity属性的IE浏览器可以使用IE私有的滤镜属性来实现与opacity相同的效果

**示例代码：**

```css
div{filter:alpha(opacity=50);} /* for IE8 and earlier */
div{opacity:.5;} /* for IE9 and other browsers */
```

>以上2段代码的效果相同


- 元素定义了值小于1的opacity，将会产生局部层叠上下文。
- 对应的脚本特性为opacity。


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
						<td rowspan="2"><strong>Basic Support</strong></td>
						<td class="unsupport">6.0-8.0</td>
						<td class="support" rowspan="2">2.0+</td>
						<td class="support" rowspan="2">4.0+</td>
						<td class="support" rowspan="2">3.1+</td>
						<td class="support" rowspan="2">15.0+</td>
						<td class="support" rowspan="2">3.2+</td>
						<td class="support" rowspan="2">2.1+</td>
						<td class="support" rowspan="2">18.0+</td>
					</tr>
					<tr>
						<td class="support">9.0+</td>
					</tr>
				</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>



<style>
h1 {
	margin: 10px 0;
	font-size: 16px;
}
.test,
.test2 {
	width: 300px;
	height: 150px;
	padding: 10px;
}
.test {
	background:#050;
}
.test2 {
	margin: -120px 0 0 50px;
	background: #000;
	filter: alpha(opacity=50);
	opacity: .5;
	color: #fff;
}
</style>
</head>
<body>
<h1>下例是一个半透明的效果：</h1>
<div class="test">不透明度为100%的box</div>
<div class="test2">不透明度为50%的box</div>
</body>
</html>

```
