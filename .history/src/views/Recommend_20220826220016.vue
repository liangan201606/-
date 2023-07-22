<template>
  <div class="recommend">
    <div class="Header">
      <img :src="recommendList.al.picUrl" alt="">
      <svg class="icon" aria-hidden="true" @click="$router.back()">
          <use xlink:href="#icon-zuojiantou"></use>
      </svg>
    </div>
    <div class="ListTop">
      <div class="ListLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofanganniu"></use>
        </svg>
        <span>播放全部</span>
      </div>
      <div class="ListRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-30show_duoxuan1"></use>
        </svg>
      </div>
    </div>

    <div class="ListContent">
      <div class="itemList" v-for="(item,i) in recommendList" :key="i">
        <div class="ContentLeft" @click="updateIndex(item,i)">
          <span class="spanLeft">{{i+1}}</span>
          <div class="itemName">
            <p>{{item.name}}</p>
            <span v-for="(item1, index) in item.ar" :key="index">{{
              item1.name
            }}</span>
            <span>---{{item.al.name}}</span>
          </div>
        </div>
        <div class="ContentRight">
          <svg class="iconMv" aria-hidden="true" v-if="item.mv !=0">
            <use xlink:href="#icon-shipin"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-a-31liebiao1"></use>
          </svg>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import {getRecommed} from '../request/api/home.js'
import {getLoginStatus}  from '../request/api/home.js'
export default {
  data(){
    return{
      recommendList:[]
    }
  },
  mounted() {
    // 渲染判断关键词数组是否为空 如果为空则给其赋值
    this.recommendList = JSON.parse(localStorage.getItem('recommendList')) ? JSON.parse(localStorage.getItem('recommendList')) : [],
    this.RecommendList()
  },
  methods:{
    RecommendList:async function(){
      const result = await getLoginStatus()
      console.log(result)
      if(result.data.data.code === 200){
        let res = await getRecommed()
        if(res.data.code === 200){
          this.recommendList = res.data.data.dailySongs
          localStorage.setItem("recommendList",JSON.stringify(this.recommendList))
        }
        console.log('--------');
        console.log(res);
      }
    },
    updateIndex:function(item){
      // 把歌曲放在歌单列表中
      this.$store.commit("pushSongList",item)
      // 获取歌曲对应的下标 播放歌曲
      this.$store.commit('updateSongListIndex',this.$store.state.songList.length-1)
    }
  }
}
</script>

<style lang="less" scoped>
.recommend{
  width:100%;
  height: 500px;
  padding:20px 10px ;
  margin-top: 10px;
  background-color:#fff ;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  .Header{
    width: 100%; 
    height: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
  }
  .ListTop{
    width: 100%;
    height: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .ListLeft{
      width: 150px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon{
        stroke: #333333;
        stroke-width: 20;
      }
      span{
        font-weight: 700;
        span{
          font-weight: 400;
          font-size: 12px;
          color:#999
        }
      }
    }
    .ListRight{
      .icon {
        width: 0.5rem;
        height:0.5rem;
        margin-right: 5px;
      }

    }
  }
  .ListContent{
    width: 100%;
    padding-top: 30px;
    .itemList{
      width: 100%;
      display: flex;
      height: 70px;
      justify-content: space-between;
      align-items: center;
      .ContentLeft{
        // width: 85%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .itemName{
          span{
            font-weight: 400;
            font-size: 12px;
            color:#999
          }
          p{
            font-weight: 700;
            margin-bottom: 4px;
          }
        }
        .spanLeft{
          margin-right: 15px;
          display: inline-block;
          width: 10px;
          text-align: center;
        }
      }
      .ContentRight{
        // width: 20%;
        // height: 100%;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        // position: relative;
        .iconMv{
          width: 25px;
          height: 25px;
          fill: #999;
          margin-right: 15px;
          stroke: #999;
          // stroke-width: 50;
        }
        .icon{
          fill: #999;
        }
      }
    }
    
  }
}
</style>