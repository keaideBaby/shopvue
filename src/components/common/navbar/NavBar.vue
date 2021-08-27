<template>
    <div class="navbar">
       <div class="left"> <slot name="left"></slot></div>
     <div class="center"> <slot name="center"></slot></div>
     <div class="right"> <slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style scoped>
.navbar{
   
    display: flex;
    height: 45px;
    z-index: 1;
    width: 100%;
    position: fixed;
    justify-content: space-around;
    margin-top: -1px;
    background-color:var(--color-tint);
    box-shadow: 0px 1px 1px rgb(202, 201, 201);
   
    
}
.navbar .left,.right{
    width: 60px;
}

.center{
    flex-grow: 1;
    line-height: 44px;
    text-align: center;
     font-size:18px;
    font-weight: 600;
    color: #fff;
    /* viewport-fit: 100; */
   
    
}
</style>