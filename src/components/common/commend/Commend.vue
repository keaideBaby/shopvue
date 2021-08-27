<template>
    <div class="commen">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:"Commend",
}
</script>
<style scoped>
.commen{
    display: flex;
    justify-content: space-around;
    padding-bottom: 10px;
   border-bottom: 5px solid rgb(236, 233, 233);
    width: 100%;
  
   font-size: 12px;
   text-align: center;
    
}
</style>