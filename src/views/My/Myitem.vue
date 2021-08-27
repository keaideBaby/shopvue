<template>
    <div class="myit">
        <div class="top">
            <span class="img"></span><span class="reg"><a>登录/</a><a>注册</a></span>
        </div>
        <div class="mon">
            <ul class="fist">
                <li>
                <p>0.00元</p>
                <p>我的余额</p>
                </li>
                <li><p>0个</p>
                <p>我的优惠</p></li>
                <li><p>0分</p>
                <p>我的积分</p></li>
            </ul>
            <ul class="sec">
                <li>我的消息</li>
                <li>积分商城</li>
                <li>会员卡</li>
                <li>我的购物车</li>
                <li>下载购物App</li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.top{
    background-color:  var(--color-tint);
    height: 120px;
    
}
.top span{
    float: left;
}
.img{
  
    margin: 20px 10px;
    height: 80px;
    width: 80px;
    border: 2px solid pink;
    border-radius: 40px;
    background-color: rgb(211, 209, 211);
} 

.reg a{
    
     line-height: 120px;
     font-size: 20px;
     font-weight: 700;
     color: #fff;
}
.mon{
    width: 100%;
}
.fist {
display: flex;
padding: 10px 0;
width: 100%;

}
.fist li{
    justify-content: space-around;
    flex: 3;
    border-left: 1px solid gainsboro;
    /* width: 33%; */
}
.fist li p{
    width: 100%;
    text-align: center;
    line-height: 30px;
}
.sec{
    line-height: 40px;
   
   
}
.sec li{
 border-top: gainsboro 1px solid;
  padding-left: 30px;
}
</style>