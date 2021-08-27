<template>
  <div class="bar">
     <div class="baritem">
         <div class="groupo">
     <div>
         <i class="icon service"><img src="~assets/img/detail/bar/service/kefu.svg" alt=""></i>
         <span class="text">客服</span>
     </div>
     <div>
         <i class="icon shop"><img src="~assets/img/detail/bar/shop/store.svg" alt=""></i>
         <span class="text">店铺</span>
     </div>
    <div>
         <i class="icon select"><img src="~assets/img/detail/bar/service/kefu.svg" alt=""></i>
         <span class="text">收藏</span>
     </div>
     </div>
     <div class="itembar">
         <div class="car" @click="addcar">加入购物车</div>
         <div class="buy">购买</div>
     </div>
     </div>
  </div>
</template>

<script>
import { Eventbus } from 'common/eventbus';
// import ItemBar from 'components/common/tabbar/Itembar.vue'
export default {
    name:"DetailBar",
    components:{
        // ItemBar,
    },
    methods:{
        addcar(){
        this.$emit('carshow',true);
        }
    }
}
</script>

<style scoped>
.bar{
    position:fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: hotpink;
    z-index: 5;
    height: 49px;
    text-align: center;
    
}
.baritem>div{
  float: left;
    height: 49px;
    width: 50%;
    background-color: #fff;
    display: flex;
 

}
img{
    display: block;
    width: 50%;
    margin: 0 auto;
}
.itembar{
    line-height: 49px;
  
}
.car{
    background-color: rgb(243, 209, 59);
    width: 50%;
}
.buy{
    background-color: lightcoral;
    width: 50%;
    color: lightcyan;
    text-align: center;
}

</style>