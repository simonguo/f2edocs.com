#color

##语法

- color：&lt;color&gt;
- 默认值：由user agent决定
- 适用于：所有元素
- 继承性：有
- 动画性：是
- 计算值：指定值


##取值

- &lt;color&gt;：指定颜色。


##说明

检索或设置对象的文本颜色。无默认值

- 可以使用Color Name(颜色名称), HEX, RGB, RGBA, HSL, HSLA, transparent来指定color。
- 注意，用颜色名称指定color可能不被一些浏览器接受。
- color属性值被间接用来提供一个中间值 currentColor 以供其他接受颜色值的属性使用。


**示例：**

```css
div {
	border: 10px solid;
	color: red;
}
```

>如上代码，没有定义边框的颜色，但定义了color的颜色为red，那么这时red将会作为一个间接值 currentColor 提供给边框颜色属性，所以最终边框色也为red。

- 对应的脚本特性为color。


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
		<td class="support" rowspan="3">2.0+</td>
		<td class="support" rowspan="3">4.0+</td>
		<td class="support" rowspan="3">3.1+</td>
		<td class="support" rowspan="3">15.0+</td>
		<td class="support" rowspan="3">3.2+</td>
		<td class="support" rowspan="3">2.1+</td>
		<td class="support" rowspan="3">18.0+</td>
	</tr>
	<tr>
		<td rowspan="2">RGBA, HSL, HSLA,<br>transparent</td>
		<td class="unsupport">6.0-8.0</td>
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
.colorname p{color:green;}
.hex p{color:#ff0000;}
.rgb p{color:rgb(0,0,0);}
.rgba p{color:rgba(0,0,0,.5);}
.hsl p{color:hsl(240,50%,50%);}
.hsla p{color:hsla(240,50%,50%,.5);}
.transparent p{color:transparent;}
</style>
</head>
<body>
<ul class="test">
	<li class="colorname">
		<strong>Color Name(用颜色名称表示法)</strong>
		<p>看看我的颜色　{color:green;}</p>
	</li>
	<li class="hex">
		<strong>HEX(十六进制数值表示法)</strong>
		<p>看看我的颜色　{color:#ff0000;}</p>
	</li>
	<li class="rgb">
		<strong>RGB</strong>
		<p>看看我的颜色　{color:rgb(0,0,0);}</p>
	</li>
	<li class="rgba">
		<strong>RGBA</strong> - IE8及以下浏览器不支持这种写法
		<p>看看我的颜色　{color:rgba(0,0,0,.5);}</p>
	</li>
	<li class="hsl">
		<strong>HSL</strong> - IE8及以下浏览器不支持这种写法
		<p>看看我的颜色　{color:hsl(240,50%,50%);}</p>
	</li>
	<li class="hsla">
		<strong>HSLA</strong> - IE8及以下浏览器不支持这种写法
		<p>看看我的颜色　{color:hsla(240,50%,50%,.5);}</p>
	</li>
	<li class="transparent">
		<strong>transparent</strong> - IE8及以下浏览器将文本颜色设置为transparent，文本将显示为黑色
		<p>看看我的颜色　{color:transparent;}</p>
	</li>
</ul>
</body>
</html>

```
