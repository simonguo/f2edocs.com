#text-align

##语法

- text-align：start<i class='fa fa-css3'></i> | end<i class='fa fa-css3'></i> | left | right | center | justify<i class='fa fa-css3'></i> | match-parent<i class='fa fa-css3'></i> | justify-all<i class='fa fa-css3'></i>
- 默认值：start
- 适用于：块容器
- 继承性：有
- 动画性：否
- 计算值：指定值，除 match-parent 值外


##取值

- left：内容左对齐。
- center：内容居中对齐。
- right：内容右对齐。
- justify：内容两端对齐，但对于强制打断的行（被打断的这一行）及最后一行（包括仅有一行文本的情况，因为它既是第一行也是最后一行）不做处理。（CSS3）
- start：内容对齐开始边界。（CSS3）
- end：内容对齐结束边界。（CSS3）
- match-parent：这个值和 inherit 表现一致，只是该值继承的 start 或 end 关键字是针对父母的 &lt;' direction '&gt; 值并计算的，计算值可以是 left 和 right 。（CSS3）
- justify-all：效果等同于 justify，但还会让最后一行也两端对齐。（CSS3）


##说明

设置或检索对象中内容的水平对齐方式。

- 块级元素的文本是一些堆叠的线框
- 大部分浏览器要使得 &lt;' text-align '&gt; 的justify两端对齐生效，需要在汉字间插入有空白，如空格；
- 块内的最后一行文本（包括块内仅有一行文本的情况，这时既是第一行也是最后一行）及被强制打断的行，其两端对齐需使用 &lt;' text-align-last '&gt;；
- IE浏览器下，如果 &lt;' text-align-last '&gt; 要生效，必须先定义 &lt;' text-align '&gt; 为justify；
- 单行两端对齐效果变得比较简单：

```css
li{overflow:hidden;width:200px;height:21px;text-align:justify;text-align-last:justify;}
li:after{display:inline-block;overflow:hidden;width:100%;height:0;content:'';}
```

```html
<ul>
	<li>我 是 谁</li>
	<li>你 又 是 谁</li>
	<li>世 界 末 日 2012</li>
</ul>
```
- 以上代码3个li中的内容都将两端对齐，需注意几点：
	- 所有主流浏览器都支持 text-align 的 justify 属性值；
	- text-align不处理强制打断的行，也不处理块内的最后一行，换句话说，如果块内仅有一行文本（该行既是第一行也是最后一行），这时仅设置text-align:justify无法让该行两端对齐；
	- text-align-last 是用来处理块内的最后一行和强制打断的行的，所以当要设置单行文本两端对齐时，需使用该属性；
	- 大部分浏览器要使得两端对齐生效，需在文本间插入空白，如空格（如果一行仅有2个汉字，Firefox也需在之间插入空白）；
	- 大部分浏览器尚不支持 text-align-last；
	- 依据上述的点，要实现单行两端对齐，可以走2个方向：
	- 由于所有浏览器都支持text-align的justify属性值，但不全支持text-align-last，我们可以对非IE及IE7以上浏览器使用伪对象生成额外的内容（IE7及以下浏览器不支持伪对象，使用text-align-last处理），置于第二行并将其隐藏，这时第一行文本（即要对齐的个单行文本）可使用text-align:justify来对齐
	- 支持 text-align-last 的浏览器，如IE, Firefox使用 text-align-last 处理，不支持的浏览器使用如上述方法处理；
	- 所以就目前情况来看，使用第一种方案是比较简约的，可以轻易的兼容IE5.5-10, Firefox, Chrome, Safari, Opera


- 对应的脚本特性为textAlign。


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
	<tr>
		<td class="g-color-css3-new">start</td>
		<td class="unsupport">6.0-11.0</td>
		<td class="support">2.0+</td>
		<td class="support">4.0+</td>
		<td class="support">6.0+</td>
		<td class="support">15.0+</td>
		<td class="support">6.0+</td>
		<td class="support">2.1+</td>
		<td class="support">18.0+</td>
	</tr>
	<tr>
		<td rowspan="2" class="g-color-css3-new">end</td>
		<td class="unsupport" rowspan="2">6.0-11.0</td>
		<td class="unsupport">2.0-3.5</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">3.6+</td>
	</tr>
	<tr>
		<td class="g-color-css3-new" rowspan="2">justify</td>
		<td class="partsupport" rowspan="2">6.0-11.0 <sup><a href="#support1">#1</a></sup></td>
		<td class="support" rowspan="2">2.0+ <sup><a href="#support2">#2</a></sup></td>
		<td class="partsupport">4.0-40.0 <sup><a href="#support1">#1</a></sup></td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="partsupport">15.0-27.0 <sup><a href="#support1">#1</a></sup></td>
		<td class="support" rowspan="2">6.0+</td>
		<td class="partsupport" rowspan="2">2.1-4.4.4 <sup><a href="#support1">#1</a></sup></td>
		<td class="partsupport">18.0-39.0 <sup><a href="#support1">#1</a></sup></td>
	</tr>
	<tr>
		<td class="support">41.0+</td>
		<td class="support">28.0+</td>
		<td class="support">40.0+</td>
	</tr>
	<tr>
		<td class="g-color-css3-new">match-parent</td>
		<td class="unsupport">6.0-11.0</td>
		<td class="unsupport">2.0-37.0</td>
		<td class="unsupport">4.0-41.0</td>
		<td class="unsupport">6.0-8.0</td>
		<td class="unsupport">15.0-27.0</td>
		<td class="unsupport">6.0-8.3</td>
		<td class="unsupport">2.1-4.4.4</td>
		<td class="unsupport">18.0-40.0</td>
	</tr>
	<tr>
		<td class="g-color-css3-new">justify</td>
		<td class="unsupport">6.0-11.0</td>
		<td class="unsupport">2.0-37.0</td>
		<td class="unsupport">4.0-41.0</td>
		<td class="unsupport">6.0-8.0</td>
		<td class="unsupport">15.0-27.0</td>
		<td class="unsupport">6.0-8.3</td>
		<td class="unsupport">2.1-4.4.4</td>
		<td class="unsupport">18.0-40.0</td>
	</tr>
</tbody>
</table>


- 如果要使得两端对齐生效，需要在单词之间添加空白，如空格
- 如果一行仅有2个汉字，较低版本的Firefox也需在之间插入空白


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test p{border:1px solid #000;}
.left p{text-align:left;}
.center p{text-align:center;}
.right p{text-align:right;}
.justify p{width:200px;text-align:justify;}
.start p{text-align:start;}
.end p{text-align:end;}
</style>
</head>
<body>
<ul class="test">
	<li class="left">
		<strong>left</strong>
		<p>我是左对齐内容</p>
	</li>
	<li class="center">
		<strong>center</strong>
		<p>我是居中对齐内容</p>
	</li>
	<li class="right">
		<strong>right</strong>
		<p>我是右对齐内容</p>
	</li>
	<li class="justify">
		<strong>justify</strong>
		<p>我 是一段可以两端对齐的文字， 你 仔细看看， 我 的对齐方式都贴着 容器左右的边缘。</p>
	</li>
	<li class="start">
		<strong>start</strong>
		<p>start效果</p>
	</li>
	<li class="end">
		<strong>end</strong>
		<p>end效果</p>
	</li>
</ul>
</body>
</html>

```
