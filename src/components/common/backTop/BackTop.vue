<template>
  <div class="back-top">
    <img src="@/assets/img/common/backtop.svg" alt="">
  </div>
</template>

<script>
  export default{

  }
</script>

<style  lang='css'>
  .back-top{
    position: fixed;
    right: 8px;
    bottom: 55px;
    z-index: 100;
  }
  .back-top img{
    width: 43px;
    height: 43px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 2px 2px 1px rgba(100,100,100,.4);
  }
</style>