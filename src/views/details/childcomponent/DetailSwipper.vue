<template>
    <div class="dswipper">
         <Swiper class="homeswp" :distance="distance" :curentIndex="curentIndex" @curentdis="nowdis" @curentcur="nowIndex">
        <template #swp>

        <ul :style="moveCon">
            <li class="left">
                 <!-- <a href=""><img :src="banner[0].image" alt="">  </a> -->
            </li>
            <li class="left" v-for="item in imgdetail" v-bind:key="item">
                <img :src="item" alt="" @load="imageLoad">
            </li>
             <li class="left">
                 <!-- <a href="#"><img :src="banner[banner.length-1].image" alt="">  </a> -->
            </li>
       
        </ul>
        </template>
         <template #li>
             <li  class="dott" v-for="(item,index) in imgdetail" v-bind:key="index" :class="{dot:index===curentIndex}"></li>
         </template>
    </Swiper>
    </div>
</template>
<script>
import Swiper from 'components/common/swiper/Swiper.vue'
export default {
    name:"DetailSwiper",
    props:{
        imgdetail:Array,
        imgLength:Number
    },
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
            if(cur>this.imgLength-1){cur=0;}
            if(cur<0){cur=this.imgLength-1;}
       this.curentIndex=cur;
      },
    nowdis(dis){
        if(dis>-16){
            dis=-(16.67*this.imgLength);
        }
        if(dis<-(16.67*this.imgLength+10)){dis=-16.67;}
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
    width: 16.66%;
   
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