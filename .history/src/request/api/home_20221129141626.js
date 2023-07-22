import service from ".."
// 获取首页轮播图的数据
export function getBanner(){
  return service({
    methods: "GET",
    url:'/banner?type=2'
  })
}
// 
export function getMusicList(){
  return service({
    method:'GET',
    url:'/personalized?limit=10'
  })
}
// 登录
export function getPhoneLogin(data){
  return service({
    method:'GET',
    url:`/login/cellphone?phone=${data.phone}&password=${data.password}`
  })
}
// 获取用户详情
export function getLoginUser(data){
  return service({
    method:'GET',
    url:`/user/detail?uid=${data}`
  })
}
// 退出登录
export function getLoginOut(){
  return service({
    method:'GET',
    url:'/logout'
  })
}
// 登录状态
export function getLoginStatus(){
  return service({
    method:'GET',
    url:'/login/status'
  })
}
// 获取每日推荐
export function getRecommed(){
  return service({
    method:'GET',
    // url:'/history/recommend/songs/detail?date=2022-08-26'
    url:'/recommend/songs'
   })
}