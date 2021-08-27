<template>
    <div class="my">
        <nav-bar><template #center>我的档案</template></nav-bar>
        <Myitem  class="ite"/>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import Myitem from './Myitem.vue'
import {getProfile} from 'network/profile.js'
export default {
    name:"My",
    components:{
        NavBar,
        Myitem
    },
    created(){
        getProfile().then(res=>{
            console.log(res)
        })
    }
}
      
</script>
<style  scoped>
.ite{
    padding-top:44px
}
</style>
