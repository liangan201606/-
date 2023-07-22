<template>
  <!-- <div class="recommend">
    <div class="recommendTop">

    </div>
    <div class="recommendList">
      <div class="ListTop">
        <div class="Left">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofanganniu-copy"></use>
          </svg>
          <span>播放全部</span>
        </div>
        <div class="Right">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-a-30show_duoxuan1"></use>
          </svg>
        </div>
      </div>
      <div class="List">

      </div>
    </div>
  </div> -->
  <div class="itemMusicList">
    <div class="ListTop">
      <div class="ListLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofanganniu"></use>
        </svg>
        <span>播放全部<span>(共{{songs.length}}篇)</span></span>
      </div>
      <div class="ListRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiahao"></use>
        </svg>
      </div>
    </div>

    <div class="ListContent">
      <div class="itemList" v-for="(item,i) in songs" :key="i">
        <div class="ContentLeft" @click="playMusic(i)">
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
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>