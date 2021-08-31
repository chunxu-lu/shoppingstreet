<template>
  <div class="cartitem">
    <div class="product">
      <div class="correct">
        <img src="@/assets/img/cart/correct.svg" alt="">
      </div>
      <div class="left">
        <img :src="product.image" alt="">
      </div>
      <div class="right">
        <div>{{product.tit}}</div>
        <div class="spans">
          <span style="color:orange">￥{{product.newprice}}</span>
          <span style="font-size:20px">×{{product.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props:{
      product:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style  lang='css' scoped>
  .correct{
    margin-top: 42px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--color-tint);
    color: #fff;
  }
  .correct img{
    width: 15px;
  }
  .left{
    margin-left: 5px;
  }
  .product{
    display: flex;
    text-align: center;
    height: 125px;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    padding: 10px 0;
    background: #f2f2f2;
  }
  .product .left img{
    height: 100px;
    border-radius: 3px;
  }
  .right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    margin-left: 50px;
  }
  .spans{
    display: flex;
    justify-content: space-between;
  }
  .cartitem{
    margin-top: -11px;
  }
</style>