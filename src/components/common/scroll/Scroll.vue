<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
  export default{
    data(){
      return{
        scroll:null
      }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
          pullUpLoad: true,
          observeDOM:true,    //解决无法滚动
          probeType:3,
          click:true
      }),
      this.scroll.on('scroll',position => {
        this.$emit('scroll',position)
      }),
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
      })
    }
  }
</script>

<style  lang='css' scoped>
  
</style>