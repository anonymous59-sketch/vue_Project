<script setup>
import {ref} from "vue";

// Data 객체배열
const friends = ref([
  {id: "01", name: "홍길동", age: 22},
  {id: "02", name: "김길동", age: 25},
]);
</script>

<template>
  <h2>친구 목록</h2>
  <table border="1px">
    <thead>
      <tr>
        <th>ID</th>
        <th>name</th>
        <th>age</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="info in friends" v-bind:key="info.id"> <!-- :key, :ref는 vue에서 제공하는 기능 -->
        <!-- key 속성으로 primary key를 지정해주면 for directive의 모든 것을 새로 렌더링 하는 문제를 해결한다. -->
        <td>{{ info.id }}</td>
        <td>{{ info.name }}</td>
        <td>{{ info.age }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>