<template>
  <div class="searchTop">
    <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou"></use>
    </svg>
    <input type="text" placeholder="leo" v-model="searchKey" @keydown.enter="enterKey">
  </div>
  <div class="searchHistroy">
    <span class="searchSpan">历史</span>
    <span v-for="item in keyWordList" :key="item" class="spanKey" @click="searchHistory(item)">
      {{item}}
    </span>
    <svg class="icon" aria-hidden="true" @click="deleteHistory">
        <use xlink:href="#icon-shanchu"></use>
    </svg>
  </div>

  <div class="searchList" v-show="isHotShow">
      <div class="itemList" v-for="(item,i) in searchList" :key="i">
        <div class="ContentLeft" @click="updateIndex(item,i)">
          <span class="spanLeft">{{i+1}}</span>
          <div class="itemName">
            <p>{{item.name}}</p>
            <span v-for="(item1, index) in item.ar" :key="index">{{
              item1.name
            }}</span>
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

  <div class="HotList">
    <div class="itemHot">
      <div class="HotLeft">
        <span>1</span>
        <div class="HotName">
          <p>i wish</p>
          <span>content</span>
        </div>
        <div class="iconUrl">
          img
        </div>
      </div>
      <div class="HotRight">
        <span>2</span>
        <div class="HotName">
          <p>i wish</p>
          <span>content</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getSearchMusic} from '../request/api/item.js'
export default {
  data(){
    return {
      keyWordList:[],
      searchKey:'',//接收输入的字符串
      searchList:[],
      // 是否出现热搜榜单
      isHotShow:false
    }
  },
  mounted(){
    this.keyWordList = JSON.parse(localStorage.getItem('keyWordList')) ? JSON.parse(localStorage.getItem('keyWordList')) : []
  },
  methods: {
    enterKey: async function(){
      if(this.searchKey!==''){
        this.keyWordList.unshift(this.searchKey)
        // 去重
        this.keyWordList = [...new Set(this.keyWordList)]
        // 限定长度
        if(this.keyWordList.length>5){
          this.keyWordList.splice(this.keyWordList.length-1,1)
        }
        localStorage.setItem("keyWordList",JSON.stringify(this.keyWordList))
        // 发起请求
        let res = await getSearchMusic(this.searchKey)
        this.searchList = res.data.result.songs
        console.log(res);
        this.searchKey = ''
      }
    },
    deleteHistory:function(){
      // 删除搜索记录
      localStorage.removeItem('keyWordList')
      this.keyWordList=[]
    },
    searchHistory:async function(item){
      // 发起请求
        let res = await getSearchMusic(item)
        this.searchList = res.data.result.songs
        console.log(res);
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
  .searchTop{
    width: 100%;
    height:1rem;
    padding: 0 0.2rem;
    display: flex;
    align-items: center;
    position: relative;
    input{
      width:75%;
      padding: .1rem;
      margin-left: 0.4rem;
      border: none;
      border-bottom:0.02rem solid #999 ;
    }
  }
  .searchHistroy{
    width:100%;
    padding: .2rem;
    .searchSpan{
      font-weight: 700;
    }
    .spanKey{
      padding:0.1rem .2rem;
      background-color: #ccc;
      border-radius: .3rem;
      margin: 0.1rem 0.2rem;
      display:inline-block;
    }
    .icon{
      width: 0.5rem;
      height: 0.5rem;
      position: absolute;
      right: .2rem;
    }
  }
  .searchList{
    width: 100%;
    // padding-top: 0.6rem;
    padding-left:0.2rem;
    padding-right:0.2rem;
    .itemList{
      width: 100%;
      display: flex;
      height: 1.4rem;
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
            font-size: 0.24rem;
            color:#999
          }
          p{
            font-weight: 700;
            margin-bottom: .08rem;
          }
        }
        .spanLeft{
          margin-right: 0.3rem;
          display: inline-block;
          width: 0.2rem;
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
          width: 0.5rem;
          height: 0.5rem;
          fill: #999;
          margin-right: 0.3rem;
          stroke: #999;
          // stroke-width: 50;
        }
        .icon{
          fill: #999;
        }
      }
    }
  }
</style>