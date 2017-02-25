#user-drag

##语法

- user-drag：auto | element | none
- 默认值：auto
- 适用于：所有元素
- 继承性：有
- 动画性：否
- 计算值：指定值


##取值

- auto：使用默认的拖拽行为，这种情况只有图片和链接可以被拖拽。
- element：整个元素而非它的内容可拖拽。
- none：元素不能被拖动。在通过选中后可拖拽。


##说明

设置或检索一个元素可以被拖拽，而不它的内容。

- 对应的脚本特性为userDrag。


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
		<td class="unsupport">6.0-11.0</td>
		<td class="unsupport">2.0-40.0</td>
		<td class="support">4.0-45.0<sup class="fix">-webkit-</sup></td>
		<td class="support">6.0-8.0<sup class="fix">-webkit-</sup></td>
		<td class="support">15.0-29.0<sup class="fix">-webkit-</sup></td>
		<td class="unsupport">6.0-8.3</td>
		<td class="unsupport">2.1-4.4.4</td>
		<td class="unsupport">18.0-42.0</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
img {
    width: 100px;
    height: 100px;
}
.element {
    -webkit-user-drag: element;
    cursor: move;
    -webkit-user-select: none;
}
.none {
    -webkit-user-drag: none;
}
</style>
</head>
<body>
<dl>
    <dt>auto</dt>
    <dd><a href="#">我是一个链接</a></dd>
    <dd><img src="../../../images/alipay.png" alt="支付宝二维码"></dd>
    <dd>我是一些纯文字</dd>
    <dt>element</dt>
    <dd class="element"><a href="#">我是一个链接</a></dd>
    <dd class="element"><img src="../../../images/alipay.png" alt="支付宝二维码"></dd>
    <dd class="element">我是一些纯文字</dd>
    <dt>none</dt>
    <dd><a class="none" href="#">我是一个链接</a></dd>
    <dd><img class="none" src="../../../images/alipay.png" alt="支付宝二维码"></dd>
    <dd class="none">我是一些纯文字</dd>
</dl>
</body>
</html>

```
