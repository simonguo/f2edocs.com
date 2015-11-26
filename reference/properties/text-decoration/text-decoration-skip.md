#text-decoration-skip

##语法

- text-decoration-skip：none | [ objects || spaces || ink || edges || box-decoration ]
- 默认值：objects
- 适用于：所有元素
- 继承性：是
- 动画性：否
- 计算值：指定的值


##取值

- none：不略过：文本装饰将绘制在所有文本内容及行内盒上。
- objects：略过原子内联元素（例如图片或内联块）
- spaces：略过空白：包括常规空白（U+0020）、制表符（U+0009）以及不间断空格（U+00A0）、表意空格（U+3000）、所有固定宽度空格（U+2000至U+200A、U+202F和U+205F）、以及相邻的字母间隔或单词间隔。
- ink：略过字符绘制处：中断装饰线，以显示文本装饰件将穿过该字形的文本。用户代理可能还会在该字形轮廓的两侧额外的略过一段距离。
- edges：用户代理应当将装饰线的起始、结束位置放置于较所装饰元素的内容边缘更靠内的位置，使得诸如两个紧密相邻的元素的下划线不会显示为一条下划线。（这在中文里很重要，对于中文，下划线是一种标点符号。）
- box-decoration：略过盒子的margin,border,padding区域。需要注意的是，这只针对祖先的装饰效果，装饰盒不会绘制自身的装饰。


##说明

检索或设置对象中的文本装饰线条必须略过内容中的哪些部分。

- 对应的脚本特性为textDecorationSkip。


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
		<td class="unsupport" rowspan="2">6.0-11.0</td>
		<td class="unsupport" rowspan="2">2.0-40.0</td>
		<td class="unsupport" rowspan="2">4.0-45.0</td>
		<td class="unsupport">6.0-7.0</td>
		<td class="unsupport" rowspan="2">15.0-29.0</td>
		<td class="unsupport">6.0-7.1</td>
		<td class="unsupport" rowspan="2">2.1-4.4.4</td>
		<td class="unsupport" rowspan="2">18.0-42.0</td>
	</tr>
	<tr>
		<td class="partsupport">7.1-8.0<sup class="fix">-webkit-</sup><sup><a href="#support1">#1</a></sup></td>
		<td class="partsupport">8.0-8.3<sup class="fix">-webkit-</sup><sup><a href="#support1">#1</a></sup></td>
	</tr>
</tbody>
</table>


- 支持该属性，但未实现效果。


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test {
    width: 120px;
    margin-top: 10px;
    -webkit-text-decoration: underline;
    -moz-text-decoration: underline;
    text-decoration: underline;
    padding: 0 50px;
}
.test li {
    -webkit-text-decoration-skip: objects;
    -moz-text-decoration-skip: objects;
    text-decoration-skip: objects;
}
.test span {
    display: inline-block;
}
</style>
</head>
<body>
<div class="test">文本装饰将在<span>每一行</span>都出现</div>
</body>
</html>

```
