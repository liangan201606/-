<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe :loop="false" :width="150" :show-indicators="false" class="mySwipe">
        <van-swipe-item v-for="item in state.result" :key="item">
          <router-link :to="{path:'/itemMusic',query:{id:item.id}}">
            <img :src="item.picUrl" alt="">
            <span class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-a-24gl-play1"></use>
              </svg>
              {{changeCount(item.playCount)}}
            </span>
            <span class="name">{{item.name}}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { getMusicList } from '@/request/api/home';
import { onMounted,reactive } from 'vue';
export default {
  name:'MusicList',
  setup() {
    const state  = reactive({
      result:[]
    })
    onMounted(async ()=>{
      // 
      let res = await getMusicList()
      console.log(res);
      state.result = res.data.result
    })
    const changeCount = function(num){
      if(num>=100000000){
        return (num/100000000).toFixed(1)+'亿'
      }else if(num>=10000){
        return (num/10000).toFixed(1)+'万'
      }
    }
    return { state ,changeCount};
  }
}
</script>

<style lang="less" scoped>
  .musicList{
    width: 100%;
    height: 5rem;
    padding: 0.2rem;
    .musicTop{
      width: 100%;
      height: 0.6rem;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.2rem;
      .title{
        font-size: 0.4rem;
        font-weight: 900;
      }
      .more{
        border: 1px solid #ccc;
        text-align: center;
        line-height: 0.6rem;
        padding: 0 0.2rem;
        border-radius: 00.4rem;
      }
    }
    .musicContent{
      width: 100%;
      height: 5rem;
      .mySwipe{
        height: 100%;
        position: relative;
        .van-swipe-item{
          padding-right:00.2rem ;
          // height: 3.8rem;
          img{
            width: 100%;
            height: 3rem;
            border-radius: 0.2rem;
          }
          .playCount{
            position: absolute;
            z-index: 100;
            right: 0.3rem;
            color: white;
            margin-top: 0.06rem;
            // text-align: center;
            .icon {
              width: 0.5rem;
              height: 0.5rem;
              vertical-align: middle;
            }
          }
          .name{
            bottom: 0;
          }
        }
      }
    }
  }
</style>