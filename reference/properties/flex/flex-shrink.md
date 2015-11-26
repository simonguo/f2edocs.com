#flex-shrink

##语法

- flex-shrink：&lt;number&gt;
- 默认值：1
- 适用于：flex子项
- 继承性：无
- 动画性：是
- 计算值：指定值


##取值

- &lt;number&gt;：用数值来定义收缩比率。不允许负值


##说明

设置或检索弹性盒的收缩比率。

- 根据弹性盒子元素所设置的收缩因子作为比率来收缩空间。
- 示例：a,b,c将按照1:1:3的比率来收缩空间


**Code：**
```html
<ul class="flex">
    <li>a</li>
    <li>b</li>
    <li>c</li>
</ul>
```

```css
.flex{display:flex;width:400px;margin:0;padding:0;list-style:none;}
.flex li{width:200px;}
.flex li:nth-child(3){flex-shrink:3;}
```

>flex-shrink的默认值为1，如果没有显示定义该属性，将会自动按照默认值1在所有因子相加之后计算比率来进行空间收缩。
>本例中c显式的定义了flex-shrink，a,b没有显式定义，但将根据默认值1来计算，可以看到总共将剩余空间分成了5份，其中a占1份，b占1份，c占3分，即1:1:3
>我们可以看到父容器定义为400px，子项被定义为200px，相加之后即为600px，超出父容器200px。那么这么超出的200px需要被a,b,c消化
>通过收缩因子，所以加权综合可得200*1+200*1+200*3=1000px；
>于是我们可以计算a,b,c将被移除的溢出量是多少：
>a被移除溢出量：(200*1/1000)* 200，即约等于40px
>b被移除溢出量：(200*1/1000)* 200，即约等于40px
>c被移除溢出量：(200*3/1000)* 200，即约等于120px
>最后a,b,c的实际宽度分别为：200-40=160px, 200-40=160px, 200-120=80px


- 对应的脚本特性为flexGrow。


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
#flex{display:-webkit-flex;display:flex;width:400px;margin:0;padding:0;list-style:none;}
#flex li{width:200px;}
#flex li:nth-child(1){background:#888;}
#flex li:nth-child(2){background:#ccc;}
#flex li:nth-child(3){-webkit-flex-shrink:3;flex-shrink:3;background:#aaa;}
</style>
</head>
<body>
<h1>flex-shrink示例：</h1>
<ul id="flex">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
</body>
</html>

```
