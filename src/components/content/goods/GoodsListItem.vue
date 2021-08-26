<template>
  <div class="goods-item">
    <div @click="goodsclick()">
      <img :src="goodsItem.imgUrl" alt />
      <div>
        <div class="head">
          <p>时尚潮流女装春夏限定款网红爆款</p>
        </div>
        <div class="center">
          <span class="price">￥998</span>
          <span class="collect-img">
            <img src="@/assets/img/home/collect.svg" alt />
          </span>
          <span class="collect">66.00</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    goodsclick() {
      this.$router.push("/detail/"+this.goodsItem.id);

    }
  }
};
</script>

<style  lang='css'>
.goods-item {
  padding-bottom: 30px;
  width: 48%;
  font-size: 15px;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.price {
  color: red;
}
.collect-img img {
  width: 16px;
  margin-left: 5px;
  position: relative;
  top: 1.5px;
}
.center {
  text-align: center;
}
.head {
  padding: 5px;
}
</style>