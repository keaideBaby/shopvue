<template>
<div class="itemBar" @click="itemRouter">
    <div  v-if="!isselect">
   <slot name="icon"></slot></div>
   <div v-else>
   <slot name="icon-select" ></slot></div>
   <div :class="{active:isselect}">
   <slot name="font"></slot></div>
    </div>
</template>
<script>
export default {
    name:"ItemBar",
    props:{path:String},
    
    computed:{
   isselect(){
      
    return this.$route.path.indexOf(this.path)!==-1;
}
    },
    methods:{
        itemRouter(){
         this.$router.push(this.path);
        
        }
    }
}
</script>
<style>
 .itemBar img{
      vertical-align: middle;
  }
  .itemBar div{
      font-size: 14px;
      

  }
  .active{
      color: red;
  }
</style>