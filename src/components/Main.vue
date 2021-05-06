<template>
  <div id="mainWrapper">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>登入系统</span>
        <el-button style="float: right; padding: 3px 0" type="text"
          >忘记密码</el-button
        >
      </div>
      <div class="text item">
        <el-input id="username" v-model="username"></el-input>
        <el-input id="password" v-model="password" show-password></el-input>
      </div>
      <el-button id="loginSystem"> 登录 </el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
  margin: 0 auto;
}
#loginSystem {
  background-color: #0a9588;
  border-color: #0a9588;
  color: white;
  width: 150px;
}
#password {
  margin: 10px 0px;
}
#loginSystem {
  display: block;
  margin: 0 auto;
}
</style>

