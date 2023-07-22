<template>
  <div class="musicDetail">
    <img :src="musicList.al.picUrl" alt="" class="bgimg">
    <div class="header">
      <div class="headerLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <div class="song">
          <p class="Name">{{musicList.al.name}}</p>
          <span class="Author" v-for="item in musicList.ar" :key="item">{{item.name}}}</span>
        </div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiangyoujiantou"></use>
        </svg>
      </div>
      <div class="headerRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted(){
    console.log(this.musicList);
    console.log(this.musicList.ar);
  },
  props:['musicList']
}
</script>

<style lang="less" scoped>
.musicDetail{
  .header{
    width:100%;
    height:1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .headerLeft{
      width:40%;
      height:100%;
      margin-left: 0.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon{
        fill: white;
        width: 0.3rem;
        height: 0.3rem;
      }
      .song{
        .name{

        }
        .author{

        }
      }
    }
    .headerRight{
      .icon{
        fill:white;
      }
    }
  }
  .bgimg{
    width:100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    filter:blur(80px);
  }
}
</style>