<template>
    <div class="goods">
      <good-item v-for="item in good" :key=item :gooditem='item' class="goi"></good-item>
    </div>
</template>
<style scoped>
.goods{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.goi{
    /* float: left;
    margin: 5px;
    width: 44%;
    height: 300px; */
   margin: 5px;
    width: 46%;
    height: 40%;
}
</style>
<script>
import GoodItem from './GoodItem.vue'
export default {
    name:"Goods",
     props:{
       good:{
           type:Array,
           default(){
               return []
           }
       } 
    },
    components:{
        GoodItem
    },
    // methods:{
    //     routerTo(){
    //         this.$emit('routerTo')
    //     }
    // }
}
</script>