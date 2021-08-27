<template>
  <div id="nav">
    <router-view v-slot="{ Component }">
  <keep-alive exclude="Detail">
    <component :is="Component" />
  </keep-alive>
</router-view>
 <main-bar/>
  </div>
  
</template>
<script>


import MainBar from 'components/content/maintarbar/mainbar.vue'
export default {
  name:'App',
  components:{
   MainBar
   
  },
 
 
}
</script>
<style>
@import 'assets/css/base.css';
#nav{
  width: 100%;
  min-width: 320px;
 
}
</style>
