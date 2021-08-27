<template>
    <div class="smes">
        <div class="goods">
            <p>{{info.title}}</p>
            <p><span class="nowp">{{info.price}}</span><em>{{info.oldPrice}}</em><span :style="{
                backgroundColor:info.discountBgcolor,
                padding:'2px 10px',
                borderRadius:'10px',
                fontSize:'15px',
                color:'#fff'
                }">{{info.discountDesc}}</span></p>
            <div class="culomn" ><span v-for="item in info.columns" :key=item >{{item}}</span></div>
            
            <div class="services"><span v-for="item in info.service" :key="item"><img :src="item.icon" alt="">{{item.name}}</span></div>
       </div>
       <div class="shop">
           <div class="header">
               <img :src="info.shoplogo" alt=""><span>{{info.sname}}</span>
           </div>
           <div class="mid">
               <ul class="left">
                <li>
                    <p>{{info.csell/10000}}万</p>
                    <p>总销量</p>
                </li>
               <li>
                   <p>{{info.cGoods}}</p>
                   <p>全部宝贝</p>
                   </li>
                </ul>
               
               <ul class="right">
                   <li v-for="item in info.score" :key=item class="desc"><span>{{item.name}}</span><span :class="{isbetterr:item.isBetter,islow:!item.isBetter}" >{{item.score}}</span><span v-if="item.isBetter"  :class="{isbetter:item.isBetter}">高</span><span v-else :class="{islower:!item.isBetter}">低</span></li>
               </ul>
           </div>
           <div class="foot">
               <a :href="info.shopUrl">进店逛逛</a>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    name:"ShopMessage",
    props:{
        info:Object
    }
}
</script>
<style scoped>
.smes p{
    padding: 5px 10px;
    font-size: 18px;
    
    font-weight: 600;
}
.smes p em{
    font-size: 14px;
    font-weight: 400;
    padding-left:8px;
    text-decoration-line: line-through;
}
.culomn{
    
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    color: rgb(163, 160, 160);
}
.nowp{
    color: hotpink;
}
.services{
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
    padding: 10px 1px;
    margin: 10px 4px;
   border-top: 1px solid grey;
   border-bottom: 1px solid grey;
   box-shadow: 1px 2px rgb(228, 221, 221);
   font-size: 14px;
}
.services img{
    width: 20px;
    vertical-align: middle;
    padding-right: 2px;
}
.services span{
    padding: 5px;
}
.header{
    width: 100%;
    font-size:20px ;
    font-weight: 500;
}
.header img{
    width: 20%;
    vertical-align: middle;
    padding: 15px 10px;

}
li{
    list-style: none;
}
.left{
    border-right: 1px solid rgb(202, 202, 202);
}
.left li{
    float: left;
    text-align: center;
    
    
}
.left li p:last-of-type{
    font-size: 14px;
    font-weight: 600;
}
.right{
    float:right;
}
.mid{
    overflow: hidden;
}
.desc span:last-of-type{
    float: right;
}
.desc{
    margin-bottom: 12px;
    margin-right: 10px;
    font-weight: 600;
    font-size: 14px;
}
.desc span{
    padding: 0 5px;
}

.shop{
    overflow: hidden;
    width: 100%;
}
.isbetter{
    background-color: rgb(241, 64, 20)!important;
    color: honeydew;
    
}
.isbetterr{
    color: rgb(235, 72, 31)!important;
}
.islow{
    color: rgb(49, 177, 49) !important;;
}
.islower{
    background-color: rgb(13, 160, 33) !important;
    color: honeydew;
}
.foot a{
    display: block;
    height: 40px;
    margin: 0 30%;
    padding: 0 20px;
    line-height: 40px;
    background-color: rgb(221, 218, 218);
    border-radius: 20px;
    text-align: center;


}
</style>