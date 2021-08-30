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

    <Swiper class="swiper" :banners="topImgs"></Swiper>

    <GoodInfo
          :coll="coll"
          :tit="tit"
          :newprice="newprice"
          :oldprice="oldprice"
          :sellcount="sellcount"
        ></GoodInfo>

        <ShopInfo :shopInfo="shopInfo"></ShopInfo>
        <br />
    <br /><br />
    <br /><br />
    <br /><br />
    <br />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Swiper from "components/common/swiper/Swiper";
import GoodInfo from "components/content/goodinfo/GoodInfo";
import ShopInfo from "components/content/shopinfo/ShopInfo";

import { getDetail } from "network/detail";
import { Shop } from "network/detail.js";
export default {
  components: {
    NavBar,
    Swiper,
    GoodInfo,
    ShopInfo
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
      shopInfo: {}   //要按照类型传默认{}，如果默认null会报错
    };
  },
  created() {
    this.id = this.$route.params.id,
      getDetail(this.id).then(res => {
          this.topImgs = res[0].itemInfo.topImgs,
          this.tit = res[0].itemInfo.tit,
          this.newprice = res[0].itemInfo.newprice,
          this.oldprice = res[0].itemInfo.oldprice,
          this.sellcount = res[0].itemInfo.sellcount,
          this.coll = res[0].itemInfo.coll
          // 店铺信息
          this.shopInfo = new Shop(res[0].itemInfo);
      });
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style  lang='css' scoped>
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