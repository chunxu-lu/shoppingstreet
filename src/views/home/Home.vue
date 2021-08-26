<template>
  <div>
    <NavBar class="home-nav">
      //替换name为center的插槽
      <div slot="center">购物街</div>
    </NavBar>
    <Swiper :banners="banners"></Swiper>
    <Recommend :recommends="recommends"/>
    <Fishion/>
  </div>
</template>

<script>
let rfrom
import NavBar from "components/common/navbar/NavBar";
import Swiper from "components/common/swiper/Swiper";
import Recommend from "./homechildren/recommend/Recommend";
import Fishion from "./homechildren/fishion/Fishion";

import { getHomeData } from "network/home";
export default {
  components: {
    NavBar,
    Swiper,
    Recommend,
    Fishion
  },
  data() {
    return {
      banners: [],
      recommends: null,
    };
  },
  created() {
    var timer = setInterval(() => {
      var url = document.location.href;
      var winW = document.documentElement.clientWidth;
      if (
        winW < 500 &&
        url.indexOf("yes") == -1 &&
        this.$route.path == "/home" &&
        rfrom != "/category" &&
        rfrom != "/cart" &&
        rfrom != "/profile" &&
        rfrom != "/detail"
      ) {
        var t = new Date();
        setTimeout(()=>{
          window.location.href = url + "?yes=" + t.getTime();
        },200)
      }
    }, 100);

    getHomeData().then(res => {
      this.banners = res[0].banners;
      this.recommends = res[0].recommends
    });
  },
  beforeRouteEnter(to, from, next) {
    rfrom = from.path
    next();
  }
};
</script>

<style  lang='css' scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>