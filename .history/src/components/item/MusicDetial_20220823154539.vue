<template>
  <div class="musicDetail">
    <img :src="musicLis.al.picUrl" alt="" class="bgimg">
    <div class="header">
      <div class="headerLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <div class="song">
          <p class="Name">{{musicList.al.name}}</p>
          <!-- <span class="Author" v-for="item in musicLis.ar" :key="item">{{item.name}}}</span> -->
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon{
        // fill: white;
      }
      .song{
        .name{

        }
        .author{

        }
      }
    }
    .headerRight{

    }
  }
  .bgimg{
     width:100%;
    height: 11rem;
    position: fixed;
    z-index: -1;
    filter:blur(30px);
  }
}
</style>