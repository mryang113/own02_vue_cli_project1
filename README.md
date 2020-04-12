
### day01
* 1. 使用@vue/cli创建项目 
* 2. 添加vue.config.js配置文件;对脚手架创建的项目做一些环境的配置
```js
module.exports={
    lintOnSave:false,
    devServer:{
      host: "127.0.0.1", //主机地址
      port: 4001, // 端口 这两个可配可不配
      open:true // 详情参考配置文件
    }
}
```
* 3. 安装husky 修改package.json 为husky添加配置文件
```js
关闭eslint 在文件保存时的检验
    lintOnSave:false
关闭eslint 在代码提交前的钩子(下述配置不加)
    "husky": {
      "hooks": {
        "pre-commit": "npm run lint"
      }
    }
```

* 4. mock数据 ; 安装mock.js 拦截请求 初始化开发环境依赖    
```js    
01  npm i husky -D //哈士奇 在git commit 的一个钩子在commit是进行eslint
02  npm i mockjs -D //ajax请求拦截随机返回
03  npm i babel-plugin-import -D
```
* 5. 搭建axios的环境; 安装vant 初始化生产环境依赖
```js
01  npm i vuex -S
02  npm i vue-router -S
03  npm i axios -S

04  npm i vant -S
方式一. 自动按需引入组件 (推荐)
#安装插件
npm i babel-plugin-import -D
  因为axios的轻提示依赖于vant ; 所以我们要安装vant;
  如果你的项目中不会使用到vant;那么请把toast.js中的轻提示 换成其他轻量级的库
```
* 6. 搭建vue-router的环境
  7. 搭建vuex的环境




```js

```



