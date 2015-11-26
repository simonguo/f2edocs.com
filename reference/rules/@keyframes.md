#@keyframes

##语法

- @keyframes &lt;identifier&gt; { &lt;keyframes-blocks&gt; }
- &lt;keyframes-blocks&gt;：[ [ from | to | &lt;percentage&gt; ]{ sRules } ] [ [ , from | to | &lt;percentage&gt; ]{ sRules } ]*


##取值

- &lt;identifier&gt;：identifier定义一个动画名称
- &lt;keyframes-blocks&gt;：定义动画在每个阶段的样式，即帧动画。


##说明

指定动画名称和动画效果。

- @keyframes定义的动画名称用来被animation-name所使用。
- 定义动画时，简单的动画可以直接使用关键字from和to，即从一种状态过渡到另一种状态：


**示例代码：**

```css
@keyframes testanimations {
	from { opacity: 1; }
	to { opacity: 0; }
}
```

>其中testanimations是该动画的名字，该动画表示某个东西将逐渐消失。


- 如果复杂的动画，可以混合&lt;percentage&gt;去设置某个时间段内的任意时间点的样式：


**示例代码：**

```css
@keyframes testanimations {
	from { transform: translate(0, 0); }
	20% { transform: translate(20px, 20px); }
	40% { transform: translate(40px, 0); }
	60% { transform: translate(60px, 20); }
	80% { transform: translate(80px, 0); }
	to { transform: translate(100px, 20px); }
}
```

- 当然，也可以不使用关键字from和to，而都使用&lt;percentage&gt;：


**示例代码：**

```css
@keyframes testanimations{
	0% { transform: translate(0, 0); }
	20% { transform: translate(20px, 20px); }
	40% { transform: translate(40px, 0); }
	60% { transform: translate(60px, 20px); }
	80% { transform: translate(80px, 0); }
	100% { transform: translate(100px, 20px); }
}
```

>注意，这里的0%不能简写成0，0是非标准语法（虽然被某些浏览器所支持）。




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
		<td class="unsupport">2.0-4.0</td>
		<td class="support" rowspan="3">4.0-43.0<br><sup class="fix">-webkit-</sup></td>
		<td class="unsupport">3.1-3.2</td>
		<td class="support" rowspan="3">15.0-29.0<br><sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="3">3.2-8.1<br><sup class="fix">-webkit-</sup></td>
		<td class="partsupport">2.1-3.0<br><sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="3">18.0-40.0<br><sup class="fix">-webkit-</sup></td>
	</tr>
	<tr>
		<td class="support" rowspan="2">10.0+</td>
		<td class="support">5.0-15.0<br><sup class="fix">-moz-</sup></td>
		<td class="support" rowspan="2">4.0-8.1<br><sup class="fix">-webkit-</sup></td>
		<td class="support" rowspan="2">4.0+<br><sup class="fix">-webkit-</sup></td>
	</tr>
	<tr>
		<td class="support">16.0</td>
	</tr>
</tbody>
</table>


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
#sport{position:relative;width:500px;height:400px;border:1px solid #ddd;}
#staff{position:absolute;z-index:3;bottom:10px;left:10px;overflow:hidden;width:180px;height:8px;border-radius:3px;background:#ddd;line-height:20;
	-webkit-animation:staff 3s linear;
	animation:staff 3s linear;
}
#ball{position:absolute;z-index:3;bottom:20px;left:90px;overflow:hidden;width:30px;height:30px;border-radius:15px;box-shadow:0 0 10px rgba(204,102,0,.8);background:#F6D66E;background:linear-gradient(top,#fff,#F6D66E);line-height:20;
	-webkit-animation:ball 3s linear;
	animation:ball 3s linear;
}
@-webkit-keyframes ball{
	0%{-webkit-transform:translate(0,0);}
	5%{-webkit-transform:translate(-90px,-100px);}
	18%{-webkit-transform:translate(0,-350px);}
	35%{-webkit-transform:translate(200px,0);}
	46%{-webkit-transform:translate(380px,-160px);}
	60%{-webkit-transform:translate(250px,-350px);}
	78%{-webkit-transform:translate(60px,0);}
	100%{-webkit-transform:translate(0,0);}
}
@keyframes ball{
	0%{transform:translate(0,0);}
	5%{transform:translate(-90px,-100px);}
	18%{transform:translate(0,-350px);}
	35%{transform:translate(200px,0);}
	46%{transform:translate(380px,-160px);}
	60%{transform:translate(250px,-350px);}
	78%{transform:translate(60px,0);}
	100%{transform:translate(0,0);}
}
@-webkit-keyframes staff{
	0%{-webkit-transform:translate(0,0);}
	6%{-webkit-transform:translate(260px,0);}
	20%{-webkit-transform:translate(300px,0);}
	30%{-webkit-transform:translate(300px,0);}
	40%{-webkit-transform:translate(200px,0);}
	65%{-webkit-transform:translate(40px,0);}
	79%{-webkit-transform:translate(0,0);}
	100%{-webkit-transform:translate(0,0);}
}
@keyframes staff{
	0%{transform:translate(0,0);}
	6%{transform:translate(260px,0);}
	20%{transform:translate(300px,0);}
	30%{transform:translate(300px,0);}
	40%{transform:translate(200px,0);}
	65%{transform:translate(40px,0);}
	79%{transform:translate(0,0);}
	100%{transform:translate(0,0);}
}
</style>
</head>
<body>
<div id="sport">
	<span id="ball">弹球</span>
	<span id="staff">滑杆</span>
</div>
</body>
</html>

```
