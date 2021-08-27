<template>
<div class="center">
    
<nav-bar class="bar" ><template #center>商品分类</template></nav-bar>
   <Body class="dy" ref="body" :title="titlist" @togule="togule" :curindex="curindex" @touchstart.native="init">
       <Scroll class="content" @showis="retopShow" :curtype=3 :curload=true @addMore="refre" ref="scroll" >
           <Goods  v-for="(item,index) in goodlist" :key=item :good=item :ref="`good${index}`" @touchmove="isclick=false"/>
        </Scroll>
    </Body>
  <retop class="retop" @click.native="retop" v-show="isShow" />
</div>
  
</template>
<script>
 import {retop} from 'common/mixin.js'

import NavBar from 'components/common/navbar/NavBar.vue'
import  Body from './childcomponent/Body.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import Goods from 'components/common/goods/Goods.vue'

import {getCategory,getMain} from 'network/category.js'
export default {
    name:"Center",
    components:{
        NavBar,
        Body,
        Goods,
        Scroll
        
    },
     mixins:[retop],
    data(){
        return{
            titlist:[],
            maitKey:3627,
            initkey:[],
            goodlist:[],
            page:0,
            position:0,
            allload:false,
           isclick:false,
            curindex:0,

        }
        
    },
    created(){
        
        getCategory().then(res=>{
            // console.log(res)
            var data=res.data.category;
            this.titlist=data.list;
            this.titlist.forEach(element => {
                 this.initkey.push(element.maitKey)
            });
          
           console.log(this.initkey)
           
        }),
       
       
        this.getMaindata(this.maitKey)
        
        
    },
    methods:{
      
       async getMaindata(key){                   
          await getMain(key).then(res=>{
                  this.goodlist.push(res.data.list);
                //  console.log(this.goodlist)
                //  console.log(key)
               
            })
         },
          async init(){
             if(this.allload==false){
               this.goodlist=[];
                 for(let i=0;i<this.initkey.length;i++){
               await  this.getMaindata(this.initkey[i])
                 console.log(this.initkey[i])
                 console.log(i)
                 }
             this.allload=true
            }
        },
        togule(index){
           this.isclick=true;
           
            
                 var ref=`good${index}`;
            //  console.log(ref)
            this.curindex=index;
           
            //   this.$refs.body.curIndex=this.curindex;
            // setTimeout(()=>{
                
             this.position=this.$refs[ref].$el.offsetTop;

            this.$refs.scroll.scrollTo(0,-this.position-7)
           
          
           this.$refs.scroll.scroll.refresh()
            
            // this.isclick=false;
          
           


        },
        refre(){
            //  if(!this.allload){
            //     if(this.page<=this.titlist.length-1){
            //         this.page++;
            //         // this.maitKey=this.titlist[this.page].maitKey
            //         this.getMaindata(this.initkey[this.page])
            //     }
            // }  

            // console.log(this.maitKey)
            this.$refs.scroll.finishPullUp();
            this.$refs.scroll.scroll.refresh()
         },
        retopShow(positionY){
            this.lsretop(positionY);
            setTimeout(()=>{
                if(this.isclick==false){
            if(this.curindex!=this.titlist.length-1&&this.$refs[`good${this.curindex+1}`].$el.offsetTop<-positionY){
              
                this.curindex=this.curindex+1;
                this.$refs.body.curIndex=this.curindex;
            }else if(this.curindex!==0&&this.$refs[`good${this.curindex}`].$el.offsetTop>-positionY){
                this.curindex=this.curindex-1;
                 this.$refs.body.curIndex=this.curindex;
            }
            }
            })
            
            // console.log(this.curindex)
            //    console.log(this.$refs[`good${this.curindex}`].$el.offsetTop,this.curindex)
              
           
         }
    },
   
}
</script>
<style scoped>
.bar{
    background-color: var(--color-tint);
}
.dy{
   
    padding-top:44px;
    margin-bottom: 49px;
    overflow:hidden
}
.content{
 height:85vh;
}
</style>