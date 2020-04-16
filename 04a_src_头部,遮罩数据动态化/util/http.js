import {loading,success,fail} from './toast'

//根据axios & config.api 生成不同的请求函数

export default (axios,config={}) => {

  //守卫 当config中的api配置不规范时;它会提示
  let modelName = config.name || "default";
  if(!config.api)
    throw new Error(`${modelName}的配置文件中的api选项是必须的`)
  if(Object.prototype.toString.call(config.api) !== "[object Object]")
    throw new Error(`${modelName}的配置文件中的api选项必须是个Object对象`)

  //真正的实现 util 的逻辑
  let httpObj = {};
  let api = config.api;

  for (let apiName in api) {
    let {url, method,isForm,data:apiData,toast,hooks} = api[apiName]
    apiData = apiData || {};
    hooks = hooks || {};
    let {beforeReq,afterReqSuccess,afterReqFail} = hooks;

    //创建每一个配置所对应的发送请求的方法
    //data:来自于组件
    //apiData:来自于配置
    httpObj[apiName] = async ( data={} ) => {
      //根据配置 为请求准备好要携带的数据
      let transformData = null;
      if(isForm){
        transformData = new FormData();
        for (let key in data){
          transformData.append(key,data[key])
        }
        for (let key in apiData){
          transformData.append(key,apiData[key])
        }
      }else {
        transformData = Object.assign(apiData,data)
      }

      //根据api的methods配置去发请求
      let body = ""
      try{
        //真正的请求发送的代码
        beforeReq && beforeReq.call(config);
        toast && loading();
        switch (method) {
          case "get":
          case "delete":
            body = await axios({
              url,
              method,
              params: transformData
            })
            break;
  
          case "put":
          case "post":
            body = await axios({
              url,
              method,
              data: transformData
            })
            break;
        }
        afterReqSuccess && afterReqSuccess.call(config);
        toast && success();
      }catch(err){
        afterReqFail && afterReqFail.call(config);
        toast && fail();
      }


      //async函数的返回值 就是async函数返回的promise中持有的值
      //这个值 在当前的情况下 应该是我们请求发送返回的结果
      return body;

    }

  }

  return httpObj;
}