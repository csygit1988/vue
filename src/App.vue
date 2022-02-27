<template>
  <div>
    <Header></Header>
    <router-view></router-view>
     <!-- v-show="$route.path=='/home'||$route.path=='/search'" -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'

export default {
  name: "MyApp",
  components: {
    Header,
    Footer,
  },
  mounted() {
      //优化性能：通知vuex发请求，获取数据，存储于仓库中,有bug
 //this.$store.dispatch("categoryList");
  },

};
</script>

<style>
</style>