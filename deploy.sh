###
 # @Descripttion: 
 # @version: 
 # @Author: bindy(128080)
 # @Date: 2020-08-31 09:39:43
 # @LastEditors: bindy(128080)
 # @LastEditTime: 2020-09-11 10:52:37
### 
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo bindyy.cn > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:ybingyu/ybingyu.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -