<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <h1>Vue Router Sample</h1>
  <hr><br>
  <main>
    <!-- router로 conponent를 출력 -->
     <RouterView />
  </main>
</template>

<style scoped>
main {
  border: 1px black solid;
}
</style>
