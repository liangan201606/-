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

  <div class="search">

  </div>
</template>

<script>
import {getSearchMusic} from '../request/api/item.js'
export default {
  data(){
    return {
      keyWordList:[],
      searchKey:'',//接收输入的字符串
      searchList:[]
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
        // console.log(res);
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
</style>