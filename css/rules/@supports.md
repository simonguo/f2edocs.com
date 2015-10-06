#@supports

##语法

- @supports (rule)[operator (rule)]* { sRules }
- operator：or | and | not


##取值

- rule：指定一条具体的CSS规则，必须使用括号包裹
- operator：使用or | and | not等操作符指定多条规则。


##说明

检测是否支持某CSS特性

- 定义支持和不支持flex标准写法的浏览器分别使用不同的规则：


**示例代码：**

```css
@supports ( display: flex ) {
	body {
		display: flex;
	}
	#aside {
		width: 210px;
	}
	#main {
		flex: auto;
	}
}

@supports not ( display: flex ) {
	#aside {
		float: left;
		width: 210px;
	}
	#main {
		overflow: hidden;
		*zoom: 1;
	}
}
```

>我们可以通过类似这样的写法来给不同的终端使用差异化的方案。


- 你也可以写多重规则来进行过滤：


示例代码：

```css
@supports ( box-shadow: 2px 2px ) or
          ( -moz-box-shadow: 2px 2px ) or
          ( -webkit-box-shadow: 2px 2px ) {
	.demo {
		-moz-box-shadow: 2px 2px 0 rgba(0, 0, 0, .3);
		-webkit-box-shadow: 2px 2px 0 rgba(0, 0, 0, .3);
		box-shadow: 2px 2px 0 rgba(0, 0, 0, .3);
	}
}
```


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
		<td class="unsupport">6.0-11.0</td>
		<td class="unsupport">2.0-21.0</td>
		<td class="unsupport">4.0-27.0</td>
		<td class="unsupport">6.0-8.0</td>
		<td class="support" rowspan="2">15.0+</td>
		<td class="unsupport">6.0-8.4</td>
		<td class="unsupport">2.1-4.3</td>
		<td class="unsupport">18.0-26.0</td>
	</tr>
	<tr>
		<td class="support">12.0+</td>
		<td class="support">22.0+</td>
		<td class="support">28.0+</td>
		<td class="support">9.0+</td>
		<td class="support">9.0+</td>
		<td class="support">4.4+</td>
		<td class="support">27.0+</td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
@supports ( display: flex ) {
    body {
        display: flex;
    }
    #aside {
        width: 210px;
    }
    #main {
        flex: auto;
    }
}

@supports not ( display: flex ) {
    #aside {
        float: left;
        width: 210px;
    }
    #main {
        overflow: hidden;
        *zoom: 1;
    }
}
</style>
</head>
<body>
<div id="aside">aside</div>
<div id="main">main</div>
</body>
</html>

```
