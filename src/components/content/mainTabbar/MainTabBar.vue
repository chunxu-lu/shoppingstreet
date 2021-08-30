<template>
  <tab-bar class="tab-bar">
      <TabBarItem path="/home" activeColor="deeppink">
        <img slot="item-icon" src="@/assets/img/tabbar/home1.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/home2.svg" alt="">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category" activeColor="deeppink">
        <img slot="item-icon" src="@/assets/img/tabbar/category1.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/category2.svg" alt="">
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart" activeColor="deeppink">
        <img slot="item-icon" src="@/assets/img/tabbar/shopcart1.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/shopcart2.svg" alt="">
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile" activeColor="deeppink">
        <img slot="item-icon" src="@/assets/img/tabbar/profile1.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/profile2.svg" alt="">
        <div slot="item-text">我的</div>
      </TabBarItem>
  </tab-bar>
</template>

<script>
import TabBarItem from 'components/common/tabbar/TabBarItem'
import TabBar from 'components/common/tabbar/TabBar'
  export default{
    components:{
      TabBarItem,TabBar
    }
  }
</script>

<style  lang='css' scoped>

</style>