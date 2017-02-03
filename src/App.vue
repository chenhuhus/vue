<template>
  <div id="app" class="container">
    <top-header></top-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader'

export default {
  components: {
    TopHeader
  }
}
</script>

<style lang="scss" scoped>
  .container {
    padding-top: 50px;
  }

// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
</style>
