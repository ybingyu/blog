---
title: 让低版本IE支持圆角属性——PIE.htc
date: 2021-02-24
sidebar: true
categories:
  - 前端
tags:
  - CSS
  - 前端
---

## 官网
[http://css3pie.com/](http://css3pie.com/)
[PIE.htc](http://w.bindyy.cn/css/PIE.htc)

## 代码

```css
.box {
    margin: 40px 0 0 50px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    behavior: url(PIE.htc);
    overflow: hidden;
    border: 2px solid #fbe5a7;
    background: #000;

    // 这个比较重要
    position: relative;
    z-index: 0;
}

img {
    border-radius: 50%;
    behavior: url(PIE.htc);
    display: block;
    width: 100%;
    height: 100%;
}
```

```html
<div class="box"><img src="1.jpg"></div>
```




