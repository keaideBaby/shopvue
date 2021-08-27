<template>
    <div class="dnav">
      <nav-bar class="nav">
          <template #left>
         <span  @click="back" class="imgg"><img src="~assets/img/detail/ctrl.svg" alt=""></span> </template>
         <template #center>
              <span v-for="(item,index) in title" :key=index @click="clicktab(index)" :class="{active:index==curIndex}"> {{item}}</span>
          </template>
        </nav-bar>

    </div>
</template>


<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
    name:"DetailNavbarr",
    components:{
        NavBar
       
    },
    data(){
        return {
            title:['商品','参数','评论','推荐'],
            ischange:false,
            curIndex:0
        }
    },
    methods:{
        clicktab(index){
            this.curIndex=index;
            this.$emit('tabclick',index);
        },
        back(){
            this.$router.go(-1);
        }
    }

}
</script>

<style scoped>
.nav{
    background-color: #fff;
}
.dnav span{
    line-height: 44px;
    padding: 0 7px;
    font-size:18px;
    font-weight: 400;
    color:rgb(37, 37, 37);

}
.active{
    color: rgb(253, 97, 123)!important;
   
}
.imgg{
    height: 100%;
}
.imgg img{
    height: 100%;
}
</style>