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
import {getLoginUser} from '../router/index.js'
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
    if(res.data.code===200){
      this.$store.commit('updataIsLogin',true)
      this.$store.commit('updataToken',res.data.token)
      // 登录成功立即获取用户详情 
      let result = await getLoginUser(res.data.account.id)
      console.log(result);
      // 登录成功跳转个人中心页面
      this.$router.push('/infoUser')
    }else{
      alert('手机号码或密码错误')
      this.password = ''
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