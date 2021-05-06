<template>
  <div id="app">
     <el-container>
       <el-header id="headerBook"><Header/></el-header>
       <el-main id="mainBook">
         <!-- <Main/> -->
         <router-view>
           
         </router-view>
         </el-main>
       <el-footer id="footerBook"><Footer/></el-footer>
     </el-container>
  </div>
</template>

<script>
//导入组件

 import Header from './components/Header.vue';
 import Main from './components/Main.vue';
 import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>


<style>
*{
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

#headerBook{
  background-color: yellowgreen;
}
/* #mainBook{
  background-color: #244152;
} */
/* #footerBook{
  background-color: yellow;
} */

</style>
