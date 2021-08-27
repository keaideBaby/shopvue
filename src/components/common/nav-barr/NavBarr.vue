<template>
    <div class="nvbar">

    <span v-for="(item,index) in title" :key=index :class="{active:index==curIndex}" @click="curdex(index)">{{item}}</span>

    </div>
</template>
<script>
export default {
    name:"NavBarr",
    props:['title'],
    data(){
        return{
             curIndex:0
        }
    },
    methods:{
        curdex(index){
            this.curIndex=index;
            this.$emit('clidata',index);
        }
    }
}
</script>
<style scoped>

.nvbar {
display: flex;
justify-content: space-around;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
   background-color: #fff;
}
.active{
    color: rgb(253, 97, 123);
    border-bottom: rgb(250, 127, 147) 2px solid;
}

</style>