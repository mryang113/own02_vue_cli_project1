
module.exports = {
  // outputDir: "damu", // 输出的目录
  lintOnSave:false, //不让他检查 true,有 'error'字符串 vue文件有修改服务器就会报错
  devServer:{ //配置启动项位置
    host: "127.0.0.1", //主机地址
    port: 4001, // 端口
    // open: true  //是否自动打开浏览器
    before(app){
      console.log("----",app); //开发devServer回调这个钩子,在服务器会打印
      //app 本质上就是express核心对象;可以用来定义后台路由
      app.get("/api/seller",(req,res)=>{
          res.json({
              code:200,
              data:seller
          })
      })
    },
  },
  configureWebpack:{
    //原生webpack的配置,如果webpack玩的溜就在这里写配置也是一样的
    devServer:{
      open: true //和上面那个open 一样,写一个就行
    }
  }
}