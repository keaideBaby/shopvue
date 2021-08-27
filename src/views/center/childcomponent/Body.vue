<template>
    <div class="cate">
        
        <div class="l"><ul><Scroll class="content">
            <li v-for="(item,index) in title" :key=index :class="{issel:index==curIndex}" @click="select(index)">{{item.title}}</li></Scroll>
        </ul></div>
        <div class="r"><slot ></slot></div>
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'
import Goods from 'components/common/goods/Goods.vue'
export default {
    name:"Body",
    props:{
        title:Array,
        goodlist:Array,
        curindex:Number
    },
    data(){
        return{
             curIndex:0
        }
       
    },
    components:{
        Scroll,
        Goods,
    },
    mounted(){
        
    },
    methods:{
        select(index){
            this.curIndex=index;
            this.$emit('togule',this.curIndex)
        },
        // routerTo(maitKey){
        //     this.$route.params=maitKey
        // }
    
    }

}
</script>

<style scoped>
.cate{
    display:flex;
   
    width: 100%;
    background-color: powderblue;
  

}
.content{
 height:86vh;
}
.cate .l{
    width: 30%;
    background-color: rgb(226, 225, 226);
    
}
.cate .r{
    flex: 1;
    background-color: rgb(255, 244, 244);
   
}
.l ul{
    width: 100%;
    background-color: #fff;
}
.l li{
    width: 95%;
    line-height: 40px;
    text-align: center;
    background-color: rgb(226, 225, 226);

}
.issel{
    border-left: 3px solid rgb(250, 80, 136);
    background-color:#fff !important;
}
</style>