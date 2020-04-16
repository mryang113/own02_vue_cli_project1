<template>
  <div class="header">
    <div class="top">
      <div class="left">
        <img
          :src="seller.avatar"
          class="avatar"
        />
      </div>
      <div class="right">
        <div class="title">
          <i class="brand"></i>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="info">
          <span>{{seller.description}}/{{seller.deliveryTime}}分钟送达</span>
        </div>
        <!-- 一般a.b.c这样的格式超过两个 都让v-if 判断下 有的话在去再去显示,避免报错 -->
        <div class="support" v-if="seller.supports && seller.supports[0]">
          <ele-icon class="icon" :size="1" :type="seller.supports[0].type"></ele-icon>
          <span class="text">{{seller.supports[0].content}}</span>
        </div>
      </div>
      <div class="btns" @click="showMask = true">
          <div>
              <span v-if="seller.supports" class="text">{{seller.supports.length}}个</span>
              <i class="layout-keyboard_arrow_right"></i>
          </div>
      </div>
    </div>
    <!-- 公告 和top 并集  -->
    <div class="bulletin" @click="showMask = true">
      <div class="content">
        <i class="icon"></i>
        <span class="text">{{seller.bulletin}}</span>
      </div>
      <i class="layout-keyboard_arrow_right arrow"></i>
    </div>
    <!-- 头部的模糊背景和log图片保持一致 -->
    <div class="bg">
      <img :src="seller.bgImg" class="avatar">
    </div>
    <!-- 头部的整个全屏下拉遮罩 -->
    <transition  name="mask">
      <div class="mask" v-show="showMask"> 
        <div class="mainWrap">
          <div class="main">
            <!--真正存放那内容的地方 在这个内部要清除浮动-->
            <!--因为main的高度对整个css sticky footer 有着至关重要的作用-->
            <!--不能让main中浮动的元素影响main的高度-->
            <h2 class="title">嘉禾一品（温都水城）</h2>
            <div class="starsWrap">
              <ele-stars :size="48" :score="seller.score"></ele-stars>
            </div>
            <ele-line class="line">
              <span class="text">优惠信息</span>
            </ele-line>
            <ele-list class="list" :supports="seller.supports"></ele-list>
            <ele-line class="line">
              <span class="text">商家公告</span>
            </ele-line>
            <p class="bulletin">
              {{seller.bulletin}}
            </p>
          </div>
        </div>
        <!-- 黏连布局 -->
        <div class="footer" @click="showMask = false">
          <i class="layout-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import line from 'components/ele-line/ele-line.vue'
  import list from 'components/ele-list/ele-list.vue'
  import stars from "components/ele-stars/ele-stars.vue"
  export default {
    name: "ele-header",
    data(){
      return {
        showMask: false
      }
    },
    computed:{
      ...mapState(["seller"])
    },
    components:{
      "ele-line":line,
      "ele-list":list,
      "ele-stars":stars
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"
  @import "../../common/stylus/extend"
  .header
    position relative
    background rgba(7,17,27,.5)
    overflow hidden
    & > .top
      position relative
      display flex
      padding 24px 0 18px 24px
      & > .left
        width 64px
        height 64px
        margin-right 16px
        .avatar
          width 100%
          height 100%
          border-radius 2px
      & > .right
        color rgba(255,255,255,1)
        .title
          center()
          font-size 16px
          line-height 18px
          font-weight bold
          margin-top 2px
          margin-bottom 8px
          .brand
            bg-image("img/brand")
            display inline-block
            width 30px
            height 18px
            background-repeat no-repeat
            background-size 100%
            margin-right 6px
        .info
          font-size 12px
          line-height 12px
          font-weight 200
        .support
          center()
          font-size 10px
          line-height 12px
          font-weight 200
          margin-top 10px
          margin-bottom 2px
          .icon
            margin-right 4px
      & > .btns
        center()
        position absolute
        right 4px
        bottom 5px
        width 48px
        height 24px
        background rgba(0,0,0,.2)
        border-radius 16px
        color rgba(255,255,255,1)
        font-size 10px
        font-weight 200
        line-height 12px
        .text
            margin-right 2px
    //公告 和top 并集  嵌套一定要对齐,不然样式不会生效
    & > .bulletin
      center()
      position relative
      padding-left 12px
      padding-right 26px
      height 28px
      background rgba(7,17,27,.2)
      .content
        width 100%
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        font-size 10px
        font-weight 200
        color rgba(255,255,255,1)
        .icon
          bg-image("img/bulletin")
          display inline-block
          width 22px
          height 12px
          background-repeat no-repeat
          background-size 100%
          margin-right 4px
          flex-basis 22px
        .text
          position relative
          top -2px;
      .arrow
          position absolute
          right 12px
          color rgba(255,255,255,1)
    & > .bg
      z-index -1
      position absolute
      left 0
      right 0
      top 0
      bottom 0
      filter blur(2px)
      img
        width 100%
        height 100%
    & > .mask
      z-index 9
      position fixed
      left 0
      right 0
      top 0
      bottom 0
      backdrop-filter:blur(10px)
      background rgba(7,17,27,.8)
      overflow auto
      .mainWrap
        min-height 100%
        .main
          @extend .clearfix
          padding-bottom 96px
          padding-top 64px
          .title
            font-size 16px
            line-height 16px
            font-weight 700
            color rgba(255,255,255,1)
            text-align center
          .starsWrap
            width 80%
            margin 0 auto
            text-align center
            margin-top 16px
            margin-bottom 28px
          .line
            width 80%
            margin 0 auto
            .text
              margin 0 12px
          .list
            box-sizing border-box
            width 80%
            padding 0 12px
            margin 0 auto
            margin-top 24px
            margin-bottom 28px
          .bulletin
            box-sizing border-box
            width 80%
            margin 0 auto
            margin-top 24px
            font-size 12px
            line-height 24px
            color rgba(255,255,255,1)
            padding 0 12px
      .footer
        margin-top -96px
        height 96px
        line-height 96px
        text-align center
        font-size 32px
        color rgba(255,255,255,.5)








</style>