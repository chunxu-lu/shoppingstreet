<template>
  <div>
    <NavBar style="position:fixed;z-index:999999;background-color:white;width:100%;">
      <div slot="left" @click="goBack">
        <img class="left-img" src="@/assets/img/detail/goback.svg" alt />
      </div>

      <div slot="center" class="titles">
        <span
          v-for="(title,index) in titles"
          :class="{active:currentIndex === index}"
          :key="title"
          class="titles-item"
          @click="titleClick(index)"
        >{{title}}</span>
      </div>
    </NavBar>
    <br />
    <br />
    <Scroll ref="scroll" class="content" @scroll="scroll">
      <Swiper class="swiper" @swiperLoad="swiperLoad" :banners="topImgs"></Swiper>

      <GoodInfo
        :coll="coll"
        :tit="tit"
        :newprice="newprice"
        :oldprice="oldprice"
        :sellcount="sellcount"
      ></GoodInfo>

      <ShopInfo :shopInfo="shopInfo"></ShopInfo>

      <DetailImg ref="params"></DetailImg>

      <div class="rate">
        商品评论
        <hr />商品评论
        <hr />商品评论
        <hr />商品评论
        <hr />商品评论
        <hr />商品评论
        <hr />商品评论
        <hr />商品评论
        <hr />商品评论
        <hr />商品评论
        <hr />商品评论
        <hr />商品评论
        <hr />
      </div>

      <h3 style="text-align:center">商品推荐</h3>
      <GoodsList :goods="recommends" ref="recommends"></GoodsList>
      <br />
      <br />
    </Scroll>
    <DetailBottom @addCart="addCart"></DetailBottom>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Swiper from "components/common/swiper/Swiper";
import GoodInfo from "components/content/goodinfo/GoodInfo";
import ShopInfo from "components/content/shopinfo/ShopInfo";
import DetailImg from "components/content/detailimg/DetailImg";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import DetailBottom from "components/content/detailbottom/DetailBottom";

import { getDetail, getRecommend } from "network/detail";
import { Shop } from "network/detail.js";
export default {
  components: {
    NavBar,
    Swiper,
    GoodInfo,
    ShopInfo,
    DetailImg,
    GoodsList,
    Scroll,
    DetailBottom
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        }
        // Some Swiper option/callback...
      },
      id: null,
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
      topImgs: [],
      tit: "",
      newprice: 0,
      oldprice: 0,
      sellcount: 0,
      coll: 0,
      shopInfo: {}, //要按照类型传默认{}，如果默认null会报错
      recommends: [],
      themeTopYs: []
    };
  },
  created() {
    (this.id = this.$route.params.id),
      getDetail(this.id).then(res => {
        (this.topImgs = res[0].itemInfo.topImgs),
          (this.tit = res[0].itemInfo.tit),
          (this.newprice = res[0].itemInfo.newprice),
          (this.oldprice = res[0].itemInfo.oldprice),
          (this.sellcount = res[0].itemInfo.sellcount),
          (this.coll = res[0].itemInfo.coll);
        // 店铺信息
        this.shopInfo = new Shop(res[0].itemInfo);
      });

    getRecommend().then(res => {
      this.recommends = res;
    });

    
  },
  mounted() {},
  updated() {
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$refs.scroll.scroll.scrollTo(0,-this.themeTopYs[index],300)
    },
    goBack() {
      this.$router.back();
    },
    scroll(position) {
      let positionY = -position.y
      let length = this.themeTopYs.length
      for(let i = 0;i<length;i++){
        if(this.currentIndex != i && (i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])||(i==length-1 && positionY >= this.themeTopYs[i])){
          this.currentIndex = i
        }
      }
    },
    swiperLoad(){
      this.themeTopYs=[]
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop - 30)
      this.themeTopYs.push(document.querySelector('.rate').offsetTop - 50)  //非组件元素不能用ref获取
      this.themeTopYs.push(this.$refs.recommends.$el.offsetTop - 80)
      console.log(this.themeTopYs);
    },
    addCart(){
      const product = {}
      product.image = this.topImgs[0]
      product.tit = this.tit
      product.newprice = this.newprice
      product.id = this.id
      this.$store.dispatch('addCart',product)
    }
  }
};
</script>

<style  lang='css' scoped>
.content {
  height: calc(100vh - 44px);
  z-index: 400;
}
.titles-item {
  font-size: 13.5px;
  padding: 0 5px;
}
.active {
  color: var(--color-tint);
}
.left-img {
  width: 22px;
  margin-top: 10px;
  margin-left: 10px;
}
</style>