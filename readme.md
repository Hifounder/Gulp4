# Gulp 4.0 整理


> 這個是整理的快速環境，提供使用
## Gulp版本使用


> CLI version: 2.2.0
> Local version: 4.0.2
## Node版本


> Node version: 12.2.0
> NPM version: 6.9.0
## 使用到的package套件
```json
    "autoprefixer": "^9.5.1",
    "babel-core": "^6.26.3",
    "babel-preset-env": "^1.7.0",
    "browser-sync": "^2.26.5",
    "cssnano": "^4.1.10",
    "gulp": "^4.0.2",
    "gulp-babel": "^7.0.1",
    "gulp-concat": "^2.6.1",
    "gulp-postcss": "^8.0.0",
    "gulp-sass": "^4.0.2",
    "gulp-uglify": "^3.0.2"
```
## 使用方法
1. 先安裝
> `npm i gulp-cli@2.2.0 -g`

2. 安裝套件
> `npm install`

3. 開始使用
> `npm start`

4. 文件編輯
> asset/scss       裡頭主要編輯SCSS輸出至asset/css
> asset/js/orginal 裡頭主要編輯ES6輸出至asset/js/minify
## 結語
> 在進入框架前，我學的打包工具是使用到Gulp，那時候我使用的Gulp是3.0版本，最近需要所以安裝發現到更新了所以就又整理了一個4.0的文件，我是覺得Gulp在輸出專案上其實是蠻好用的，其實還有很多打包工具的應用。
在前公司我將技術拉高到壓縮這件事情，在我壓縮到一半的時候公司考量到了一件事情，如果之後專案維護的人並不是我，那這個學習曲線上，是不是公司考量的要點之一，當然身為前端學習者的角度是不停的學習，但這也是之後公司考量應徵人員的考量。
優化這件事情是不錯的，但如果公司需要，這是一個加分條件。
可以不需要壓縮也可以將檔案分割的很漂亮，在工作上也是舒服的！
