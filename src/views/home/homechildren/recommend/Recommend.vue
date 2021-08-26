<template>
  <div class="recommends">
    <div  v-for="item in recommends" :key="item.title" class="recommends-item">
      <a href="https://www.vip.com/">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default{
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      
    }
  }
</script>

<style  lang='css'>
  .recommends{
    padding-top: 3px;
    display: flex;
  }
  .recommends img{
    width: 80px;
    border-radius: 50%;
    margin-bottom: 8px;
  }
  .recommends-item{
    flex: 1;
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 6px solid #eee;
    font-size: 13px;
  }
</style>