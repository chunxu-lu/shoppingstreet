<template>
  <div>
    <NavBar class="navbar">
      <div slot="center">购物车</div>
    </NavBar>
    <br>
    <br>
    <br>
    <CartList></CartList>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from 'components/content/cartlist/CartList'

  export default{
    components:{
      NavBar,
      CartList
    }
  }
</script>

<style  lang='css' scoped>
  .navbar{
    color: #fff;
    background: var(--color-tint);
  }
</style>