/*
 * @Descripttion: 
 * @version: 
 * @Author: bindy(128080)
 * @Date: 2020-08-31 09:28:50
 * @LastEditors: bindy(128080)
 * @LastEditTime: 2022-02-11 18:13:18
 */
module.exports = {
    title: 'Bindy 的小仓库',
    description: 'Living  & Coding',
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    theme: 'reco',
    themeConfig: {
        logo: 'https://raw.githubusercontent.com/ybingyu/picgo/master/blogimg/a.jpg',
        authorAvatar: 'https://raw.githubusercontent.com/ybingyu/picgo/master/blogimg/a.jpg',
        author: 'bindy',
        type: 'blog',
        subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        codeTheme: 'tomorrow', // default 'tomorrow'
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'      // 默认文案 “标签”
            }
        },
        "nav": [
            {
                "text": "主页",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "动态",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": "文档",
                "icon": "reco-message",
                "items": [
                    {
                        "text": "SVG",
                        "link": "/docs/svg/"
                    },
                    {
                        "text": "Web API",
                        "link": "/docs/webapi/"
                    }
                ]
            }/* ,
            {
                "text": "Contact",
                "icon": "reco-message",
                "items": [
                    {
                        "text": "GitHub",
                        "link": "https://github.com/recoluan",
                        "icon": "reco-github"
                    }
                ]
            } */
        ],
        "sidebar": {
            "/docs/svg/": [
                ['', 'SVG基础'],
                ['2', 'SVG图像处理'],
                ['3', 'SVG动画'],
            ],
            "/docs/webapi/": [
                ['', 'Web API(一)'],
                ['2', 'Web API(二)'],
                ['3', 'Web API(三)'],
            ],
            "/work/": [
                ['2020', '2020'],
                ['2021', '2021'],
            ]
        },
        lastUpdated: true,
    },
    configureWebpack: {
        resolve: {
            alias: {
            }
        }
    },
    plugins: {

    }
};