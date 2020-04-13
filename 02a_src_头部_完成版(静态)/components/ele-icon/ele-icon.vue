<template>
  <i class="icon" :class="[`icon-${size}`,type]"></i>
</template>

<script>
  export default {
    name: "ele-icon",
    props:{
        size:Number,
        type:String
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixin"
  .icon
    display inline-block
    background-repeat no-repeat
    background-size 100%
    &.icon-1
      width 12px
      height 12px
      &.decrease
        bg-image("img/decrease_1")
      &.discount
        bg-image( "img/discount_1")
      &.guarantee
        bg-image("img/guarantee_1")
      &.invoice
        bg-image("img/invoice_1")
      &.special
        bg-image("img/special_1")
    &.icon-2
      width 16px
      height 16px
      &.decrease
        bg-image("img/decrease_2")
      &.discount
        bg-image( "img/discount_2")
      &.guarantee
        bg-image("img/guarantee_2")
      &.invoice
        bg-image("img/invoice_2")
      &.special
        bg-image("img/special_2")
    &.icon-3
      width 12px
      height 12px
      &.decrease
        bg-image("img/decrease_3")
      &.discount
        bg-image( "img/discount_3")
      &.guarantee
        bg-image("img/guarantee_3")
      &.invoice
        bg-image("img/invoice_3")
      &.special
        bg-image("img/special_3")
    &.icon-4
      width 16px
      height 16px
      &.decrease
        bg-image("img/decrease_4")
      &.discount
        bg-image( "img/discount_4")
      &.guarantee
        bg-image("img/guarantee_4")
      &.invoice
        bg-image("img/invoice_4")
      &.special
        bg-image("img/special_4")

</style>