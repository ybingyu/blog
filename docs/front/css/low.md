---
title: 低版本浏览器样式兼容
date: 2021-09-16
sidebar: true
categories:
  - 前端
tags:
  - CSS
  - 前端
---
# 低版本浏览器样式兼容

## IE
比如IE不支持```mask```遮罩，IE 下需要降级处理。
那么如何区分 IE 浏览器和现代浏览器呢？其实可以用 IE 不支持的一些选择器就可以了，比如 ```:default```
```CSS
.fireworks {
    background: url('https://imgservices-1252317822.image.myqcloud.com/image/081320210201435/e9951400.png') right top no-repeat;
    background-size: auto 150px;
}

/*以下现代浏览器支持*/
_:default, .fireworks {
    -webkit-mask: url('https://imgservices-1252317822.image.myqcloud.com/image/081320210201435/e9951400.png') right top no-repeat;
    -webkit-mask-size: auto 150px;
}
```

效果如下（这里以macOS为例）

![](https://cdn.jsdelivr.net/gh/ybingyu/picgo/blogimg/front/css/aniuser.gif)


可以看到，当勾选 "减弱动态效果" 时，动效就完全消失了。