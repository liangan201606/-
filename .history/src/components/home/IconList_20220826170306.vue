<template>
  <div>
    <div class="iconList">
      <div class="iconItem" @click="$router.push('/recommend')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tuijian"></use>
        </svg>
        <span>每日推荐</span>
      </div>

      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhibo"></use>
        </svg>
        <span>私人FM</span>
      </div>

      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gedan"></use>
        </svg>
        <span>歌单</span>
      </div>

      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-paihangbang-01"></use>
        </svg>
        <span>排行榜</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'IconList'
}
</script>

<style lang="less" scoped>
  .iconList{
    width: 100%;
    height: 2rem;
    margin-top: .2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .iconItem{
      width: 25%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon{
        width: 1rem;
        height: 1rem;
      }
    }
  }
</style>