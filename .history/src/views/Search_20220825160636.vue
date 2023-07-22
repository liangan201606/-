<template>
  <div class="searchTop">
    <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zuojiantou"></use>
    </svg>
    <input type="text" placeholder="leo">
  </div>
  <div class="seaarchHistroy">
    <span>历史</span>
    <span></span>
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  }
}
</script>

<style lang="less" scoped>
  .searchTop{
    width: 100%;
    height:1rem;
    padding: 0 0.2rem;
    display: flex;
    align-items: center;
    input{
      width:75%;
      padding: .1rem;
      margin-left: 0.4rem;
      border: none;
      border-bottom:0.02rem solid #999 ;
    }
  }
</style>