<template>
  <div id="app">
    <ele-header></ele-header>
    <div class="navs">
      <div class="item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from "components/ele-header/ele-header.vue"
  import {mapActions} from 'vuex'
  import {GETSELLER} from 'store/mutation_types'
  export default {
    name: 'App',
    components:{
          "ele-header":header
      },
    methods: {
      ...mapActions([GETSELLER])
    },
    mounted(){
      this[GETSELLER]()
    }

  }
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin";  //此时import 是stylus语法.后缀 .styl可以省略
  #app 
    position relative
    width 100%
    height 100%
    overflow hidden
    .navs
      /* 
      position relative
      &:after
        position absolute
        left 0
        bottom 0
        display block
        content ""
        width 100%
        height 1px
        background  black
        //这一段代码 和下面单独写是不一样的 ,这个没有做几点屏幕的适配
      */
      one-px(black)
      display flex
      height 40px
      & > .item
        flex 1
        a
          center()
          width 100%
          height 100%
          font-size 14px
          line-height 14px
          color rgba(77,85,93,1)
          &.active //此时active 你点击router-link 时,vue自动给你加上active类
            color rgba(240,20,20,1)

</style>
