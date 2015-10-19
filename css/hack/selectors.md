# 选择符级Hack
## 语法
- <hack> selector{ sRules }

## 说明
选择不同的浏览器及版本
- 尽可能减少对CSS Hack的使用。Hack有风险，使用需谨慎
- 通常如未作特别说明，本文档所有的代码和示例的默认运行环境都为标准模式。
- 一些CSS Hack由于浏览器存在交叉认识，所以需要通过层层覆盖的方式来实现对不同浏览器进行Hack的。
- 简单列举几个：

```css
html .test { color: #090; }       /* For IE6 and earlier */
+ html .test { color: #ff0; }     /* For IE7 */
.test:lang(zh-cmn-Hans) { color: #f00; }  /* For IE8+ and not IE */
.test:nth-child(1) { color: #0ff; } /* For IE9+ and not IE */
```
> 上述代码中的3,4两行就是典型的利用能力来进行选择的CSS Hack。

## 示例

```html

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<style>
* html .test {
    color: #090;
}
* + html .test {
    color: #ff0;
}
.test:lang(zh-cmn-Hans) {
    color: #f00;
}
.test:nth-child(1) {
    color: #0ff;
}
</style>
</head>
<body>
<div class="test">在不同浏览器下看看我的颜色吧</div>
</body>
</html>
```
