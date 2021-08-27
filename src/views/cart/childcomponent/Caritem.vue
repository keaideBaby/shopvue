<template>
    <div class="caritem">
        <div v-for="(item,index) in $store.state.car" v-bind:key=index class="shop">  
    <div class="carh">
    <label for="shop">  <span class="sinp"  @click="sasel(index,item.carmes.shopsel)" :class="{sok:item.carmes.shopsel}"></span></label><span class="shopname">{{item.carmes.shopname}}</span>
    </div>
    <div class="carb" v-for="(good,indexg) in item.carmes.sglist" :key=indexg>
        <ul>
            <li v-for="(gooditem,indexi) in good.iglist" :key=indexi>
               <label for="good"> <span class="selg"  @click="gosel(index,indexg,indexi,gooditem.googsel)" :class="{sok:gooditem.googsel}"></span></label>
                <img :src="gooditem.curimg" alt="">
                <div class="rig"  @click="routerTo(good.goodid)">
                <p class="title">{{gooditem.curtitle}}</p>
                <p class="detail">{{gooditem.cursize}};{{gooditem.curcolor}}</p>
                <p class="price"><span>{{gooditem.curprice}}</span>
                <span class="num">X{{gooditem.buynum}}</span></p></div>
            </li>
        </ul>
    </div>
    </div> </div>
</template>
<script>
export default {
    name:"Caritem",
    methods:{
      sasel(index,item){
         var all=true;
         var i=0;
         var j=0;
        // this.$store.state.car[index].carmes.shopsel=!item;
        this.$store.commit({
          type:'shopSel',
            arg:[index,!item]
        })

            for(var tem of this.$store.state.car[index].carmes.sglist){
               
                for(var key of tem.iglist){
                    // key.googsel=!item
                    this.$store.commit({
                        type:'googSel',
                        arg:[index,i,j,!item]
                    });
                    j++
                }
                i++;
            
           
        }
         this.$store.state.car.forEach(element => {
            if( !element.carmes.shopsel){
                all=false
            }
            
         });
         if(all){
             this.$store.commit('all',true);
         }else{
             this.$store.commit('all',false);
         }

      } ,
       routerTo(id){
          this.$router.push("/detail/"+id);
      },

      gosel(index,indexg,indexi,item){
        
          var all=true
          var iffalse=0;
           this.$store.commit({
                        type:'googSel',
                        arg:[index,indexg,indexi,!item]
                    });
    // console.log(this.$store.state.car[index].carmes.sglist[indexg])
        //   this.$store.state.car[index].carmes.sglist[indexg].iglist[indexi].googsel=!item;
          if(!item==false){
               this.$store.commit({
          type:'shopSel',
            arg:[index,false]
        })
            //    this.$store.state.car[index].carmes.shopsel=false;
          }else{
           for(var tem of this.$store.state.car[index].carmes.sglist){
               
                for(var key of tem.iglist){
                    
                   if(key.googsel){
                      continue;
                   }else{
                       iffalse++;
                   }
                }
               
               
           }
           if(iffalse==0){
                this.$store.commit({
          type:'shopSel',
            arg:[index,true]
        })
            //    this.$store.state.car[index].carmes.shopsel=true;
           }
          
           
      }
        this.$store.state.car.forEach(element => {
            if( !element.carmes.shopsel){
                all=false
            }
            
         });
         if(all){
             this.$store.commit('all',true);
         }else{
             this.$store.commit('all',false);
         }

        
    },
       
    }
}
</script>
<style scoped>
.caritem{
    
    
    /* height:100vh; */
    /* background-color: honeydew; */  
    /* border: 1px solid peachpuff; */
    border-radius: 10px;
    overflow: hidden;
}
.shopname{
    padding: 0 10px;
    font-weight: 700;
    font-size: 20px;
}
img{
    width: 30%;
    height:90px;
   margin-left: 10px;

}
.sok{
    background-color: rgb(248, 46, 113) !important;
}
.shop{
    
    /* margin: 10px ; */
    margin-top: 10px;
    padding: 0 10px;
    border-radius: 20px;
     border: 1px solid peachpuff;
    /* background-color: rgb(245, 173, 188); */
}
.carh{
    line-height: 40px;
}
input{
    /* width: 30px; */
    /* border: none; */
    border-radius: 3px;
    border: hotpink 2px solid;
}
.rig{
    width: 60%;
    float: right;
}
p{
   white-space: nowrap;
   overflow: hidden;
   padding: 0 10px;
   line-height: 30px;
    font-size: 14px;
}
.title{
    font-weight: 700;
}
.detail{
    display: inline-block;
    margin-left: 10px;
    /* padding: 10px ; */
    background-color: hotpink;
    color: ivory;
    border-radius: 5px;
   
    
}
.sinp{
    padding:0 9px;
    border: 3px solid lightcoral;
    background-color: whitesmoke;
    border-radius: 15px;
}
.selg{
    display: inline-block;
    padding:0 6px;
    height: 18px;
    
    border: 3px solid rgb(250, 155, 155);
    background-color: whitesmoke;
    border-radius: 15px;
    margin-bottom: 30px
}
.num{
    float: right;
    font-size: 14px;
    color: rgb(248, 11, 130);
}
.price{
    color: lightcoral;
    font-size: 20px;
}
li{
    margin: 10px 0;
}
input {
    position: absolute;
    clip: rect(0, 0, 0, 0);
}
</style>