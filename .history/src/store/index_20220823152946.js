import { createStore } from 'vuex'

export default createStore({
  state: {
    // 底部播放组件获取到的歌曲信息
    songList:[{
      al:{
        id: 149869205,
        name: "故事感",
        pic: 109951167794826620,
        picUrl: "https://p1.music.126.net/MW3DKyqMJEDCXC3g32e7zQ==/109951167794826630.jpg",
        pic_str: "109951167794826630"
      },
      ar:{

      }
    }],
    // 对应歌曲的id
    songListIndex:0,
    // 全局布尔值判断播放
    isBtnShow:true,
    detailShow:false,//歌曲详情页的显示
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
    },
    updateDetailShow:function(state){
      state.detailShow=!state.detailShow
    }
  },
  actions: {
  },
  modules: {
  }
})
