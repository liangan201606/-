<template>
<div>
  <slider-left :head_color="head_color">
    <template v-slot:mainContainer>
      <slider-main :container_title_h="container_title_h">
        <template v-slot:background>
          <div class="background_color"  :class="modeType ? '' : 'night'" ></div>
        </template>

        <template v-slot:container_title>
          <div class="user_info">
            <img :src="avatarUrl" alt="" class="avatar">
            <span class="username">{{username}}</span>
          </div>
          <div class="c_t_navbar">
            <ul>
              <li class="nav">
                <div class="icon iconfont icon-yinyue"></div>
                <div class="text">本地音乐</div>
              </li>
              <li class="nav ">
                <div class="icon iconfont icon-xiazai"></div>
                <div class="text">下载管理</div>
              </li>
              <li class="nav">
                <div class="icon iconfont icon-diantai"></div>
                <div class="text">我的电台</div>
              </li>
              <li class="nav ">
                <div class="icon iconfont icon-yixianshi-"></div>
                <div class="text">我的收藏</div>
              </li>
              <li class="nav ">
                <div class="icon iconfont icon-huabankaobei-"></div>
                <div class="text">关注新歌</div>
              </li>
            </ul>
          </div>
        </template>

        <template v-slot:container_content>
          <scroll  ref="scroll"
                   :listenScroll="ifScroll"
                   :preventDefault="preventDefault"
                   :pulldown="pulldown"
                   :pullup="pullup"
                   id="wrapper" class="list-wrapper" >
            <div class="content">
              <div class="my_music">
                <navbar :title="my_music_title" :icon1="icon1" :icon2="icon2"></navbar>
                <slider-bar2></slider-bar2>
              </div>
              <div class="my_playmusic">
                <navbar :title="my_playmusic_title" :icon1="icon1" :text1="my_playmusic_text1"></navbar>
                <div class="my_playmusic_c">
                  <songs-wrapper1
                    :img=" song_wrapper1_img"
                    :text1="song_wrapper1_text1"
                    :text2="song_wrapper1_text2"
                  ></songs-wrapper1>
                  <songs-wrapper1
                    :img=" song_wrapper1_img"
                    :text1="song_wrapper1_text1"
                    :text2="song_wrapper1_text2"
                  ></songs-wrapper1>
                </div>
              </div>
              <div class="rec_songs">
                <navbar :title="rec_songs_title" :icon1="icon3"></navbar>
                <songs-wrapper1
                  v-for="(item, index) in songlist"
                  :key="index"
                  :img="item.picUrl"
                  :text1="item.name"
                  :text2="item.copywriter"
                  :id="item.id"
                ></songs-wrapper1>
              </div>
            </div>
          </scroll>
        </template>

      </slider-main>
    </template>
  </slider-left>
</div>

</template>
