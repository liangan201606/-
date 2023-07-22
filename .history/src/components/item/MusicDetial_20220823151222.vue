<template>
  <div class="musicDetail">
    <div class="header">
      <div class="header"></div>
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