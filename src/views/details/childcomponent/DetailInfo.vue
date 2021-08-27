<template>
    <div class="deInfo">
      <!-- <img :src="detailInfo.anchor" alt="">
      <p>{{detailInfo.key}}</p> -->
      <ul>
          <li v-for='item in detailInfo' :key=item><img :src="item.anchor" alt=""><p>{{item.key}}</p><ul>
       <li v-for="ite in item.list" :key=ite ><img :src="ite" alt="" @load="imgload"></li>
          </ul></li>
      </ul>
    </div>
</template>
<script>
export default {
    name:"DetailInfo",
    props:{
        
        detailInfo:Array
    },
    data(){
        return{
            count:0,
            length:0,
        }
    },
    method:{
        imgload(){
            // if(++this.count==this.length){
                this.$emit('refre',"tupainjiazai");
                
            // }
        }
    },
    // watch:{
    //     detailInfo(newname,oldname){
    //         var l=newname.length;
    //         for(var i=0;i<l;i++){
               
    //             this.length=+newname[i].list.length
    //         }
            
    //     }
    // }
}
</script>

<style scoped>
.deInfo{
    width: 100%;
}
.deInfo img{
    width: 100%;
}
p{
    padding: 10px;
}
</style>