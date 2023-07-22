<template>
  <div class="musicDetail">
    <img :src="musicList.al.picUrl" alt="" class="bgimg">
    <div class="header">
      <div class="headerLeft">
        <svg class="icon" aria-hidden="true" @click="">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <div class="song">
          <p class="Name">{{musicList.al.name}}</p>
          <span class="Author" v-for="item in musicList.ar" :key="item">{{item.name}}}</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiangyoujiantou"></use>
          </svg>
        </div>
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
    margin-top: .3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .headerLeft{
      width:35%;
      height:100%;
      margin-left: 0.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon{
        fill: white;
      }
      .song{
        .Name{
          color:white;
        }
        .Author{
        }
        .icon{
          width: 0.3rem;
          height: 0.3rem;
          margin-left: 0.2rem;
        }
      }
    }
    .headerRight{
      .icon{
        fill:white;
        width: 0.6rem;
        height: 0.6rem;
        margin-right: 0.4rem;
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