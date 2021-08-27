<template>
    <div class="parInfo">
        <div class="size">
            <div class="declare">{{paramsinfo.disclaimer}}</div>
            <ul><li  v-for="item in paramsinfo.table" :key=item  class="sml"><span v-for="iitem in item" :key=iitem>{{iitem}}</span></li>
            <li v-for="item in paramsinfo.set" :key=item class="set"><span>{{item.key}}</span><span>{{item.value}}</span></li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name:"ParamsInfo",
    props:{
        paramsinfo:{
            type:Object,
            default(){
                return {}
            }


        }
    }
}
</script>

<style scoped>
.declare{
    margin: 10px 2px;
    font-size: 14px;
}
ul{
    margin: 0 10px;
}
li{
    list-style: none;
    height: 50px;
    font-size: 14px;
    width: 100%;
    padding-top:10px;
    padding-bottom: 7px;
    border-bottom: 1px solid gainsboro;
}
.sml span{
   display: inline-block;
   width: 25%;
   text-align: center;
}
.set{
    display: flex;
}
.set span:first-of-type{
    width: 25%;
    text-align: center;

}
.set span:last-of-type{
    flex: 1;
    padding-left: 10%;
   text-overflow:ellipsis ;
    overflow: hidden;
    color: rgb(221, 76, 149);
}

</style>