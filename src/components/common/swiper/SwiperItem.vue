<template>
    <div class="swiperitem">
         <Swiper class="homeswp" :distance="distance" :curentIndex="curentIndex" @curentdis="nowdis" @curentcur="nowIndex">
        <template #swp>

        <ul :style="moveCon">
            <li class="left">
                 <!-- <a href=""><img :src="banner[0].image" alt="">  </a> -->
            </li>
            <li class="left" v-for="item in banner" v-bind:key="item">
                 <a :href="item.link"><img :src="item.image" alt="" @load="imageLoad">  </a>
            </li>
             <li class="left">
                 <!-- <a href="#"><img :src="banner[banner.length-1].image" alt="">  </a> -->
            </li>
       
        </ul>
        </template>
         <template #li>
             <li  class="dott" v-for="(item,index) in banner" v-bind:key="index" :class="{dot:index===curentIndex}"></li>
         </template>
    </Swiper>
    </div>
</template>
<script>
import Swiper from 'components/common/swiper/Swiper.vue'
export default {
    name:'SwiperItem',
     props:{banner:Array},
        
    data(){
        return{
           
            curentIndex:0,
            distance:-16.67,
            isload:false
        }
        
    },
    components:{
        Swiper
    },
    methods:{
        // showlr(){
        //     window.addEventListener('load',function(){

        //     })
        // }
    imageLoad(){
        if(!this.isload){ this.$emit('getOffset');}
       this.isload=true
    },

        nowIndex(cur){
            if(cur>3){cur=0;}
            if(cur<0){cur=3;}
       this.curentIndex=cur;
      },
    nowdis(dis){
        if(dis>-16){
            dis=-66.68;
        }
        if(dis<-70){dis=-16.67;}
         this.distance=dis;  
        
     
     
     
},
    
        
    },
    computed:{
        moveCon(){
            return{ transform:`translate3d(${this.distance}%, 0, 0)`} 
        }
    }

    
}
</script>
<style scoped>
.homeswp{
    width: 100%;
    height: 100%;
}
.homeswp .left{
    width: 16.67%;
}
.homeswp .left img{
    width: 100%;
}

    
.dott{
 list-style: none;

  margin-top: 1px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, .8);
}
.dot{
    background-color:rgb(250, 82, 110)!important;
}
</style>