<template>
    <Commend><div v-for="item in commend" v-bind:key="item"><a :href="item.link"><img :src="item.image" alt=""><p>{{item.title}}</p></a></div></Commend>
</template>
<script>
import Commend from 'components/common/commend/Commend.vue'
export default {
    name:"CommendItem",
    props:['commend'],
    components:{
        Commend
    }

}
</script>
<style scoped>
img{
    width: 65px;
    height: 65px;
    margin: 10px 0;
}
</style>