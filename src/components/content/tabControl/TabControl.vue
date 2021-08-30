<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="item.index"
     :class="{activeClass:index === currentIndex}" @click="itemClick(index)" class="tab-control-item">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        currentIndex:0
      }
    },
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style  lang='css'>
  .tab-control{
    display: flex;
    font-size: 14px;
    z-index: 100;
    background: #fff;
  }
  .tab-control-item{
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .activeClass{
    color: var(--color-high-text);
  }
  .activeClass span{
    display: block;
    border-bottom: 3px solid var(--color-tint);
    transition: all .2333s ease-in-out;
  }
</style>