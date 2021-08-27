<template>
<div id="home"><!-- @touchmove.native='toucmore'*/-->
<nav-bar class="homebar">
    <template #center><div>购物街</div></template>
</nav-bar>
<nav-barr :title="['流行','新款','精选']" ref="tabcontrol1" @clidata="typeselect" :class="{tabcontrol:showBarr}"></nav-barr>
<Scroll class="content" ref="scroll" :curtype=3 @showis="retopShow" :curload=true @addMore='addMore'>
   <swiper-item :banner='banner' @getOffset="getoffset" class="swi"></swiper-item>
 <commend-item :commend="commend"></commend-item>
<feature/>
<nav-barr :title="['流行','新款','精选']" ref="tabcontrol" @clidata="typeselect"></nav-barr>
<Goods :good="goods[ttpe].list" ref="scrol" ></Goods>
<more/>
</Scroll>
<retop class="retop" @click.native="retop" v-show="isShow" />
<!-- 在组件中注册事件时需在后面添加.native -->
</div>
    
    
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import SwiperItem  from 'components/common/swiper/SwiperItem.vue'
import CommendItem from 'components/common/commend/CommendItem.vue'
import Feature from './childcomponents/Feature.vue'
import NavBarr from 'components/common/nav-barr/NavBarr.vue'
import Goods from 'components/common/goods/Goods.vue'
import GoodItem from 'components/common/goods/GoodItem.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import Retop from 'components/common/returntop/Retop.vue'
import More from 'components/common/more/More.vue'
import {getHomeMultidata,getHomedata} from 'network/home.js'

import {retop} from 'common/mixin.js'

export default {
    name:"Home",
   mixins:[retop],/*混入 methods中方法的部分语句不能直接抽取到mixin中，生命周期方法中的可以 */
    data(){
        return{
     banner:[],
     commend:[],
     goods:{
      'pop':{
        page:0,list:[]
      },
      'new':{
        page:0,list:[]
      },
      'sell':{
        page:0,list:[]
      }
    },
     ttpe:'pop',
     curtype:0,
    //  isShow:false,
     positions:0,
     barrOffset:0,
    showBarr:false,
  
   
        }
    },
    components:{
        NavBar,
        SwiperItem,
        CommendItem,
        Feature,
        NavBarr,
        Goods,
        GoodItem,
        Scroll,
        // Retop,
        More
    
        
        
    },

    created(){
        this.getHomeMultidata()
        this.getHomedata('pop')
        this.getHomedata('new')
        this.getHomedata('sell')
     
    },
    mounted(){
      const a=  this.debouce(this.addMore,1000)
      a();
    },
     activated(){
        //  console.log('active')
        this.$refs.scroll.scrollTo(0,this.positions,0);
          this.$refs.scroll.scroll.refresh();
    },
    deactivated(){
        this.positions=this.$refs.scroll.getScrollY();
        // console.log('deactive')
    },
    computed:{
        isAdd(){
            return (this.positions+600)>this.$refs.scroll.scroll.scrollerHeight;
        }

    },
    

    methods:{
        getHomeMultidata(){
            getHomeMultidata().then(res=>{
         this.banner=res.data.banner.list;
         this.commend=res.data.recommend.list;
        //  console.log(this.banner);
     })
        },
        getHomedata(type){
            const page=this.goods[type].page+1;
            // console.log(page)
             getHomedata(type,page).then(res=>{
                //  console.log(res.data.list);
                 
                    this.goods[type].list.push(...res.data.list);
                    // console.log(this.goods[type])
     })
     this.goods[type].page=page;
     },
       
        typeselect(index){
            if(index==0){
                this.ttpe='pop'
            }else if(index==1){
        this.ttpe='new'
        }else{
            this.ttpe='sell'
        }
       this.$refs.tabcontrol1.curIndex=index;
        this.$refs.tabcontrol.curIndex=index;
       
    },
   
    // retop(){
    //     // console.log(this.$refs.scroll.scroll.pointY);
    //     this.$refs.scroll.scrollTo(0,0,1000);
         

    // },
//     toucmore(){
//         console.log(this.positions+600);
//         console.log(this.$refs.scroll.scroll.scrollerHeight);
//  console.log(this.isAdd);
//        if(this.isAdd){
          
           
//            this.getHomedata(this.ttpe);
//            console.log(this.goods['ttpe'].list)
//        }
//     },
    getoffset(){
       this.barrOffset= this.$refs.tabcontrol.$el.offsetTop;
    //    console.log(this.barrOffset);
    },
    retopShow(positionY){
       
        // if(positionY<-2500){
        //     this.isShow=true;
        // }else{
        //     this.isShow=false
        // }
        this.lsretop(positionY);/*将该方法中的部分语句抽离，需在该方法中在调用mixin中的方法 */

        if(positionY<-this.barrOffset){
this.showBarr=true
        }else{
            this.showBarr=false
        }
    },
    debouce(func,wait){
        // console.log('debous')
        var timer=null;
        // var _this;
        //  var _arg;
        return function(){
            //  _this=this;
            //  _arg=arguments;
            clearTimeout(timer);
            timer=setTimeout(()=>{
                func
                // .apply(_this,_arg)
            },wait)
        }
        },
       
    addMore(){
        // console.log("jiazaigengduo")
        this.getHomedata(this.ttpe);
       
        this.$refs.scroll.finishPullUp();
         this.$refs.scroll.scroll.refresh();
    },
   

     },
}
</script>
<style scoped>
.homebar{
    font-size:18px;
    font-weight: 600;
    color: #fff;
    /* viewport-fit: 100; */
    background-color: var(--color-tint);
   
}

#home{
    position: relative;
   height:100vh;
border-top: 1px solid pink;
}

.tabcontrol{
    position: relative;
    top: 44px;
    z-index: 2;
    
}
.content{
    position: absolute;
    top: 41px;
    bottom:49px;
    right:0;
    left:0;
    overflow: hidden;
   /* height: 900px; */
   
}
.swi{
    height: 168px;
}

</style>