<template>
  <div class="header">
    <div class="top">
      <div class="left">
        <img
          src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg"
          class="avatar"
        />
      </div>
      <div class="right">
        <div class="title">
          <i class="brand"></i>
          <span class="name">嘉禾一品（温都水城）</span>
        </div>
        <div class="info">
          <span>硅谷专送/38分钟送达</span>
        </div>
        <div class="support">
          <ele-icon class="icon" :size="4" type="discount"></ele-icon>
          <span class="text">在线支付满100送老板,满200送店</span>
        </div>
      </div>
      <div class="btns">
          <div>
              <span class="text">5个</span>
              <i class="layout-keyboard_arrow_right"></i>
          </div>
      </div>
    </div>
    <!-- 公告 和top 并集  -->
    <div class="bulletin">
      <div class="content">
        <i class="icon"></i>
        <span class="text">是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户”</span>
      </div>
      <i class="layout-keyboard_arrow_right arrow"></i>
    </div>
    <!-- 头部的模糊背景和log图片保持一致 -->
    <div class="bg">
      <img src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg" class="avatar">
    </div>
    <!-- 头部的整个全屏下拉遮罩 -->
    <div class="mask">
      <div class="mainWrap">
        <div class="main">
          <!--真正存放那内容的地方 在这个内部要清除浮动-->
          <!--因为main的高度对整个css sticky footer 有着至关重要的作用-->
          <!--不能让main中浮动的元素影响main的高度-->
          <h2 class="title">嘉禾一品（温都水城）</h2>
          <div class="stars"></div>
          <ele-line class="line">
            <span class="text">优惠信息</span>
          </ele-line>
          <ele-list class="list"></ele-list>
          <ele-line class="line">
            <span class="text">商家公告</span>
          </ele-line>
          <p class="bulletin">
            是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户”
            是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户”
          </p>
        </div>
      </div>
      <!-- 黏连布局 -->
      <div class="footer">
        <i class="layout-close"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import icon from 'components/ele-icon/ele-icon.vue'
  import line from 'components/ele-line/ele-line.vue'
  import list from 'components/ele-list/ele-list.vue'
  export default {
    name: "ele-header",
    components:{
      "ele-icon":icon,
      "ele-line":line,
      "ele-list":list
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"
  @import "../../common/stylus/extend"
  .header
    position relative
    background rgba(7,17,27,.5)
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
      filter blur(6px)
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
          .stars
            height 24px
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