<template>
    <div class="tost" :class="{tosts:isshow}">{{message}}</div>
</template>

<script>
export default {
    name:"Toast",
    data(){
        return{
            message:'',
            isshow:false,
        }
    },
    show(mess,timer){
        this.message=mess;
        this.isshow=true;
        setTimeout(()=>{
            this.isshow=false
        },timer)
    }
}
</script>

<style scoped>
.tosts{
   
   
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