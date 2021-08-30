<template>
  <div>
    <NavBar class="home-nav">
      //替换name为center的插槽
      <div slot="center">购物街</div>
    </NavBar>

    <TabControl
      :class="{fix:isTabFix}"
      ref="tabControl1"
      @tabClick="tabClick"
      class="tabbarcontrol1"
      :titles="['流行','新款','精选']"
      v-show="isTabFix"
    ></TabControl>

    <Scroll ref="scroll" class="content" @scroll="scroll" @pullingUp="loadMore">
      <Swiper style="padding-top:44px" :banners="banners" @swiperLoad="swiperLoad"></Swiper>
      <Recommend :recommends="recommends" />
      <Fishion />
      <TabControl
        ref="tabControl"
        @tabClick="tabClick"
        class="tabbarcontrol"
        :titles="['流行','新款','精选']"
      ></TabControl>
      <GoodsList :goods="showGoods"></GoodsList>
    </Scroll>
    <BackTop @click.native="backTop" v-show="isShow" />
  </div>
</template>

<script>
let rfrom;
import NavBar from "components/common/navbar/NavBar";
import Swiper from "components/common/swiper/Swiper";
import Recommend from "./homechildren/recommend/Recommend";
import Fishion from "./homechildren/fishion/Fishion";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/common/backTop/BackTop";

import { getHomeData, getHomeGoods } from "network/home";
export default {
  components: {
    NavBar,
    Swiper,
    Recommend,
    Fishion,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
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
      isShow: false,
      tabOffsetTop: 0,
      isTabFix: false,
      saveY:null
    };
  },
  methods: {
    getGoods(type) {
      const _limit = this.goods[type]._limit + 10; //根据类型（type）多请求10条商品数据
      getHomeGoods(type, _limit).then(res => {
        //调用封装的请求函数
        this.goods[type].list.push(...res);
        this.goods[type]._limit += 10;
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
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControl1.currentIndex = index;
    },
    backTop() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 300);
    },
    loadMore() {
      this.getGoods(this.currentType);

      this.$refs.scroll.scroll.finishPullUp(); //解决只能刷新一次问题

      this.$refs.scroll.scroll.refresh(); //解决加载更多时的卡顿问题
    },
    swiperLoad() {
    },
    scroll(position){
      if(position.y > -1000){
        this.isShow = false
      }else if(position.y < -1000){
        this.isShow = true
      }
      this.isTabFix = -position.y > this.$refs.tabControl.$el.offsetTop - 27
    }
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
        setTimeout(() => {
          window.location.href = url + "?yes=" + t.getTime();
        }, 200);
      }
    }, 100);

    getHomeData().then(res => {
      this.banners = res[0].banners;
      this.recommends = res[0].recommends;
    });
  },
  mounted(){
    
  },
  activated(){
    this.$refs.scroll.scroll.scrollTo(0, this.saveY, 50);
    this.$refs.scroll.scroll.refresh()
  },
  deactivated(){
    this.saveY = this.$refs.scroll.scroll.y
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  beforeRouteEnter(to, from, next) {
    rfrom = from.path;
    next();
  }
};
</script>

<style  lang='css' scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  height: calc(100vh);
  overflow: hidden;
}
.fix {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 30000;
}
</style>