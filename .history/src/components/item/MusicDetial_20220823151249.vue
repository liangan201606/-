<template>
  <div class="musicDetail">
    <div class="header">
      <div class="headerLeft">
        
      </div>
      <div class="headerRight"></div>
    </div>
  </div>
</template>
<script>
export default {
  mounted(){
    console.log(this.musicList);
  },
  props:['musicList']
}
</script>

<style lang="less" scoped>

</style>