#&lt;image&gt;

##语法

- &lt;image&gt; = &lt;url&gt; | image() | image-set() | element() | cross-fade() | &lt;gradient&gt;


##说明

&lt;image&gt; 值表示一个2D图像，可以是url引用，图像符号，渐变符号。

- &lt;image&gt; 可以用在包括：border-image-source, background-image, list-style-image, cursor 等属性上，它被用来取代 &lt;url&gt; 属性值，因为 &lt;image&gt; 值已包含了 &lt;url&gt; 在内。
- 有些场景下，图像可能是无效，比如当 &lt;url&gt; 指向的是一个无效的图像资源时。一个无效的图像将表现为全透明，但是当无效的图像需要一些特殊行为时，可以使用 image() 
