<template>
  <div>
    <div class="up">
      <div class="up-left">
        <img :src="shopInfo.logo" alt />
      </div>
      <div class="up-right">{{shopInfo.name}}</div>
    </div>
    <div class="down">
      <div class="down-l">
        <div class="down-ll">
          {{shopInfo.sells}}万
          <div style="font-size:12px">总销量</div>
        </div>

        <div class="down-lr">
          {{shopInfo.goodsCount}}
          <div style="font-size:12px">全部宝贝</div>
        </div>
      </div>
      <div class="down-r">
        <div class="down-r-item">
          <span>描述相符</span>
          <span style="margin:0 10px;color:green">{{shopInfo.score1}}</span>
          <span style="background-color:green;color:white">低</span>
        </div>
        <div class="down-r-item">
          <span>价格合理</span>
          <span style="margin:0 10px;color:red">{{shopInfo.score2}}</span>
          <span style="background-color:red;color:white">高</span>
        </div>
        <div class="down-r-item">
          <span>质量满意</span>
          <span style="margin:0 10px;color:green">{{shopInfo.score3}}</span>
          <span style="background-color:green;color:white">低</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["shopInfo"],
  data() {
    return {};
  }
};
</script>

<style  lang='css' scoped>
.up {
  display: flex;
  align-items: center;
}
.up img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 5px 20px 0 8px;
  border: 2px solid #eee;
}
.down {
  margin-top: 20px;
  display: flex;
  padding-bottom: 20px;
  border-bottom: 3px solid #eee;
}
.down-l {
  display: flex;
  flex: 1;
  border-right: 1px solid gray;
  text-align: center;
  justify-content: space-around;
  align-items: center;
}

.down-r {
  flex: 1;
}
.down-r-item{
  font-size: 13px;
  margin-left: 30px;
}
.down-r-item:nth-child(2){
  padding: 5px 0;
}
</style>