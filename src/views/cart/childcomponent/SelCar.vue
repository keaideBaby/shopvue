<template>
    <div class="sel">
        <span class="sinp" @click="selectAll" :class="{sok:$store.state.carall}"></span>全选
        <span class="pri">合计：<span class="pnum">￥{{$store.getters.totalprice}} </span><span class="comp">结算</span></span>
    </div>
</template>
<script>
export default {
    name:"SelCar",
    // data(){
    //     return{
    //         all:false
    //     }
    // },
    props:{
        // totoalPrice:Number
    },
    methods:{
        selectAll(){
            console.log("all")
          if( this.$store.state.car.length==0){
                this.$store.state.carall=false;
                console.log("all")
          }else{
              this.$store.state.carall=! this.$store.state.carall;
              this.$store.state.car.forEach(item => {
                  
               if(item.carmes.shopsel!=this.$store.state.carall){
                  console.log("all")
            
                  item.carmes.shopsel=this.$store.state.carall;
                  item.carmes.sglist.forEach(it=>{
                      it.iglist.forEach(iit=>{
                          iit.googsel=this.$store.state.carall;
                      })
                  })
               }
                  
               
            });
          }
            
            
        }
    }
}
</script>
<style scoped>
.sel{
    width: 100%;
   padding: 0 10px;
    line-height: 44px;
    border-top: 1px solid rgb(252, 118, 140);
    background-color: #fff;
    
}
.sok{
    background-color: palevioletred !important;
}
.pri{
float: right;
}
.pri .comp{
    padding: 10px 20px;
    line-height: 40px;
    border-radius: 20px;
    color: white;
    font-weight: 600;
    background-color: rgb(252, 117, 139);
}
.pnum{
    font-size: 20px;
    font-weight: 700;
    padding-right: 10px;
    color: rgb(250, 61, 86);
}
.sinp{
    padding:0 9px;
    border: 3px solid lightcoral;
    background-color: whitesmoke;
    border-radius: 15px;
}
</style>