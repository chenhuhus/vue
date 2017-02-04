<template>
  <div class="sidebar">
    <div class="sidebar-top">
      <avatar></avatar>
      <nickname></nickname>
    </div>

    <ul class="side-links" v-on:click="SideBarToggle">
      <li>
        <router-link to="/">
          <span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/article">
          <span>文章</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import Avatar from './Avatar'
  import Nickname from './Nickname'

  export default {
    components: {
      Avatar,
      Nickname
    },
    methods: {
      SideBarToggle: function () {
        this.$emit('SideBarToggle')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .sidebar {
    z-index: 6;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 40%;
    display: flex;
    flex-direction: column;
    background-color: #ff9999;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .3);
    max-width: 400px;
    min-width: 250px;
  }

  .sidebar-top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-image: url('../assets/img/sidebar_bg.png');
    background-size: cover;

    .avatar {
      width: 45px;
      height: 45px;
      margin-bottom: 10px;
    }

    .nickname {
      color: #fff;
    }
  }
</style>
