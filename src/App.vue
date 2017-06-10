<template>
  <div id="app">
    <div class="header container-fluid">
      <div class="row">
        <div class="col-md-3">
          <img src="" height="" width="" alt="">
        </div>
        <div class="menu col-md-4">
          <ul class="menu-list row">
            <router-link class="menu-item col-md-3" tag="li" v-for="(item,index) in menu" :to="{path: '/'+ item.name}" @click="showRoute" :key="index">
              <div class="menu-icon"><icon :name="item.icon" scale=2></icon></div>
              <div class="menu-text">{{item.text}}</div>
            </router-link>
          </ul>
        </div>
        <div class="col-md-offset-3 col-md-2">
          <div class="info">
            <icon name="user-circle" scale="2.5" class="user"></icon>
            <span class="text">{{ user }}</span>
            <icon name="caret-down" scale="1.5" class="tri"></icon>
          </div>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
const navHeight = 84;
export default {
  name: 'app',
  data () {
    return {
      user: "admin",
      currentIndex: 2,
      mainHeight: 512,
      menu: [
        {
          text: "定位监控",
          name: "position",
          icon: "globe"
        },
        {
          text: "车辆维护",
          name: "vehicle",
          icon: "automobile"
        },
        {
          text: "会员管理",
          name: "member",
          icon: "group"
        },
        {
          text: "系统管理",
          name: "system",
          icon: "gears"
        }
      ]
    }
  },
  methods: {
    showRoute(){
      alert($route.path);
    }
  },
  mounted() {
    $('.main').height(window.innerHeight - navHeight);
  }
}
</script>

<style scoped>
ul{
  margin: 0;
  padding: 0;
}
.header{
  width: 100%;
  height: 84px;
  background-color: #2a80c9;
}
.logo {
 
}
.menu{
  
}
.menulist{
  
}
.menu-item{
  display: inline-block;
  text-align: center;
  color:#fff;
}
li.active{
  background-color: #5fc0ed;
}
.menu-icon{
  display: block;
  width: 40px;
  height:40px;
  margin: 14px auto 0;
}
.menu-text{
  height:30px;
  line-height: 30px;
  font-size: 18px;
}
.info{
  color: #fff;
  padding-left: 54px;
}
.info .text{
  display: inline-block;
  padding: 0px 14px 0px 28px;
  font-size: 20px;
  vertical-align: top;
  margin-top: 30px;
}
.info .user{
  vertical-align: top;
  margin-top: 22px;
}
.info .tri{
  vertical-align: top;
  margin-top: 32px;
}
.main{
  min-height: 512px;
}
</style>
