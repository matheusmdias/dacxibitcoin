<template>
  <div id="app" class="dark">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style scoped>
/* Dark theme styles */
.dark { 
  color: #fff;
}

/* You can add additional Tailwind classes here if needed */
</style>
