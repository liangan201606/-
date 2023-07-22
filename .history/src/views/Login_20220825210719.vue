<template>
  <div class="login">
    <div class="loginTop">
      <img src="../assets/网易云音乐-01.svg" alt="">
    </div>
    <div class="loginContent">
      <input type="text" placeholder="手机号码登录" class="Phone" v-model="phone">
      <input type="passworld" placeholder="输入密码" class="Password" v-model="password">
      <button @click="Login">手机号码登录</button>
    </div>
  </div>
</template>

<script>
export default {
 data(){
  return {
    phone:'',
    password:''
  }
 },
 methods: {
  Login:async function(){
    // 提交参数
    let res = await this.$store.dispatch('getLogin',{phone:this.phone,password:this.password})
    console.log(res);
    if(res.code===200){
      this.$store.commit('<script>
  import SliderLeft from 'components/slider-left/slider-left'
  import SliderMain from 'base/slider/slider-main'
  import SliderBar2 from 'base/slider/slider-bar2'
  import SongsWrapper1 from 'base/songs/songs-wrapper1'
  import Navbar from 'base/navbar/navbar'
  import Scroll from 'base/scroll/scroll'
  import {mapGetters, mapMutations} from 'vuex'
  import {getDailySonglist} from 'api/api'
  export default {
    name: 'me',
    data() {
      return {
        songlist:[],
        ifScroll:true,
        preventDefault:false,
        pulldown: true,
        pullup:true,
        container_title_h:'180px',
        head_color:"dark",
        song_wrapper1_img: require('common/image/FM.jpg'),
        song_wrapper1_text1:'全部已播歌曲全部已播歌曲全部已播歌曲全部已播歌曲全部已播歌曲',
        song_wrapper1_text2:'2首',
        my_music_title:'我的音乐',
        icon1:'icon-arrow-right',//右箭头
        icon2:'icon-airudiantubiaohuizhi-zhuanqu_qinzichengchang',
        icon3:'icon-cross', //×
        my_playmusic_title:'最近播放',
        my_playmusic_text1:'更多',
        rec_songs_title:'推荐歌单'
      }
    },
    components: {
      SliderLeft,
      SliderMain,
      SliderBar2,
      SongsWrapper1,
      Navbar,
      Scroll
    },
    computed: {
      ...mapGetters([
        'modeType',
        'userId',
        'username',
        'avatarUrl',
        'isLogin'
      ])
    },
    created() {
      this._getDailySonglist()
    },
    methods: {
      _getDailySonglist(){
        getDailySonglist().then(res => {
          this.songlist = res.data.recommend
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      },
      ...mapMutations({
        setModeType: 'SET_MODE_TYPE',
      })
    }
  }
</script>')
      // 登录成功跳转个人中心页面
      this.$router.push('/infoUser')
    }
  }
 },
}
</script>

<style lang="less" scoped>
.login{
  background-color: #fff;
  .loginTop{
    width: 100%;
    height:6rem;
    display:flex;
    justify-content: center;
    align-items: center;
    img{
      width: 80%;
      height: 100%;
    }
  }
  .loginContent{
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
      width: 70%;
      height: 2rem;
      margin-top:0.6rem ;
      border-radius: 0.5rem;
      font-size: 0.4rem;
      color:#fff;
      border:none;
      background-color:red;
    }
    .Phone{
      width: 50%;
      height: 1.5rem;
      font-size: 0.4rem;
      border:none;
    }
    .Password{
      width: 50%;
      height:1.5rem;
      font-size: .4rem;
      margin-top:0.6rem ;
      border:none;
    }

  }
}
</style>