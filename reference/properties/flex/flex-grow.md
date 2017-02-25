#flex-grow

##语法

- flex-grow：&lt;number&gt;
- 默认值：0
- 适用于：flex子项
- 继承性：无
- 动画性：是
- 计算值：指定值


##取值

- &lt;number&gt;：用数值来定义扩展比率。不允许负值


##说明

设置或检索弹性盒的扩展比率。

- 根据弹性盒子元素所设置的扩展因子作为比率来分配剩余空间。
-
					示例：b,c将按照1:3的比率分配剩余空间


**Code：**

```html
<ul class="flex">
    <li>a</li>
    <li>b</li>
    <li>c</li>
</ul>
```

```css
.flex{display:flex;width:600px;margin:0;padding:0;list-style:none;}
.flex li:nth-child(1){width:200px;}
.flex li:nth-child(2){flex-grow:1;width:50px;}
.flex li:nth-child(3){flex-grow:3;width:50px;}
```

>flex-grow的默认值为0，如果没有显示定义该属性，是不会拥有分配剩余空间权利的。
>本例中b,c两项都显式的定义了flex-grow，flex容器的剩余空间分成了4份，其中b占1份，c占3分，即1:3
>flex容器的剩余空间长度为：600-200-50-50=300px，所以最终a,b,c的长度分别为：
>a: 50+(300/4)=200px
>b: 50+(300/4*1)=125px
>c: 50+(300/4*3)=275px

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
.box{
	display:-webkit-flex;
	display:flex;
	width:600px;margin:0;padding:10px;list-style:none;background-color:#eee;}
.box li{width:100px;height:100px;border:1px solid #aaa;text-align:center;}
#box li:nth-child(2){
	-webkit-flex-grow:1;
	flex-grow:1;
}
#box li:nth-child(3){
	-webkit-flex-grow:2;
	flex-grow:2;
}
</style>
</head>
<body>
<h1>flex-grow示例：</h1>
<ul id="box" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
	<li>d</li>
	<li>e</li>
</ul>
</body>
</html>

```
