---
title: 动画与用户体验
date: 2021-09-16
sidebar: true
categories:
  - 前端
tags:
  - CSS
  - 前端
  - media
  - 用户体验
---

# 动画与用户体验
适当的动画可以提升用户体验，但不是所有用户都喜欢动画，尤其是一些装饰类动画，可能觉得花里胡哨的，可能觉得分散了注意力，可能为了省电，甚至部分动画还会对用户造成不良的反应。为此，选择权应该交给用户，用户觉得不需要可以在系统直接关闭动画。

目前大部分的操作系统都可以关闭不必要的动画

- 在 Windows 10 中：设置 > 轻松获取 > 显示 > 在 Windows 中显示动画。
- 在 Windows 7 中：控制面板 > 轻松获取 > 使计算机更易于查看 > 关闭不必要动画。
- 在 MacOS 中：系统偏好 > 辅助使用 > 显示 > 减弱动态效果。
- 在 iOS 上：设置 > 通用 > 辅助性 > 减弱动态效果。
- 在 Android 9+ 上：设置 > 辅助性 > 移除动画。

## prefers-reduced-motion 
相对应的，CSS 中可以通过媒体查询 prefers-reduced-motion来检测系统是否开启动画减弱功能。

所以，可以再增加这样一段 CSS
```css
@media screen and (prefers-reduced-motion) { 
    /* 禁用不必要的动画 */ 
    .fireworks { 
        animation: none; 
    } 
}
````