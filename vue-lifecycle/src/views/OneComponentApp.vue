<script setup>
import {ref} from "vue";
const oneVal = ref("첫번째");
const twoVal = ref("두번째");
const threeVal = ref("세번째");
const fourVal = ref("네번째");
</script>

<template>
  <h1>컴포넌트 기초</h1>

  <section>
    <h2>컴포넌트 1개</h2>
    <section class="box">
      <h4>현재의 컴포넌트</h4>
      <p>{{ oneVal }}</p>
      <input type="text" v-model="oneVal" />
    </section>
  </section>

  <section>
    
    <h2>컴포넌트 여러개</h2>
    <section class="box">
      <h4>현재의 컴포넌트</h4>
      <p>{{ twoVal }}</p>
      <input type="text" v-model="twoVal" />
    </section>
    <section class="box">
      <h4>현재의 컴포넌트</h4>
      <p>{{ threeVal }}</p>
      <input type="text" v-model="threeVal" />
    </section>
    <section class="box">
      <h4>현재의 컴포넌트</h4>
      <p>{{ fourVal }}</p>
      <input type="text" v-model="fourVal" />
    </section>
  </section>
</template>

<style scoped>
section {
  border: 1px solid blue;
  margin: 10px;
}
.box {
  border: 1px dashed green;
  margin: 10px;
}
</style>
