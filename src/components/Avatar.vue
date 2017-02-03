<template>
  <a href="javascript:" class="avatar">
    <img src="../assets/img/avatar.jpg" alt="avatar">
  </a>
</template>

<script>
  export default {
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .avatar {
    display: block;
    height: 30px;
    width: 30px;
    border: 1px solid #666;
    border-radius: 7px;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
</style>
