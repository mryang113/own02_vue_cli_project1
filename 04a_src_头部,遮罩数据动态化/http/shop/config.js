export default {
  name:"seller",
  api:{
    getSeller:{
      url:"/api/seller",
      method: "get",
      toast:true
    },
    getGoods:{
      url:"/api/goods",
      method: "get",
    },
    getRatings:{
      url:"/api/ratings",
      method: "get",
    },
  }

}