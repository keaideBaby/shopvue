<template>
    <div class="addc" >
<div class="hed">
    <img :src="addcar.topimg" alt="" class="heimg"><span class="price">{{addcar.price}}</span><span class="icon" @click="isShow"><img src="~assets/img/addcar/cancelcircle.svg" alt=""></span>
</div>
<div class="middle">
<div class="size">
    <ul><li v-for="(item,inde) in addcar.message" :key=inde><p>{{item.label}}</p><div class="sel"><span v-for="(ite,index) in item.list" :key=index @click="choose(inde,index)" :class="{choose:curIndex[inde]==index}">{{ite.name}}</span></div></li></ul>
   
</div>
<div class="num">
    <div><span>购货数量</span><div class="comp"><button @click="numles" :class="{fon:isdisable}">-</button><input type="text" :value="buynum"><button @click="numadd">+</button></div></div>
</div>
</div>
<div class="sure" @click="sure">确认</div>
<div class="tip" :class="{tipshow:addshow}" >
    {{content}}
</div>
    </div>

</template>

<script>

export default {
    name:"AddCar",
    props:{
        addcar:{},
        
    },
   
           
      
//     mounted(){
//     this.$store.commit('init',JSON.parse(locallStorage.getItem('carmes'))); 
//     console.log(JSON.parse(localStorage.getItem('carmes')))
//   },
    data(){
        return{
            content:null,
            isdisable:false,
             buynum:0,
             addshow:false,
            num:0,
            // goodmess:[],
            // carmes:{
// carmes:null,
                // adc:this.addcar,
               
                curIndex:[]
                // size:this.addcar.message[1].list[this.curIndex[1]],
                //  color:this.addcar.message[0].list[this.curIndex[0]],
               
            // }
        }
    },
    created(){

    },
    mounted(){
    //   this.price=;
    //   console.log(this.price)
        // EventBus.$on('addcar',function(arg){this.isshow(arg)})
    },
    methods:{
       isShow(){
          this.$emit('carhide',false) 
          this.$toast(this.content,1000)
       },
       numles(){
           if(this.buynum>0){
               this.buynum--;

           }
           if(this.buynum==0){
               this.isdisable=true
           }
       },
       numadd(){
           this.buynum++;
           if(this.isdisable)
           {
               this.isdisable=false
           }
       },
    choose(inde,index){
        this.curIndex[inde]=index;
    },
    // adshow(){
    //     var timer=null;
        
       
    //     timer=setTimeout((that)=>{
    //         that.addshow=false;
    //     },1500);

    //     clearTimeout(timer)
    // },
    sure(){
        
        this.addshow=true;
        //  let store=useStore();
        // this.adshow(this);
       var timer= setTimeout(()=>{
            this.addshow=false;
            

        },1000)
      if( this.$store.state.car.length==0){
           this.$store.state.carall=true;
      }
      
         this.$store.dispatch({
             type:'aTcar',
             carmes:{
                shopsel:true,
                shopid:this.addcar.shopid,
                shopname:this.addcar.shopname,

                 sglist:[{

                   goodid:this.addcar.id,

                    iglist:[{
                    googsel:true,
                     buynum: this.buynum,
                    curimg:this.addcar.topimg,
                    curprice:this.addcar.price,
                    curtitle:this.addcar.title,
                    curcolor:this.addcar.message[0].list[this.curIndex[0]].name,
                    cursize:this.addcar.message[1].list[this.curIndex[1]].name,
               }],
                 
               }],
               
         
              
                
             }
         }).then(res=>{
              this.content=res
         }).catch(err=>{
             this.content=err
         })
         
        //  console.log(this.carmes)
         console.log(this.$store.state)
       

        
    }
    }
}
</script>

<style scoped>
.addc{
    height:80%;
    background-color: rgb(245, 243, 243);
    position: absolute;
    padding: 0 10px;
    right: 0;
    left: 0;
    bottom:0;
    z-index: 1000;
   
}
.middle{
    height: 63%;
    overflow-y: scroll;
}
.hed{
    margin: 10px;
}
.heimg{
   width: 80px;
    height: 80px;
    border-radius: 8px;
    vertical-align:top;
    overflow: hidden;

}
.price{
    padding: 30px 10px;
    font-size: 25px;
    font-weight: 700;
    color: rgb(250, 127, 127);
}
.sel{
    display:flex;
    justify-content: stretch;
   flex-wrap: wrap;
}
.size span{
    
    line-height: 40px;
    margin:  6px;
    padding:0 20px;
    border-radius: 10px;
    background-color: rgba(184, 183, 183,.5);
}
.icon{
    float: right;
    
}
.icon img{
    width: 30px;
}
p{
    line-height: 40px;
}
.comp{
    float: right;

}
.num{
    line-height: 40px;
}
input{
    width: 40px;
    height: 30px;
    outline: none;
    border: none;
    text-align: center;
    
}
button{
    width: 40px;
    height: 30px;
    border: none;
    font-size: 20px;

}
.sure{
    position:fixed;
    bottom: 10px;
   

   
   line-height: 50px;
   width: 95%;
   border-radius: 25px;
   background-color: rgb(250, 127, 127);
   text-align: center;
   font-size: 18px;
   font-weight: 700;
   color: #fff;
}
.fon{
    color:rgb(163, 160, 160)
}
.choose{
    background-color:rgb(252, 149, 149) !important;
    color: #fff;
}
.tip{
display: none;
}
.tipshow{
    display: block !important;
    position: relative;
    bottom: 70px;
    left: 30%;
    color:#f8fcf8;
    width: 40%;
    line-height: 40px;
    background-color: rgb(245, 177, 209);
    z-index: 10;
    text-align: center;
    border-radius: 20px;
}

</style>