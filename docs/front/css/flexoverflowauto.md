---
title: flex:1时overflow:auto不生效
date: 2021-03-15
sidebar: true
categories:
  - 前端
tags:
  - CSS
  - 前端
---

# 问题描述
当一个容器设置为```flex:1```时，```overflow:auto```滚动不生效，无法滚动

# 解决方案
css
```css
flex:1 ;
overflow:auto;
height:0; //纵向滚动
```
如果是横向滚动```width:0```

