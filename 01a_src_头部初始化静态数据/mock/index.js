import Mock from 'mockjs'
import data from './data.json'
const {seller,goods,ratings} = data

Mock.mock("/api/seller",{code:200,data:seller});
Mock.mock("/api/goods",{code:200,data:goods});
Mock.mock("/api/seller",{code:200,data:ratings});