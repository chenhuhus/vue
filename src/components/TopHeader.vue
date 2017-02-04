<template>
  <div class="top-header">
    <div class="content">
      <a href="javascript:;" class="header-menu" v-on:click="SideBarToggle">
        <i></i>
        <i></i>
        <i></i>
      </a>
      <avatar></avatar>
    </div>
    
    <transition name="slide-left">
      <side-bar v-if="isSideBarShow" v-on:SideBarToggle="SideBarToggle"></side-bar>
    </transition>
    
    <transition name="shade">
      <a href="javascript:;" class="sidebar-shade" v-if="isShadeShow" v-on:click="ShadeToggle"></a>
    </transition>
  </div>
</template>

<script>
  import Avatar from './Avatar'
  import SideBar from './SideBar'

  export default {
    data: function () {
      return {
        isSideBarShow: false,
        isShadeShow: false
      }
    },
    components: {
      Avatar,
      SideBar
    },
    methods: {
      SideBarToggle: function () {
        this.isSideBarShow = !this.isSideBarShow
        this.isShadeShow = !this.isShadeShow
        console.log('111')
      },
      ShadeToggle: function () {
        this.isShadeShow = !this.isShadeShow
        this.isSideBarShow = !this.isSideBarShow
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .top-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 20px;
    height: 50px;
    display: flex;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0 1px 1px #d9d9d9;
  }

  .content {
    // flex-basis: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .header-menu {
    width: 20px;

    i {
      display: block;
      width: 100%;
      height: 2px;
      background-color: #666;
      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }
  }

  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: all .3s ease;
  }

  .slide-left-enter,
  .slide-left-leave-active {
    transform: translateX(-100%);
  }

  .sidebar-shade {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.4);
  }
</style>
