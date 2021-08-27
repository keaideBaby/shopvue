<template>
<div class="cart">
    <nav-bar class="bar"><template #center>购物车({{$store.getters.totalnum}})</template></nav-bar>
   <Scroll class="s" ref="scroll"> <Caritem class="cari"/></Scroll>
    <sel-car class="sel"/>
</div>
    
</template>
<script>
import Scroll from 'components/common/scroll/Scroll.vue'
import NavBar from 'components/common/navbar/NavBar.vue'
import Caritem from './childcomponent/Caritem.vue'
import SelCar from './childcomponent/SelCar.vue'

export default {
    name:"Cart",
   data(){
       return{
          
       }
   },
    components:{
        NavBar,
        Caritem,
        SelCar,
        Scroll,
       
    },
    activated(){
        this.$refs.scroll.scroll.refresh();
    },
    methods:{
        
    }
}
</script>
<style scoped>
.cart{
   
   width: 100vh;

}
.s{
     position: absolute;
   top: 40px;
    bottom:49px;
    right:0;
    left:0;
    overflow: hidden;
}
.cari{

    
    margin: 0 10px;
    /* padding-top:44px ; */
    /* border: 1px solid white; */
    overflow: hidden;
   
}
.bar{
     position: fixed;
     top: 0;
     background-color: rgb(252, 118, 140);
     color: #fff;
}
.sel{
    position: fixed;
    bottom: 49px;
}
</style>

