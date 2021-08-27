<template>
    <div id="swiper" @mouseenter="showlr" @mouseleave="hindlr" >
       <div  class=" swi" @mouseover="cleartimer" @mouseleave="setTimer"> <slot name='swp'></slot></div>
         <div class="swbtn l" v-show="show"  @click="moveleft"><img src="~assets/img/swiper/circle-left.svg" alt=""></div>
     <div class="swbtn r"  v-show="show" @click="moveright"> <img src="~assets/img/swiper/circle-right.svg" alt=""></div>
     <ul class=swiperdot><slot name="li"></slot></ul>
    </div>
   
</template>

<script>
export default {
    name:'Swiper',
    props:['distance','curentIndex'],
    data(){
        return {
            show:false,
            time:null
        }
    },
    methods:{
        showlr(){
            this.show=true
        },
        hindlr(){
            this.show=false
        },
        moveleft(){
            this.$emit("curentdis",this.mleft);
             this.$emit("curentcur",this.cleft);
        },
        moveright(){
            this.$emit("curentdis",this.mright);
             this.$emit("curentcur",this.cright);
        },
        setTimer(){
           if(this.timer==null){
               this.timer=setInterval(()=>{this.moveright();},4000);
            }
        },
        cleartimer(){
            clearInterval(this.timer);
            this.timer=null;
        }
       

    },
    mounted(){
        
        this.setTimer();
    },
    
    computed:{
        mleft(){
            return this.distance+16.7;
        },
        cleft(){
           
           return this.curentIndex-1;;
        },
        mright(){
            return this.distance-16.7;
        },
        cright(){
            
           return this.curentIndex+1;
           
    }
    }
}
</script>
<style scoped>

#swiper{
    position: relative;
    /* margin-top:44px; */
    width: 100%;
   
    overflow: hidden;
   
   
}
.swbtn{
    position: absolute;
    top:50%;
    margin-top:-15px;
    width: 40px;
    height: 40px;
}
.l{
    left: 0;
}
.r{
    right: 0;
}

.swiperdot{
    display: flex;
    justify-content: space-around;
    position: absolute;
    width: 90px;
    height: 12px;
    bottom: 15px;
    left: 50%;
    margin-left: -45px;
    background-color: rgba(255, 255, 255, .3);
    border-radius: 6px;
}

.swi{
    width: 600%;
    /* height: 166px; */
}


</style>