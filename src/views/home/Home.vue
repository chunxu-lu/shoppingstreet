<template>
  <div>
    <NavBar class="home-nav">
      //替换name为center的插槽
      <div slot="center">购物街</div>
    </NavBar>
    <Swiper :banners="banners"></Swiper>
    <Recommend :recommends="recommends"/>
    <Fishion/>
    <TabControl 
       ref="tabControl" 
       @tabClick="tabClick" 
       class="tabbarcontrol" 
       :titles="['流行','新款','精选']">
    </TabControl>
    <GoodsList :goods="showGoods"></GoodsList>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
let rfrom
import NavBar from "components/common/navbar/NavBar";
import Swiper from "components/common/swiper/Swiper";
import Recommend from "./homechildren/recommend/Recommend";
import Fishion from "./homechildren/fishion/Fishion";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import { getHomeData,getHomeGoods } from "network/home";
export default {
  components: {
    NavBar,
    Swiper,
    Recommend,
    Fishion,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: null,
      goods: {
        pop: { _limit: 0, list: [] },
        new: { _limit: 0, list: [] },
        sell: { _limit: 0, list: [] }
      },
      currentType: "pop",
    };
  },
  methods:{
    getGoods(type) {
      const _limit = this.goods[type]._limit + 10;   //根据类型（type）多请求10条商品数据
      getHomeGoods(type, _limit).then(res => {       //调用封装的请求函数
        this.goods[type].list.push(...res);
        this.goods[type]._limit += 10;
        console.log(this.goods[type]._limit, this.goods[type].list);
        // this.$refs.scroll.scroll.finishPullUp()
      });
    },
     tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl.currentIndex = index
    },
  },
  created() {
    this.getGoods("pop");

    this.getGoods("new");

    this.getGoods("sell");

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
  computed:{
    showGoods() {
      return this.goods[this.currentType].list;
    }
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