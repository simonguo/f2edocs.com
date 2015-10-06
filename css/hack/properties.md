#属性级Hack

##语法

- selector{&lt;hack&gt;?property:value&lt;hack&gt;?;}


##取值

- _：选择IE6及以下。连接线（中划线）（-）亦可使用，为了避免与某些带中划线的属性混淆，所以使用下划线（_）更为合适。
- *：选择IE7及以下。诸如：（+）与（#）之类的均可使用，不过业界对（*）的认知度更高
- \9：选择IE6+
- \0：选择IE8+和Opera15以下的浏览器


##说明

选择不同的浏览器及版本

- 尽可能减少对CSS Hack的使用。Hack有风险，使用需谨慎
- 通常如未作特别说明，本文档所有的代码和示例的默认运行环境都为标准模式。
- 
					一些CSS Hack由于浏览器存在交叉认识，所以需要通过层层覆盖的方式来实现对不同浏览器进行Hack的。如下面这个例子：
					
				
如想同一段文字在IE6,7,8显示为不同颜色，可这样写：

```css
.test {
	color: #090\9; /* For IE8+ */
	*color: #f00;  /* For IE7 and earlier */
	_color: #ff0;  /* For IE6 and earlier */
}
```

>* 上述Hack均需运行在标准模式下，若在怪异模式下运行，这些Hack将会被不同版本的IE相互识别，导致失效。




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>



<style>
h1 {
	margin: 10px 0;
	font-size: 16px;
}
.test {
	color: #c30;          /* For latest Firefox, chrome, Safari */
	color: #090\0;        /* For Opera15- */
	color: #00f\9;        /* For IE8+ */
	*color: #f00;         /* For IE7 */
	_color: #ff0;         /* For IE6 */
}
</style>
</head>
<body>
<div class="test">在不同浏览器下看看我的颜色吧</div>
</body>
</html>
			
```