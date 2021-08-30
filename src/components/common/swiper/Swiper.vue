<template>
  <div class="swipers">
    <swiper :options="swiperOption" v-if="banners.length">
      <!-- slides -->
      <swiper-slide v-for="item in banners" :key="item">
        <img :src="item" alt @load="imgLoad" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: ["banners"],
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay: 2300,
        grabCursor: true,
        pagination: ".swiper-pagination",
        observer: true,
        observeParents: true,
        loop: true
      },
      isload:false
    };
  },
  methods: {
    imgLoad(){
      if(!this.isload){
        this.$emit('swiperLoad')
        this.isload = true
      }
    }
  },
};
</script>

<style  lang='css' scoped>
.swipers img {
  width: 100vw;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: var(--color-tint);
}
</style>