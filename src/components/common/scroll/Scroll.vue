<template>
    <div class="scroll" ref="sc">
        <div class="content" >
            <slot></slot>


        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name:'Scroll',
    data(){
        return{
            scroll:null
        }
        
    },
    props:{
        curtype:Number,
        curload:Boolean
    },
    components:{
        BScroll
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.sc,
        {click:true,
        probeType:this.curtype,
        pullUpLoad:this.curload})
        // console.log(this.scroll);
        this.scroll.on("scroll",(position)=>{
            // console.log(position);
            this.$emit('showis',position.y)
        }),
        this.scroll.on('pullingUp',()=>{
            this.$emit('addMore')
        })
    },
    methods:{
        scrollTo(x=0,y=0,time=300){
           this.scroll&& this.scroll.scrollTo(x,y,time);
        },
        finishPullUp(){
           this.scroll&& this.scroll.finishPullUp();
        },
        getScrollY(){
            return this.scroll?this.scroll.y:0
        }
        
    }
}
</script>
<style scoped>


</style>