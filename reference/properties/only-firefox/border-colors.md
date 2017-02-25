#border-colors

##语法

- border-colors：&lt;color&gt;{1,}
- 相关属性：&lt;' border-top-colors '&gt; || &lt;' border-right-colors '&gt; || &lt;' border-bottom-colors '&gt; || &lt;' border-left-colors '&gt;
- 适用于：所有元素
- 继承性：无
- 动画性：是
- 计算值：指定值


##取值

- &lt;color&gt;：指定颜色。


##说明

设置或检索对象边框的多重颜色。

- border的width为(n)px，那么最多可以设置n组边框色，每组边框色宽度为1px；如果border的width为10px，却只设置了6组边框色，那么最后一组边框色将自动渲染剩余的宽度
- 本属性为伪属性，其分裂后的 &lt;' border-top-colors '&gt; , &lt;' border-right-colors '&gt; , &lt;' border-bottom-colors '&gt; , &lt;' border-left-colors '&gt; 才是有效属性。


##示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
.test{padding:10px;border-width:5px;border-style:solid;-moz-border-top-colors:#000 #fff #f00 #fff #090;-moz-border-right-colors:#000 #fff #f00 #fff #090;-moz-border-bottom-colors:#000 #fff #f00 #fff #090;-moz-border-left-colors:#000 #fff #f00 #fff #090;}
.test2{margin-top:10px;padding:10px;border-width:10px;border-style:solid;-moz-border-top-colors:#200 #500 #800 #900 #a00 #b00;-moz-border-right-colors:#200 #500 #800 #900 #a00 #b00;-moz-border-bottom-colors:#200 #500 #800 #900 #a00 #b00;-moz-border-left-colors:#200 #500 #800 #900 #a00 #b00;}
</style>
</head>
<body>
<div class="test">多组边框色效果</div>
<div class="test2">多组边框色效果</div>
</body>
</html>

```
