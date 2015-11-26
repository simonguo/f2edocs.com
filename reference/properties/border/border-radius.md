#border-radius

##语法

- border-radius：[ &lt;length&gt; | &lt;percentage&gt; ]{1,4} [ / [ &lt;length&gt; | &lt;percentage&gt; ]{1,4} ]?
- 默认值：看每个独立属性
- 适用于：所有元素
- 继承性：无
- 动画性：看每个独立属性
- 计算值：看每个独立属性


##取值

- &lt;length&gt;：用长度值设置对象的圆角半径长度。不允许负值
- &lt;percentage&gt;：用百分比设置对象的圆角半径长度。不允许负值


##说明

设置或检索对象使用圆角边框。提供2个参数，2个参数以“/”分隔，每个参数允许设置1~4个参数值，第1个参数表示水平半径，第2个参数表示垂直半径，如第2个参数省略，则默认等于第1个参数

- 水平半径：如果提供全部四个参数值，将按上左(top-left)、上右(top-right)、下右(bottom-right)、下左(bottom-left)的顺序作用于四个角。
- 如果只提供一个，将用于全部的于四个角。
- 如果提供两个，第一个用于上左(top-left)、下右(bottom-right)，第二个用于上右(top-right)、下左(bottom-left)。
- 如果提供三个，第一个用于上左(top-left)，第二个用于上右(top-right)、下左(bottom-left)，第三个用于下右(bottom-right)。
- 垂直半径也遵循以上4点。
- 对应的脚本特性为borderRadius。


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
		<td class="support">2.0-12.0<br><sup class="fix">-moz-</sup> <sup><a href="#support1">#1</a></sup></td>
		<td class="support">4.0-43.0<br><sup class="fix">-webkit-</sup></td>
		<td class="support">3.1-8.1<br><sup class="fix">-webkit-</sup></td>
		<td class="support">10.5-28.0<br><sup class="fix">-webkit-</sup></td>
		<td class="support">3.2-8.1<br><sup class="fix">-webkit-</sup></td>
		<td class="support">2.1-4.4.4<br><sup class="fix">-webkit-</sup></td>
		<td class="support">18.0-40.0<br><sup class="fix">-webkit-</sup></td>
	</tr>
	<tr>
		<td class="support">9.0+</td>
		<td class="support">4.0+</td>
		<td class="support">5.0+</td>
		<td class="support">5.0+</td>
		<td class="support">10.5+</td>
		<td class="support">4.0+</td>
		<td class="support">2.2+</td>
		<td class="support">18.0+</td>
	</tr>
	<tr>
		<td rowspan="2"><a href="../../values/numeric/percentage.htm">&lt;percentage&gt;</a></td>
		<td class="support" rowspan="2">9.0+</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">5.0+</td>
		<td class="support" rowspan="2">5.0+</td>
		<td class="support" rowspan="2">10.5+</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="unsupport">2.1-2.3</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">3.0+</td>
	</tr>
</tbody>
</table>


- Firefox从13.0开始移除对-moz-的支持，仅支持标准的border-radius写法，在4.0-12.0区间，两种方式都支持。


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
ul{margin:0;padding:0;}
li{list-style:none;margin:10px 0 0 0;padding:10px;background:#bbb;}
.test .one{border-radius:10px;}
.test .two{border-radius:10px 20px;}
.test .three{border-radius:10px 20px 30px;}
.test .four{border-radius:10px 20px 30px 40px;}
.test2 .one{border-radius:10px/5px;}
.test2 .two{border-radius:10px 20px/5px 10px;}
.test2 .three{border-radius:10px 20px 30px/5px 10px 15px;}
.test2 .four{border-radius:10px 20px 30px 40px/5px 10px 15px 20px;}
</style>
</head>
<body>
<h2>水平与垂直半径相同时：</h2>
<ul class="test">
	<li class="one">提供1个参数<br>border-radius:10px;</li>
	<li class="two">提供2个参数<br>border-radius:10px 20px;</li>
	<li class="three">提供3个参数<br>border-radius:10px 20px 30px;</li>
	<li class="four">提供4个参数<br>border-radius:10px 20px 30px 40px;</li>
</ul>
<h2>水平与垂直半径不同时：</h2>
<ul class="test2">
	<li class="one">提供1个参数<br>border-radius:10px/5px;</li>
	<li class="two">提供2个参数<br>border-radius:10px 20px/5px 10px;</li>
	<li class="three">提供3个参数<br>border-radius:10px 20px 30px/5px 10px 15px;</li>
	<li class="four">提供4个参数<br>border-radius:10px 20px 30px 40px/5px 10px 15px 20px;</li>
</ul>
</body>
</html>

```
