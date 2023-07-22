<template>
  <div>
    <ItemMusicTop :playList="state.playList"></ItemMusicTop>
    <ItemMusicList :songs="state.songs" :subscribedCount="state.playList.subscribedCount"></ItemMusicList>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import {  getMusicItemList } from '@/request/api/item';
import {getSongList} from '@/request/api/item'
import ItemMusicTop from '@/components/item/ItemMusicTop.vue';
import ItemMusicList from '@/components/item/ItemMusicList.vue';
export default {
  name:'ItemMusic',
  setup(){
    const state = reactive({
      playList:[],
      songs:[],
      id
    })
    onMounted(async () => {
      // 获取对应的歌单的id
        let id = useRoute().query.id
        // console.log(id);
        // 获取歌单详情
        let res  = await getMusicItemList(id)
        state.playList = res.data.playlist
        //获取歌单的歌曲
        let result = await getSongList(id)
        // console.log(result);
        state.songs = result.data.songs
        // 防止页面刷新，数据丢失 将数据保存到sessionStorage
        // console.log(state.playList);
        sessionStorage.setItem('itemDetail',JSON.stringify(state))
    })
    return {state}
  },
  components:{
    ItemMusicTop,
    ItemMusicList
  }
}
</script>

<style>

</style>