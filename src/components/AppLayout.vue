<template>
  <div class="layout-container">
    <main>
        <slot></slot>
    </main>
  </div>
</template>
<script setup lang="ts">
    
</script>
<style scoped>
  .layout-container{
    width:100%;
    height: 90vh;
    
    display: flex;
    justify-content: center;
    
    main{
      width: 70vw;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      
    }
  }
</style>