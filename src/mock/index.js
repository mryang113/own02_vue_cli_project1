import Mock from 'mockjs'
import data from './data.json'
const {seller,goods,ratings} = data
Mock.mock("/api/seller",{code:200,data:seller});
Mock.mock("/api/goods",{code:200,data:goods});
// bug 把这个 ratings写成了 seller 导致回来的数据和state定义的不一样
Mock.mock("/api/ratings",{code:200,data:ratings});