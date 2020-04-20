#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

git init
git add -A
git commit -m '发布笔记&deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:weizhanzhan/vuepress_note.git master

cd -