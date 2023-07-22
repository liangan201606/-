import { createStore } from 'vuex'

export default createStore({
  state: {
    // 播放列表
    songList:[{
      al:{
        id: 35438746,
        name: "在你的身边",
        pic: 109951163191178430,
        picUrl: "https://p1.music.126.net/AYNBdRxJ8EdZo4xFjp7b4Q==/109951163191178425.jpg",
        pic_str: "109951163191178425"
      },
      id: 475479888
    }],
    songListIndex:0,
    // 全局布尔值判断播放
    isBtnShow:true,
    
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
      console.log(state.songListIndex);
    }
  },
  actions: {
  },
  modules: {
  }
})
