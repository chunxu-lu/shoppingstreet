<template>
  <div>
    <cartListItem v-for="item in cartList" :key="item.id" :product="item"></cartListItem>
  </div>
</template>

<script>
import cartListItem from 'components/content/cartlistitem/CartListItem'
import { mapGetters } from 'vuex'
  export default{
    components:{
      cartListItem
    },
    computed:{
      ...mapGetters(['cartLength','cartList'])
    }
  }
</script>

<style  lang='css'>

</style>