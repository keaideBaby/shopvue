<template>
  <div id="nav">
    <router-view></router-view>
    <main-bar/>
    
  </div>
  
</template>
<script>
import MainBar from 'components/content/maintarbar/mainbar.vue'

export default {
  name:'App',
  components:{
  MainBar
   
  }
}
</script>
<style>
@import 'assets/css/base.css';
</style>
