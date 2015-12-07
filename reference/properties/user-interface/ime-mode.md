#ime-mode

##语法

- ime-mode：auto | normal | active | inactive | disabled
- 默认值：auto
- 适用于：所有输入文本框
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- auto：不影响IME(input method editor)的状态。
- normal：正常的IME状态
- active：指定所有使用ime输入的字符。即激活本地语言输入法。用户仍可以撤销激活ime
- inactive：指定所有不使用ime输入的字符。即激活非本地语言。用户仍可以撤销激活ime
- disabled：完全禁用ime。对于有焦点的控件(如输入框)，用户不可以激活ime


##说明

设置或检索是否允许用户激活输入中文，韩文，日文等的输入法（IME）状态。

- 该属性用于控制文本域输入法状态；
- 该属性有被w3c标准移除的风险。
- 对应的脚本特性为imeMode。


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
		<td class="unsupport">4.0-42.0</td>
		<td class="unsupport">6.0-8.0</td>
		<td class="unsupport">15.0-27.0</td>
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
#test{
	padding:50px;
	font:14px/1.231 georgia,宋体,arial,verdana,helvetica,sans-serif;
}
#test fieldset{
	margin:0;
	padding:10px;
	border-radius:5px;
}
#test fieldset legend{
	padding:3px 6px;
	border-radius:3px;
	background:#ddd;
}
#test ul{
	list-style:none;
	margin:0;
	padding:0;
}
#test li{
	padding:5px 10px;
}
#test .writebox{
	position:relative;
	overflow:visible;
	outline:none;
	width:200px;
	padding:4px 3px 5px;
	border:1px solid #999;
	border-radius:3px;
	box-shadow:1px 1px 2px rgba(0,0,0,.2) inset;
	background-color:#FFFFFF;
	color:#666666;
	font:14px/1.231 georgia,宋体,arial,verdana,helvetica,sans-serif;
}
#test .writebox:hover{
	border-color:#777;
	box-shadow:1px 1px 2px rgba(0,0,0,.4) inset;
}
#test .writebox:focus{
	border-color:#666;
	box-shadow:0 0 5px rgba(0,0,0,.5);
}
.auto{
	ime-mode:auto;
}
.normal{
	ime-mode:normal;
}
.active{
	ime-mode:active;
}
.inactive{
	ime-mode:inactive;
}
.disabled{
	ime-mode:disabled;
}
.title{
	font:bold 16px/1.5 georgia,simsun,sans-serif;
}
</style>
</head>
<body>
<h1 class="title">在下列输入框输入试试每个值的作用：</h1>
<form id="test" action="#" method="post">
	<fieldset>
		<legend>简单的表单</legend>
		<ul>
			<li><label>auto：<input type="text" class="writebox auto"></label></li>
			<li><label>normal：<input type="text" class="writebox normal"></label></li>
			<li><label>active：<input type="text" class="writebox active"></label></li>
			<li><label>inactive：<input type="text" class="writebox inactive"></label></li>
			<li><label>disabled：<input type="text" class="writebox disabled"></label></li>
		</ul>
	</fieldset>
</form>
</body>
</html>

```
