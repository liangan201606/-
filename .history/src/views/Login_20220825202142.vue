<template>
  <div class="login">
    <div class="loginTop">

    </div>
    <div class="loginContent">
      <input type="text" placeholder="手机号码登录" class="Phone">
      <input type="passworld" placeholder="输入密码" class="Password">
      <button>手机号码登录</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.login{
  background-color: #fff;
  .loginTop{
    width: 100%;
    height:4rem;
  }
  .loginContent{
    width: 100%;
    height: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
      width: 70%;
      height: 1rem;
      margin-top:0.6rem ;
      border-radius: 0.5rem;
      color:#fff;
      border:none;
      background-color:red;
    }
    .Phone{
      width: 50%;
      height: 1rem;
      border:none;
    }
    .Password{
      width: 50%;
      height:1rem;
      margin-top:0.6rem ;
      border:none;
    }

  }
}
</style>