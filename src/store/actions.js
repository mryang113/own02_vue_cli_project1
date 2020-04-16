import axios from "@/http"
import {GETSELLER,GETGOODS,GETRATINGS} from './mutation_types'

const ok =200;
export default {
  //{commit} 是store 的一个方法 ,可以直接解构赋值
  async [GETSELLER]({commit}){
    // console.log(this,'-----');
    //此时不能用this这种方法发请求 此时的this指的是 Store 不是vue实例,只有this指向vue实例身上才可以用此方法,比如在app.vue里
    // const {code,data} = await this.$http.shop.getSeller();
    const {code,data} = await axios.shop.getSeller();
    // console.log(data)
    if(code === ok)
      commit(GETSELLER,data)
  },
  async [GETGOODS]({commit}){
    const {code,data} = await axios.shop.getGoods();
    if(code === ok)
      commit(GETGOODS,data)
  },
  async [GETRATINGS]({commit}){
    const {code,data} = await axios.shop.getRatings();
    if(code === ok)
      commit(GETRATINGS,data)
  },
}