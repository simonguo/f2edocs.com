#list-style-type

##语法

- list-style-type：disc | circle | square | decimal | lower-roman | upper-roman | lower-alpha | upper-alpha | none | armenian | cjk-ideographic | georgian | lower-greek | hebrew | hiragana | hiragana-iroha | katakana | katakana-iroha | lower-latin | upper-latin
- 默认值：disc
- 适用于：所有 &lt;' display '&gt; 设置为list-item的元素
- 继承性：有
- 动画性：否
- 计算值：特定值


##取值

- disc：实心圆(CSS1)
- circle：空心圆(CSS1)
- square：实心方块(CSS1)
- decimal：阿拉伯数字(CSS1)
- lower-roman：小写罗马数字(CSS1)
- upper-roman：大写罗马数字(CSS1)
- lower-alpha：小写英文字母(CSS1)
- upper-alpha：大写英文字母(CSS1)
- none：不使用项目符号(CSS1)
- armenian：传统的亚美尼亚数字(CSS2)
- cjk-ideographic：浅白的表意数字(CSS2)
- georgian：传统的乔治数字(CSS2)
- lower-greek：基本的希腊小写字母(CSS2)
- hebrew：传统的希伯莱数字(CSS2)
- hiragana：日文平假名字符(CSS2)
- hiragana-iroha：日文平假名序号(CSS2)
- katakana：日文片假名字符(CSS2)
- katakana-iroha：日文片假名序号(CSS2)
- lower-latin：小写拉丁字母(CSS2)
- upper-latin：大写拉丁字母(CSS2)


##说明

设置或检索对象的列表项所使用的预设标记。

- 若 &lt;' list-style-image '&gt; 属性为none或指定图像不可用时， &lt;'list-style-type '&gt; 属性将发生作用。
- 仅作用于具有 &lt;'display '&gt; 值等于list-item的对象（如li对象）。
- 注意：ol对象和ul对象的type特性为其后的所有列表项目（如li对象）指明列表属性。
- 对应的脚本特性为listStyleType。


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
		<td class="support">6.0+</td>
		<td class="support">15.0+</td>
		<td class="support">6.0+</td>
		<td class="support">2.1+</td>
		<td class="support">18.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
h1{font-size:16px;font-family:Arial;}
.disc{list-style-type:disc;}
.circle{list-style-type:circle;}
.square{list-style-type:square;}
.decimal{list-style-type:decimal;}
.lower-roman{list-style-type:lower-roman;}
.upper-roman{list-style-type:upper-roman;}
.lower-alpha{list-style-type:lower-alpha;}
.upper-alpha{list-style-type:upper-alpha;}
.none{list-style-type:none;}
.armenian{list-style-type:armenian;}
.cjk-ideographic{list-style-type:cjk-ideographic;}
.georgian{list-style-type:georgian;}
.lower-greek{list-style-type:lower-greek;}
.hebrew{list-style-type:hebrew;}
.hiragana{list-style-type:hiragana;}
.hiragana-iroha{list-style-type:hiragana-iroha;}
.katakana{list-style-type:katakana;}
.katakana-iroha{list-style-type:katakana-iroha;}
.lower-latin{list-style-type:lower-latin;}
.upper-latin{list-style-type:upper-latin;}
</style>
</head>
<body>
<h1>disc：</h1>
<ul class="disc">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>circle：</h1>
<ul class="circle">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>square：</h1>
<ul class="square">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>decimal：</h1>
<ul class="decimal">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>lower-roman：</h1>
<ul class="lower-roman">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>upper-roman：</h1>
<ul class="upper-roman">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>lower-alpha：</h1>
<ul class="lower-alpha">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>upper-alpha：</h1>
<ul class="upper-alpha">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>none：</h1>
<ul class="none">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>armenian：</h1>
<ul class="armenian">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>cjk-ideographic：</h1>
<ul class="cjk-ideographic">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>georgian：</h1>
<ul class="georgian">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>lower-greek：</h1>
<ul class="lower-greek">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>hebrew：</h1>
<ul class="hebrew">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>hiragana：</h1>
<ul class="hiragana">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>hiragana-iroha：</h1>
<ul class="hiragana-iroha">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>katakana：</h1>
<ul class="katakana">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>katakana-iroha：</h1>
<ul class="katakana-iroha">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>lower-latin：</h1>
<ul class="lower-latin">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
<h1>upper-latin：</h1>
<ul class="upper-latin">
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
	<li>这是一个项目列表</li>
</ul>
</body>
</html>

```
