#包含选择符(E F)

##语法

- E F { sRules }


##说明

选择所有被E元素包含的F元素。

- 与子选择符不同的是，包含选择符将会命中所有符合条件的后代，包括儿子，孙子，孙子的孙子...


**E F VS. E&gt;F：**

```html
<style>
	/* 包含选择符(E F) */
	.demo div { border:1px solid #f00; }
	/* 子选择符(E>F) */
	.demo > div { border:1px solid #f00; }
</style>
<div class="demo">
	<div>0
		<div>1</div>
		<div>2</div>
		<div>3</div>
	</div>
</div>
```

>此例，如果使用.demo div，那么 0, 1, 2, 3 都有有边框；如果使用 .demo &gt; div，那么只有 0 有边框，即只有子元素会被命中；




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
		<td class="support">6.0+</td>
		<td class="support">2.0+</td>
		<td class="support">4.0+</td>
		<td class="support">3.1+</td>
		<td class="support">3.5+</td>
		<td class="support">3.2+</td>
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
ul li {
	color: #f00;
}
</style>
</head>
<body>
<ul>
	<li>列表项目</li>
	<li>列表项目</li>
	<li>列表项目</li>
	<li>列表项目</li>
</ul>
</body>
</html>

```
