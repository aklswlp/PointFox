<template>
  <div id="headerwrapper">
    <div id="headertitle">
      <span>{{ message }}</span>
    </div>
    <div id="headerfunction">
      <router-link to="/register">
        <el-button class="funcbtn">用户注册</el-button>
      </router-link>
      <router-link to="/login">
        <el-button class="funcbtn">系统登入</el-button>
      </router-link>
      <router-link to="/work">
        <el-button class="funcbtn">工作中心</el-button>
      </router-link>
      <router-link to="/reader">
        <el-button class="funcbtn">读者信息</el-button>
      </router-link>
      <router-link to="/book">
        <el-button class="funcbtn">图书信息</el-button>
      </router-link>
      <router-link to="/cnnode">
        <el-button class="funcbtn">node论坛</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "江西软件职业技术大学",
    };
  },
};
</script>

<style>
#headertitle {
  /* background-color: #fff; */
  display: inline-block;
  color: #fff;
  font-size: 20px;
  font-weight: bolder;
  height: 60px;
  line-height: 60px;
}
#headerfunction {
  /* background-color: palegreen ; */
  display: inline-block;
  float: right;
  height: 60px;
  padding-top: 10.2px;
}
.funcbtn {
  background-color: #0a9588 !important;
  border-color: #0a9588 !important;
  color: white !important;
  margin-left: 10px !important;
}
</style>