#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

git init
git add -A
git commit -m 'blog - 今天又成长了那么一nainai，地址http://zhan961023.gitee.io/zhanwei'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:weizhanzhan/vuepress_note.git master

cd -