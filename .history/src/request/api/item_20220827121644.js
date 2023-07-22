import service from "..";
// 获取歌单详情页的数据
export function getMusicItemList(data){
  return service({
    method:'GET',
    url:`/playlist/detail?id=${data}`
  })
}
// 获取歌单的所有歌曲
export function getSongList(data){
  return service({
    method:'GET',
    url:`/playlist/track/all?id=${data}&limit=20&offset=1`
  })
}
// 获取歌词
export function getSongLyric(data){
  return service({
    method:'GET',
    url: `/lyric?id=${data}`
  })
}
// 获取搜索cloudsearch?keywords=海阔天空
export function getSearchMusic(data){
  return service({
    method:'GET',
    url: `cloudsearch?keywords=${data}`
  })
}
// 获取搜索热榜
export function getHotList(){
  return service({
    method:'GET',
    url:'/search/hot/detail'
  })
}
// 获取歌单评论
export function getCommentList(data){
  return service({
    method:'GET',
    url:`/comment/playlist?id=${data}`
    // url:`comment/new?type=2&id=${data}&sortType=3`
  })
}
// 给评论点赞
export function getCommentLike(data){
  return service({
    methods:'GET',
    url:'/comment/like?id=29178366&cid=12840183&t=1&type=2'
  })
}
//发表评论
export function sendComment(){
  return service({
    method:'POST',
    url:'/comment?t=1&type=1&id=5436712&content=test'
  })
}