<template>
  <div class="musicDetail">
    <div class="header">
      <div class="headerLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <div class="song">

        </div>
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