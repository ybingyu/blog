---
title: 狐妖小狐仙H5总结
date: 2021-06-10
sidebar: true
categories:
  - 前端
tags:
  - 移动端
  - 前端
  - H5
---

# 项目背景
- 活动前面为视频背景
- 活动游戏内容为摇一摇助力
- 兼容平台为：微信小程序与QQ内，其他平台为二维码引流页面。

无接口版体验地址，请手机访问
https://zydown.99.com/gw/other/package/yby/2021/06/hy/

<!-- http://w.bindyy.cn/works/2021/hy -->

# 项目总结
## 视频兼容
### 行内视频

```html
 <video src="https://" loop="true" id="index1Video" poster="https://" preload="auto" autoplay 
                        x5-video-player-type="h5"
                        x5-video-player-fullscreen="true" webkit-playsinline="" x-webkit-airplay="true" airplay="allow"
                        playsinline="" class="video video-1" 
                        muted='true'></video>
```
### 自动播放
视频不允许自动播放，需要用户交互（点击）。所以在每个视频前，注意要设置点击的环节。  
IOS12+，点击一个video标签，其余的video也都被允许播放。而安卓与ios12，每个视频video标签都需要用户交互（点击），才可播放。因此，视频自动切换时用同一个video标签，换src。有前置交互的可以设置不同的video标签
### 跳过视频
需要直接跳过视频，到视频结尾。
 
安卓```v.currentTime= v.duration```跳过视频无效 。最后采用隐藏视频直接显示结尾的静态图的方案。

[视频截图工具](http://w.bindyy.cn/tools/video.html)

### onend
部分安卓机（某个型号的小米）不执行video.onend，与监听ontimeupdate(e.currentTarget.currentTime )一起使用
```javascript
document.getElementById('cutVideo').ontimeupdate = function (e) {
    if (e.currentTarget.currentTime > 14) {// 时间为已知14s
        console.log('ppp')
    }
}
```

## 音频
安卓系统用web audio api的原因：
1. 安卓播放视频（即使是静音的），背景音乐的audio会变小声。
2. 安卓audio不允许多音轨   
IOS不用web audio api，是因为要自动播放背景音乐，用web auido api就无法自动播放，安卓会自动播放

## 震动
安卓支持震动、IOS不支持
```javascript
if (navigator.vibrate) {
    navigator.vibrate(1000);//震动秒数
} else if (navigator.webkitVibrate) {
    navigator.webkitVibrate(1000);
} else {
    console.log('不支持震动')
}
            
```

## 摇一摇
IOS权限获取需要HTTPS环境，必须要用户同意。点击时调用```iosGrantedTips```。如果用户拒绝了，关闭APP，会再次发请求。
```javascript
        // 摇一摇权限
        iosGrantedTips() {
            var ua = navigator.userAgent.toLowerCase();
            if (ua.indexOf("like mac os x") > 0) {
                var verinfo = ua.match(/cpu iphone os (.*?) like mac os/);
                var version = verinfo[1].replace(/_/g, ".");
                console.log('version', version)
                var arr = version.split(".");
                if ((arr[0] > 12 && arr[0] <= 13 && arr[1] > 2) || arr[0] >= 14) {  //对13.3以后的版本处理,包括13.3,

                    this.ios13granted()

                    return;
                }
            }

            //13.3以前的版本或者安卓
            this.iosDeviceGranted()
        },
        ios13granted() {
            var self = this
            if (typeof DeviceMotionEvent.requestPermission === 'function') {
                DeviceMotionEvent.requestPermission().then((permissionState) => {
                    /* granted（被授予），denied（被拒绝） 或者default（默认） */
                    // console.log('p', permissionState)
                    if (permissionState === 'granted') {
                        self.iosDeviceGranted()
                    } else {
                        // alert(1)
                        self.iosDeviceDenied()
                    }
                }).catch((err) => {
                    self.iosDeviceDenied()
                    // alert(JSON.stringify(err))
                })
            } else {
                // 处理常规的非iOS 13+设备
                self.iosDeviceGranted()
            }
        },
        // 授权完可以开始游戏
        iosDeviceGranted() {
            this.togglePage('game')

            this.closePop('toolSure', true)
        },
        // 如果ios被拒绝
        iosDeviceDenied() {
            alert("您未允许权限，请将App关闭或者清除缓存后重新访问授权");
        },
```