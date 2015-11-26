#box-flex

##语法

- box-flex：&lt;number&gt;
- 默认值：0
- 适用于：伸缩盒子元素
- 继承性：无
- 动画性：否
- 计算值：指定值


##取值

- &lt;number&gt;：使用浮点数指定对象所分配其父元素剩余空间的比例。


##说明

设置或检索伸缩盒对象的子元素如何分配其剩余空间。

- 效果类似于过渡版本和新版本的flex属性；
- 示例：将一个容器分成6份，子对象a分1份，b分2份，c分3份

**Code:**

```html
<ul id="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
```

```css
#box{display:box;width:240px;height:100px;margin:0;padding:10px;list-style:none;}
#box li:nth-child(1){box-flex:1;}
#box li:nth-child(2){box-flex:1;}
#box li:nth-child(3){box-flex:2;}
```

>上面代码请自行加上-moz-,-webkit-之类的。box-flex生效需定义其父元素display为box或inline-box


- 误区：注意box-flex只是动态分配父元素的剩余空间，而不是整个父元素的空间。如上例，父元素#box的宽度为240px，如果你认为a,b,c的宽度分别为60, 60, 120那么就错了，因为box-flex只是分配父元素的剩余空间而已，所以a,b,c所分到的应该是除内容外所剩余下来的宽度
- 为了清晰所谓的剩余空间分配，对上例稍作修改，HTML Code不变



**Code：**

```css
#box{display:box;width:240px;height:100px;margin:0;padding:10px;list-style:none;}
.box li{width:50px;padding:7px;}
#box li:nth-child(1){box-flex:1;}
#box li:nth-child(2){box-flex:1;}
#box li:nth-child(3){box-flex:2;}
```

>从上面的代码，我们可以知道a,b,c的宽度分别为50+7*2=64px，三者加起来即192px，所以剩下的240-192=48px才是父元素的剩余空间，于是a,b,c按照设定的1:1:2来分配这48px，a分得12px，b分得12px，c分得24px，所以最终a=64+12=76px，b=64+12=76px，c=64+24=88px

- 对应的脚本特性为boxFlex。


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
		<td class="support">2.0-40.0<sup class="fix">-moz-</sup></td>
		<td class="support">4.0-45.0<sup class="fix">-webkit-</sup></td>
		<td class="support">6.0-8.0<sup class="fix">-webkit-</sup></td>
		<td class="support">15.0-29.0<sup class="fix">-webkit-</sup></td>
		<td class="support">6.0-8.3<sup class="fix">-webkit-</sup></td>
		<td class="support">2.1-4.4.4<sup class="fix">-webkit-</sup></td>
		<td class="support">18.0-42.0<sup class="fix">-webkit-</sup></td>
	</tr>
</tbody>
</table>




##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
h1{font:bold 20px/1.5 georgia,simsun,sans-serif;}
.box{display:-webkit-box;display:-moz-box;display:-ms-box;background:#000;width:240px;height:100px;margin:0;padding:10px;list-style:none;vertical-align:top;}
#box li:nth-child(1){-webkit-box-flex:1;-moz-box-flex:1;-ms-box-flex:1;background:#666;}
#box li:nth-child(2){-webkit-box-flex:1;-moz-box-flex:1;-ms-box-flex:1;background:#999;}
#box li:nth-child(3){-webkit-box-flex:2;-moz-box-flex:2;-ms-box-flex:2;background:#ccc;}
</style>
</head>
<body>
<h1>box-flex示例：</h1>
<ul id="box" class="box">
	<li>a</li>
	<li>b</li>
	<li>c</li>
</ul>
</body>
</html>

```
