#E:target

##语法

- E:target { sRules }


##说明

匹配相关URL指向的E元素。



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
		<td class="unsupport">6.0-8.0</td>
		<td class="support" rowspan="2">2.0+</td>
		<td class="support" rowspan="2">4.0+</td>
		<td class="support" rowspan="2">3.1+</td>
		<td class="support" rowspan="2">3.5+</td>
		<td class="support" rowspan="2">3.2+</td>
		<td class="support" rowspan="2">2.1+</td>
		<td class="support" rowspan="2">18.0+</td>
	</tr>
	<tr>
		<td class="support">IE9.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test .hd{padding:10px 0;}
.test .nav{position:fixed;right:10px;left: 540px;}
.test .nav a{display:block;margin: 10px 0;}
.test .bd .panel{width:500px;margin-top:5px;border:1px solid #ddd;}
.test .bd h2{border-bottom:1px solid #ddd;}
.test .bd .panel:target{border-color:#f60;}
.test .bd .panel:target h2{border-color:#f60;}
h2,p{margin:0;padding:10px;font-size:16px;}
</style>
</head>
<body>
<div class="test">
	<div class="hd nav">
		<a href="#panel1">前往区块1</a>
		<a href="#panel2">前往区块2</a>
		<a href="#panel3">前往区块3</a>
		<a href="#panel4">前往区块4</a>
		<a href="#panel5">前往区块5</a>
	</div>
	<div class="bd">
		<div id="panel1" class="panel">
			<h2>区块1</h2>
			<div><p>区块1内容</p><p>区块1内容</p><p>区块1内容</p></div>
		</div>
		<div id="panel2" class="panel">
			<h2>区块2</h2>
			<div><p>区块2内容</p><p>区块2内容</p><p>区块2内容</p></div>
		</div>
		<div id="panel3" class="panel">
			<h2>区块3</h2>
			<div><p>区块3内容</p><p>区块3内容</p><p>区块3内容</p></div>
		</div>
		<div id="panel4" class="panel">
			<h2>区块4</h2>
			<div><p>区块4内容</p><p>区块4内容</p><p>区块4内容</p></div>
		</div>
		<div id="panel5" class="panel">
			<h2>区块5</h2>
			<div><p>区块5内容</p><p>区块5内容</p><p>区块5内容</p></div>
		</div>
	</div>
</div>
</body>
</html>

```
