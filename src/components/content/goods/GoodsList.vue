<template>
  <div>
    <div class="goods">
      <GoodsListItem  v-for="(item,index) in goods" :key="item.index" :goods-item="item"></GoodsListItem>
    </div>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  export default{
    components:{
      GoodsListItem
    },
    props:{
      goods:Array,
      default(){
        return []
      }
    },
    methods:{
      
    }
  }
</script>

<style  lang='css'>
  .goods{
    display: flex;
    flex-wrap: wrap;
    padding-top: 10px;
    justify-content: space-around;
  }
</style>