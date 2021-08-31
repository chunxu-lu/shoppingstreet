<template>
  <div class="detail-bottom">
    <div class="item">
      <div>
        <img src="@/assets/img/detail/serve.svg" alt="">
      </div>
      <div>
        <span>客服</span>
      </div>
    </div>
    <div class="item">
      <div>
        <img src="@/assets/img/detail/shop.svg" alt="">
      </div>
      <div>
        <span>店铺</span>
      </div>
    </div>
    <div class="item">
      <div>
        <img src="@/assets/img/detail/collect.svg" alt="">
      </div>
      <div>
        <span>收藏</span>
      </div>
    </div>
    <div class="car">
      <span>
        加入购物车
      </span>
    </div>
    <div class="buy">
      <span>
        购买
      </span>
    </div>
  </div>
</template>

<script>
  export default{

  }
</script>

<style  lang='css' scoped>
  .detail-bottom{
    width: 100%;
    display: flex;
    height: 49px;
    background: #fff;
    z-index: 99999999;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .detail-bottom img{
    width: 26px;
    height: 26px;
  }
  span{
    text-align: center;
  }
  .item{
    flex: 1;
    text-align: center;
  }
  .car{
    flex: 3;
    line-height: 49px;
    color: #000;
    background: yellow;
    text-align: center;
  }
  .buy{
    flex: 2;
    line-height: 49px;
    color: #fff;
    background: var(--color-tint);
    text-align: center;
  }
</style>