#transition

##语法

- transition：&lt;single-transition&gt;[,&lt;single-transition&gt;]*
- &lt;single-transition&gt; = [ none | &lt;single-transition-property&gt; ] || &lt;time&gt; || &lt;single-transition-timing-function&gt; || &lt;time&gt;
- 默认值：看每个独立属性
- 适用于：所有元素，包含伪对象:after和:before
- 继承性：无
- 动画性：否
- 计算值：看每个独立属性
- 媒体：交互


##取值

- &lt;' transition-property '&gt;：检索或设置对象中的参与过渡的属性
- &lt;' transition-duration '&gt;：检索或设置对象过渡的持续时间
- &lt;' transition-timing-function '&gt;：检索或设置对象中过渡的动画类型
- &lt;' transition-delay '&gt;：检索或设置对象延迟过渡的时间


##说明

复合属性。检索或设置对象变换时的过渡。

- 注意：如果只提供一个&lt;time&gt;参数，则为 &lt;' transition-duration '&gt; 的值定义；如果提供二个&lt;time&gt;参数，则第一个为 &lt;' transition-duration '&gt; 的值定义，第二个为 &lt;' transition-delay '&gt; 的值定义
- 可以为同一元素的多个属性定义过渡效果。示例：

**缩写方式**

```css
transition:
		border-color .5s ease-in .1s,
		background-color .5s ease-in .1s,
		color .5s ease-in .1s;
```

**拆分方式：**

```css
transition-property: border-color, background-color, color;
transition-duration: .5s, .5s, .5s;
transition-timing-function: ease-in, ease-in, ease-in;
transition-delay: .1s, .1s, .1s;
```

- 如果定义了多个过渡的属性，而其他属性只有一个参数值，则表明所有需要过渡的属性都应用同一个参数值。据此可以对上面的例子进行缩写：

**拆分方式：**
```css
transition-property: border-color, background-color, color;
transition-duration: .5s;
transition-timing-function: ease-in;
transition-delay: .1s;
```

- 如果需要定义多个过渡属性且不想指定具体是哪些属性过渡，同时其他属性只有一个参数值，据此可以对上面的例子进行缩写：

**缩写方式**

```css
transition: all .5s ease-in .1s;
```
**拆分方式：**
```css
transition-property:all;
transition-duration: .5s;
transition-timing-function: ease-in;
transition-delay: .1s;
```

- 对应的脚本特性为transition。

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
        <td class="unsupport">6.0-9.0</td>
        <td class="unsupport">2.0-3.6</td>
        <td class="support">4.0-25.0<sup class="fix">-webkit-</sup></td>
        <td class="support">6.0<sup class="fix">-webkit-</sup></td>
        <td class="support" rowspan="3">15.0+</td>
        <td class="support">6.0-6.1<sup class="fix">-webkit-</sup></td>
        <td class="support">2.1-4.3<sup class="fix">-webkit-</sup></td>
        <td class="support">18.0-24.0<sup class="fix">-webkit-</sup></td>
    </tr>
    <tr>
        <td class="support" rowspan="2">10.0+</td>
        <td class="support">4.0-15.0<sup class="fix">-moz-</sup></td>
        <td class="support" rowspan="2">26.0+</td>
        <td class="support" rowspan="2">6.1+</td>
        <td class="support" rowspan="2">7.0+</td>
        <td class="support" rowspan="2">4.4.4+</td>
        <td class="support" rowspan="2">25.0+</td>
    </tr>
    <tr>
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
h1{font-size:16px;}
.test{overflow:hidden;width:100%;margin:0;padding:0;list-style:none;}
.test li{float:left;width:100px;height:100px;margin:0 5px;border:1px solid #ddd;background-color:#eee;text-align:center;
	-webkit-transition:background-color .5s ease-in;
	-moz-transition:background-color .5s ease-in;
	transition:background-color .5s ease-in;
}
.test li:nth-child(1):hover{background-color:#bbb;}
.test li:nth-child(2):hover{background-color:#999;}
.test li:nth-child(3):hover{background-color:#630;}
.test li:nth-child(4):hover{background-color:#090;}
.test li:nth-child(5):hover{background-color:#f00;}
</style>
</head>
<body>
<h1>请将鼠标移动到下面的矩形上：</h1>
<ul class="test">
	<li>背景色过渡</li>
	<li>背景色过渡</li>
	<li>背景色过渡</li>
	<li>背景色过渡</li>
	<li>背景色过渡</li>
</ul>
</body>
</html>

```
