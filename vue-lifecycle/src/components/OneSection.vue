<script setup>
import {ref} from "vue";
const content = ref("");
</script>

<template>
  <section class="box">
    <h4>현재의 컴포넌트</h4>
    <p>{{ content }}</p>
    <input type="text" v-model="content" />
  </section>
</template>

<style scoped>
.box {
  border: 1px dashed green;
  margin: 10px;
}
</style>