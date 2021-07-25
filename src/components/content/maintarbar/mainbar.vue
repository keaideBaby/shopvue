<template>
    <tab-bar>
        
        <item-bar path='/home'><template #icon><img src="~assets/img/tabbar/home2.svg" alt=""></template>
      <template #icon-select><img src="~assets/img/tabbar/select/svgo.svg" alt=""></template>
      <template #font><div>首页</div></template></item-bar>
      
       <item-bar path='/cart'><template #icon><img  src="~assets/img/tabbar/cart.svg" alt=""></template>
        <template #icon-select><img  src="~assets/img/tabbar/select/teespring.svg" alt=""></template>
      <template #font><div >购物</div></template></item-bar>
       <item-bar path="/my"><template #icon><img  src="~assets/img/tabbar/user.svg" alt=""></template>
        <template #icon-select> <img  src="~assets/img/tabbar/select/tapas.svg" alt=""></template>
      
      <template #font><div>我的</div></template></item-bar>
       <item-bar path='/center'><template #icon><img  src="~assets/img/tabbar/windows8.svg" alt=""></template>
        <template #icon-select><img  src="~assets/img/tabbar/select/windows.svg" alt=""></template>
      <template #font><div >中心</div></template></item-bar>
    </tab-bar>
</template>
<script>
import ItemBar from 'components/common/tabbar/Itembar.vue'
import TabBar from 'components/common/tabbar/Tabbar.vue'
export default {
    name:"MainBar",
    components:{
        ItemBar,
        TabBar
    }

}
</script>