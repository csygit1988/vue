<template>
  <div>
    <TypeNav></TypeNav>
    <List></List>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import List from "./List";
import Recommend from "./Recommend";
import Rank from './Rank';
import Like from './Like';
import Floor from './Floor';
import Brand from './Brand';

import {mapState} from 'vuex';
export default {
  name: "MyHome",
  components: {
    List,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
      //派发action ,获取floor组件的数据
      this.$store.dispatch('getFloorList');

  },
    computed:{
    ...mapState({
        floorList:state=>state.home.floorList,
    })
  },
  
};
</script>

<style lang="less" scoped>
</style>