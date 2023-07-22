import { createStore } from 'vuex'
// import {getSongLyric} from '../request/api/item.js'
import { getSongLyric } from '../request/api/item.js'
export default createStore({
  state: {
    // 底部播放组件获取到的歌曲信息
    songList:[{
      al: {
        id: 89039055,
        name: "雨爱抖音版",
        pic: 109951164966568500,
        picUrl: "https://p1.music.126.net/2f6UgY8Jc0Dy6jufMdIZeQ==/109951164966568495.jpg",
        pic_str: "109951164966568495"
      },
      // 歌曲对应的id
      id: 1446137141,
      name: "雨爱（抖音版）",
      ar:[{name: "灏灏灏仔"}]
    }],
    //默认下标为0
    songListIndex:0,
    // 全局布尔值判断播放
    isBtnShow:true,
    detailShow:false,//歌曲详情页的显示
    // 歌词
    lyricList:{},
    // 当期时间
    currentTime:0,
    // 歌曲总时长
    duration:0,
    // 是否登录判断
    isLogin:false,
    // 是否需要显示底部组件
    isFootMusic:true
  },
  getters: {
  },
  mutations: {
    updateIsBtnShow:function(state,value){
      state.isBtnShow = value
    },
    updateSongList:function(state,value){
      state.songList = value
    },
    updateSongListIndex:function(state,value){
      state.songListIndex=value
    },
    updateDetailShow:function(state){
      state.detailShow=!state.detailShow
      // console.log(state.detailShow);
    },
    updateLyricList:function(state,value){
      state.lyricList = value
    },
    updataCurrentTime:function(state,value){
      state.currentTime = value
      // console.log(state.currentTime);
    },
    updataduration:function(state,value){
      state.duration = value
    },
    pushSongList:function(state,value){
      state.songList.push(value)
    }
  },
  actions: {
    // 异步ajax请求
    getLyric:async function(context,value){
      let res = await getSongLyric(value)
      context.commit("updateLyricList",res.data.lrc)
      console.log(res);
    },
    // 异步获取
    getLogin:async function(context,value){
      let res = await getPhoneLogin()
    }
  },
  modules: {
  }
})
