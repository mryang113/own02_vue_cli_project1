<template>
  <div id="app">
    holle vux 4.0 
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'App',
  async mounted(){
    const body = await this.$axios.seller.getSeller();
    console.log(body.data);

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
