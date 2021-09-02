<template>
  <div class="cart-bottom-bar">
    <div class="left">
      <div class="correct" :class="{select:selectAll}" @click="checkClick">
        <img src="@/assets/img/cart/correct.svg" alt=""  v-show="selectAll" >
      </div>
      <div>
        &nbsp;<span style="line-height:40px;font-size:14px">全选</span>
      </div>
      <div>
        <span class="total">合计:{{totalPrice}}</span>
      </div>
    </div>
    <div class="right">结算</div>
  </div>
</template>

<script>
  export default{
    data() {
      return {
      }
    },
    computed:{
      totalPrice(){
        return '￥' + this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue,item) => {
          return  preValue + item.newprice * item.count
        },0)
      },
      selectAll(){
        // return !this.cartList.find(item => !item.checked)
        if(this.$store.state.cartList.length === 0) return false
        return !this.$store.state.cartList.filter(item => !item.checked).length;
      }
    },
    methods:{
      checkClick(){
        if(this.selectAll){
          this.$store.state.cartList.forEach(element => {
            element.checked = false
          });
        }else{
          this.$store.state.cartList.forEach(element => {
            element.checked = true
          });
        }
      }
    }
  }
</script>

<style  lang='css' scoped>
  .cart-bottom-bar{
    display: flex;
    height: 40px;
    background: chocolate;
  }
  .cart-bottom-bar .left{
    display: flex;
    background: #f6f6f6;
    flex: 3;
  }
  .cart-bottom-bar .right{
    background: orangered;
    flex: 1;
    text-align: center;
    line-height: 40px;
    color: #fff;
  }
  .correct{
    border:2px solid gray;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    line-height: 40px;
    margin-top: 11px;
  }
  .correct img{
    position: relative;
    width: 12px;
    top: -13px;
  }
  .total{
    margin-left: 20px;
    line-height: 40px;
  }
  .select{
    background: var(--color-tint);
  }
</style>