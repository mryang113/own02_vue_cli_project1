
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
04  npm i vuex -S
05  npm i vue-router -S
06  npm i axios -S

07  npm i vant -S
方式一. 自动按需引入组件 (推荐)
#安装插件
08  npm i babel-plugin-import -D
  因为axios的轻提示依赖于vant ; 所以我们要安装vant;
  如果你的项目中不会使用到vant;那么请把toast.js中的轻提示 换成其他轻量级的库
```
* 6. 搭建vue-router的环境
  7. 搭建vuex的环境


### day02
* 1. 引入 rest css 
```js
<%= BASE _URL %> 这个是vue 4.0 版本特有的引用方式<%= %>,中间写变量 这个就是代表根目录BASE _URL public
```
* 2. 解决点击响应延时0.3s问题
```js
<script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
<script>
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
    }, false);
  }
</script>
```
* 4. 安装stylus

```js
09  npm install stylus stylus-loader --save-dev
  <style lang="sty1us" rel="stylesheet/stylus">
```
* 5. 选定适配方案

```js
在这不做适配,以中间固定,两边留空白的形式,画移动端的界面;
所有移动端浏览器的厂商都会实现一件事情:
    在理想视口的情况下; 1px所 占据的实际尺寸是- -模一样的
    px是一-个抽象单位; 1px在不同的设备上有可能占据的实际尺寸是不一样的(1px !== 1px)
```
* 6. 图片怎么才可以完美清晰的展示
```js
当图片上的1位图像素与设备上的1物理像素对应上时;图片才可以完美清晰的展示
设计稿要设计的多大;得到公司挑选的基准设备的物理像素的点数
设计稿(pnB)        设备(iPhone6)
750 * 1336          理想视口的情况下整个屏幕可以放下的css像素的点数375 * 667 
                    iPhone6的像素比为2整个屏幕可以放下的物理像素的点数750 * 1334

```


* 字体图标要去 icon 网站去加工成图标字体
* css 语言stylus 
```js
插件搜 ext:styl 安装 这个language-stylus插件才支持后缀为.styl的文件 ;

```

### day03
* 配置 http 路由
* 先把头部数据动态化
* 一般a.b.c这样的格式超过两个 都让v-if 判断下 有的话在去再去显示,避免报错
```js
<div class="support" v-if="seller.supports && seller.supports[0]"> 
```
* 过度样式
```js
5.1 过渡相关的样式  自己定义一个公共类再去主文件引入
import "@/common/stylus/transition.styl"
```
* 再去做评星组件 stars

* 一个滑屏库 better.scroll github的一个仓库
```js
10  npm install better-scroll@1.15.0 --save  用它指定版 相对比较稳定
```
