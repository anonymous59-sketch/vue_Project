<script setup>
  import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <h1>homework 0202 박상원</h1>
  <p>
    <RouterLink to = "/">Home</RouterLink>
  </p>
  <p>
    <RouterLink to = "/route">Router Test</RouterLink>
  </p>
  
  <RouterView></RouterView>
</template>

<style></style>
