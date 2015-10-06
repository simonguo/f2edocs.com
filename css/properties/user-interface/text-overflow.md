#text-overflow

##语法

- text-overflow：clip | ellipsis
- 默认值：clip
- 适用于：块级容器元素
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- clip：当内联内容溢出块容器时，将溢出部分裁切掉。
- ellipsis：当内联内容溢出块容器时，将溢出部分替换为（...）。


##说明

当块容器 &lt;' overflow '&gt; 为非visible时，定义内联内容溢出其块容器是否截断或者添加(...)及自定义字符

- 要使得 &lt;' text-overflow '&gt; 属性生效，块容器必须显式定义 &lt;' overflow '&gt; 为非visible值，同时显式或者隐式的定义 &lt;' width '&gt; 为非auto值， &lt;' white-space '&gt; 为nowrap值。

用代码来解释这段话：

**case 1:**

```html
<style>
.demo p{overflow:hidden;width:200px;white-space:nowrap;text-overflow:ellipsis;}
</style>
<div class="demo">
	<p>这是一句非常非常长的话，被用来做text-overflow属性测试。</p>
</div>
```

>case 1，我们将text-overflow生效必备的3个属性： <' overflow '> , <' width '> 和 <' white-space '> 都直接定义在了内联内容的父级块容器上

**case 2：**
```html
<style>
.demo{width:200px;white-space:nowrap;}
.demo p{overflow:hidden;text-overflow:ellipsis;}
</style>
<div class="demo">
	<p>这是一句非常非常长的话，被用来做text-overflow属性测试。</p>
</div>
```
>case 2，我们将 <' width '> 和 <' white-space '> 定义在了更外层的块容器上，但case 1和case 2的效果是一样的。因为这2个属性可以被继承

- 对应的脚本特性为textOverflow。


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
		<td class="support" rowspan="2">6.0+</td>
		<td class="unsupport">2.0-6.0</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">7.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test li{margin-top:10px;}
.test .clip p{overflow:hidden;width:200px;white-space:nowrap;text-overflow:clip;}
.test .ellipsis p{overflow:hidden;width:200px;white-space:nowrap;text-overflow:ellipsis;}
</style>
</head>
<body>
<ul class="test">
	<li class="clip">
		<strong>clip: 直接将溢出的文字裁剪</strong>
		<p>测试用文字测试用文字测试用文字测试用文字测试用文字测试用文字</p>
	</li>
	<li class="ellipsis">
		<strong>ellipsis: 将溢出的文字显示省略标记（...）</strong>
		<p>测试用文字测试用文字测试用文字测试用文字测试用文字测试用文字</p>
	</li>
</ul>
</body>
</html>

```
