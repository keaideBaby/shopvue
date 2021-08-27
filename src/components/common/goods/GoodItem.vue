<template>
    <div class="goodItem">
        <!-- <a :href="gooditem.link"> -->
            <div @click="routerTo">
           
        <img :src="showImg" alt="" ><!--@load="refre"-->
        
        <div><p>{{gooditem.title}}</p><span class="price">{{gooditem.price}}</span><span class="cfav">{{gooditem.cfav}}</span></div>
        <!-- </a> --></div>
    </div>
</template>

<script>
export default {
    name:"GoodItem",
    
   props:{
       gooditem:{
           type:Object,
           default(){
               return{}
           }
       },
       
     
   },
   computed:{
       showImg(){
           return this.gooditem.image||this.gooditem.show.img;
       },
       itemid(){
           return this.gooditem.iid||this.gooditem.item_id;
       }
   },

  
      
   
   methods:{
    //    refre(){
    //        this.$store.commit('loadFinish','1');
    //    },
      routerTo(){
          this.$router.push("/detail/"+this.itemid);
      }
   }
}
</script>

<style scoped>

.goodItem img{
    width: 100%;
    border-radius: 4px;
}
.goodItem p{
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
}
.price{
    color: palevioletred;
    padding-right: 10%;
    padding-left: 25%;
}
</style>