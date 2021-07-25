<template>
    <div class="tabBar">
     <slot></slot>
    </div>
</template>
<script>

export default {
    name:"TabBar",
    components:{
        
    
}
}
</script>
<style>

.tabBar{
    height: 49px;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    background-color: rgb(209, 206, 206);
    box-shadow: 0px -1px 2px rgb(202, 201, 201);
  }
 
</style>