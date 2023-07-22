<template>
  <div class="searchTop">
    <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou"></use>
    </svg>
    <input type="text" placeholder="leo" v-model="searchKey" @keydown.enter="enterKey">
  </div>
  <div class="searchHistroy">
    <span class="searchSpan">历史</span>
    <span v-for="item in keyWordList" :key="item" class="spanKey">
      {{item}}
    </span>
    <svg class="icon" aria-hidden="true" @click="deleteHistory">
        <use xlink:href="#icon-shanchu"></use>
    </svg>
  </div>
</template>

<script>
export default {
  data(){
    return {
      keyWordList:[],
      searchKey:''//接收输入的字符串
    }
  },
  mounted(){
    // this.keyWordList = JSON.parse(localStorage.getItem('keyWordList'))
    this.keyWordList = JSON.parse(localStorage.getItem('keyWordList')) ? JSON.parse(localStorage.getItem('keyWordList')) : []
  },
  methods: {
    enterKey:function(){
      if(this.searchKey=!''){
        this.keyWordList.unshift(this.searchKey)
        // 去重
        this.keyWordList = [...new Set(this.keyWordList)]
        // 限定长度
        if(this.key)
        localStorage.setItem("keyWordList",JSON.stringify(this.keyWordList))
        this.searchKey = ''
      }
    },
    deleteHistory:function(){
      localStorage.removeItem('keyWordList')
      this.keyWordList=[]
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
    // height:1rem;
    padding: .2rem;
    .searchSpan{
      // font-size: .4rem;
      font-weight: 700;
    }
    .spanKey{
      padding:0.1rem .2rem;
      background-color: #ccc;
      border-radius: .3rem;
      margin: 0.1rem 0.2rem;
    }
    .icon{
      width: 0.5rem;
      height: 0.5rem;
      position: absolute;
      right: .2rem;
    }
  }
</style>