<template>
    <div class="swipers">
      <swiper :options="swiperOption"  v-if="banners.length">
    <!-- slides -->
    <swiper-slide v-for="item in banners" :key="item">
      <a href="https://www.vip.com/">
        <img :src="item" alt="">
      </a>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default{
    props:['banners'],
    components: {
    swiper,
    swiperSlide
  },
  created(){
    
  },
  data() {
      return {
          swiperOption: {
          autoplay: 2300,
          grabCursor: true,
          pagination: '.swiper-pagination',
          observer:true,
          observeParents:true,
          loop:true
        }
        }
      }
  }
</script>

<style  lang='css'>
  .swipers img{
    padding-top: 44px;
    width: 100vw;
  }
.swiper-pagination-bullet-active {
    opacity: 1;
    background: var(--color-tint);
}
</style>