<template>
  <div>
    <h2 style="color:hotpink">欢迎来到路由组件,以下信息有vuex store 提供</h2>
    {{test}}
  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    name: "test",
    computed: {
      ...mapState(["test"])
    },
  }
</script>

<style scoped>

</style>