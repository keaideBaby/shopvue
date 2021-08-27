<template>
    <div class="recomend" v-if="Object.keys(commend).length!==0" >
        <div class="header"><span>用户评价</span><span>更多 ></span></div>
        <div class="rec">
            <div><img :src="commend.user.avatar">{{commend.user.uname}}</div>
            <p class="con">{{commend.content}}</p>
            <p class="sty">{{commend.style}}</p>
            <p class="coim"><img  v-for="item in commend.images" :key=item :src="item" alt="" class="cim"></p>
        </div>
    </div>
</template>

<script>
export default {
    name:"DetailCommend",
    props:{
        commend:{
            type:Object,
            default(){
                return {}
     
            }

        }
    }
}
</script>

<style scoped>
.recomend{
    margin: 20px 10px;
}
.header{
   margin-bottom: 10px;
    line-height: 50px;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 1px solid rgb(182, 179, 179);
}
.header span:last-of-type{
    float: right;
}
.rec{
    width: 100%;
}
.rec div img{
   
   vertical-align: middle;
   margin-right: 10px;
 width: 20%;
 border: 1px solid wheat;
border-radius: 30px;
overflow: hidden;
    
}

.con{
    line-height: 25px;
   
}
.sty{
    color: rgb(168, 164, 164);
    margin: 10px 0;
}
.coim{
    display: flex;
}
.cim{
    flex-wrap: wrap;
    flex: 3;
    width: 30%;
    height: 120px;
    padding:0 5px
}
</style>