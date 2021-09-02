<template>
  <div class="toast">
    {{message}}
  </div>
</template>

<script>
  export default{
    props:{
      message:{
        type:String,
        default:''
      },
      show:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style  lang='css'>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    background: rgba(0, 0, 0, .75);
    color: #fff;
    z-index: 88;
    transform: translate(-50%,-50%);
    padding: 8px 10px;
    border-radius: 3px;
  }
</style>