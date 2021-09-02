<template>
  <div>
    <NavBar class="navbar">
      <div slot="center">购物车</div>
    </NavBar>
    <br>
    <br>
    <br>
    <CartList></CartList>
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from 'components/content/cartlist/CartList'
import CartBottomBar from 'components/content/cartbottombar/CartBottomBar'

  export default{
    components:{
      NavBar,
      CartList,
      CartBottomBar
    }
  }
</script>

<style  lang='css' scoped>
  .navbar{
    color: #fff;
    background: var(--color-tint);
  }
</style>