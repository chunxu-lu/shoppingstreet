<template>
  <div>
    <br>
    <div class="tit">
      {{tit}}
    </div>
    <div>
      <span style="font-size:30px;color:deeppink;">￥{{newprice}}</span>
      <span style="text-decoration: line-through">￥{{oldprice}}</span>
      <span style="background-color:deeppink;color:white;border-radius:5px;padding:2px;position:relative;top:-8px;left:10px">活动价</span>
    </div>
    <div class="sellInfo" >
      <span>销量{{sellcount}}</span>
      <span>收藏{{coll}}人</span>
      <span>72小时发货</span>
    </div>
    <div class="sellInfo" style="border-bottom:3px solid #eee">
      <span>
          <img src="./right.svg" alt="">
          退货补运费
      </span>
      <span>
          <img src="./right.svg" alt="">
          全国包邮
      </span>
      <span>
          <img src="./right.svg" alt="">
          7天无理由退货
      </span>
    </div>
  </div>
</template>

<script>
  export default{
    props:['tit','newprice','oldprice','sellcount','coll']
  }
</script>

<style  lang='css' scoped>
  .sellInfo{
    font-size: 11px;
    display: flex;
    justify-content: space-between;
    padding: 15px 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid #eee;
    width: 100%;
  }
  .sellInfo img{
    width: 12px;
  }
</style>