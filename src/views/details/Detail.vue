<template>
    <div class="detail" @refre="refresh">
        
        <DetailNavbarr ref="bar" @tabclick="tugle" />
        <Scroll class="content" ref="scroll" :curtype=3 @showis="contentScroll">
        <detail-swipper  :imgdetail="imgdetail" :imgLength="imgLength" class="dswi"/>
        <shop-message :info="itemshop" ref="mes" />
        <detail-info  :detailInfo="detailinfo"  ref="dein"/>
        <params-info :paramsinfo="paramsinfo"/>
        <detail-commend :commend="commend"  ref="coin"/>
        <Goods :good="good"  ref="good"></Goods>
        </Scroll>
       <Retop class="retop" @click.native="retop" v-show="isShow" />
      <detail-bar @carshow='addCar'/>
      <add-car :addcar="addcar"  @carhide="addCar" v-show="carshow"/>

    </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'

import Goods from 'components/common/goods/Goods.vue'

import AddCar from './childcomponent/AddCar.vue'
import DetailBar from './childcomponent/DetailBar.vue'
import DetailNavbarr from 'views/details/childcomponent/DetailNavbarr.vue'
import ShopMessage from 'views/details/childcomponent/ShopMessage.vue'
import DetailInfo from './childcomponent/DetailInfo.vue'
import ParamsInfo from './childcomponent/ParamsInfo.vue'
import DetailCommend from './childcomponent/DetailCommend.vue'
import DetailSwipper from './childcomponent/DetailSwipper.vue'

import {getDetaildata,getCommenddata,itemShop,paramsShop,addCar} from 'network/detail.js'


import {retop} from 'common/mixin.js'
import {debouce} from 'common/util/util.js'
export default {
    name:"Detail",
    mixins:[retop],
    data(){
        return{
            id:null,
            isShow:false,
            imgdetail:null,
            imgLength:0,
            itemshop:{},
            detailinfo:[],
            paramsinfo:{},
            commend:{},
            good:[],
            topY:{
                mes:0,
                dein:600,
                coin:1500,
                good:2800,

            },
            position:0,
            carshow:false,
            addcar:{}
            
           
        }
    },
   
        
 
    created(){
        this.id=this.$route.params.id;
        // console.log(this.id)
          getDetaildata(this.id).then(res=>{
        //  console.log(res);
        var data=res.result;
        //轮播图数据
         this.imgdetail=data.itemInfo.topImages;
         this.imgLength=this.imgdetail.length;
       
      
        //商品信息数据
        this.itemshop=new itemShop(data,data.itemInfo,data.shopInfo);
        this.detailinfo=data.detailInfo.detailImage;
        //商品参数
        this.paramsinfo=new paramsShop(data.itemParams.info,data.itemParams.rule)
        console.log(this.paramsinfo)
        //购物车信息
        this.addcar=new addCar(data.itemInfo,data.skuInfo,data.shopInfo)
        // this.addcar.message=data.skuInfo.props;
        // this.addcar.topimg=this.imgdetail[0];
        // this.addcar.price=data.itemInfo.price;
        // this.addcar.id=this.id;
        // this.addcar.title=
        console.log(this.addcar)
        //评论信息
        if(data.rate.cRate!==0){
            this.commend=data.rate.list[0];
        }
       
      

        
     })
         getCommenddata().then(res=>{
            //  console.log(res)
             this.good=res.data.list;
             console.log(this.good)
         });

    
    
    },
    updated(){
        //  this.topY.dein=this.$refs.dein.$el.offsetTop;
        //         this.topY.coin=this.$refs.coin.$el.offsetTop;
        //         this.topY.good=this.$refs.good.$el.offsetTop;
    },
    methods:{
   
      refresh(item){
        //   debouce(this.getdata,300)()
         console.log(item)
       
      },
        addCar(arg){
           this.carshow=arg;
          
        },
        contentScroll(position){
            this.position=-position;
            let i=0;
            for(var key in this.topY){
                if(this.$refs.bar.curIndex!==i&&this.topY[key]<=this.position){
                    this.$refs.bar.curIndex=i;
                }
                i++;
            }
            this.lsretop(position);
        },

      tugle(index){
          this.$refs.scroll.scroll.refresh();
            this.topY.dein=this.$refs.dein.$el.offsetTop;
                this.topY.coin=this.$refs.coin.$el.offsetTop;
                this.topY.good=this.$refs.good.$el.offsetTop;
                console.log(this.topY)
         
                console.log(index)
          switch(index){
              case 0:this.$refs.scroll.scrollTo(0,-this.topY.mes,100);
              break;
               case 1:this.$refs.scroll.scrollTo(0,-this.topY.dein,100);
               break;
                case 2:this.$refs.scroll.scrollTo(0,-this.topY.coin,100);
                break;
                 case 3:this.$refs.scroll.scrollTo(0,-this.topY.good,100);
                 break;
          }
      }

    },
    components:{
         DetailNavbarr,
        DetailSwipper,
        ShopMessage,
        Scroll,
        DetailInfo,
        ParamsInfo,
       DetailCommend,
       Goods,
       AddCar,
       DetailBar,
       
        
        
    }
}
</script>

<style scoped>
.w{
    height: 300px;
    background-color: rgb(131, 114, 114);
}
.detail{
    position: relative;
    height: 100vh;
}
.dswi{
    height: 400px; 
     overflow: hidden; 
}
.content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
}
</style>