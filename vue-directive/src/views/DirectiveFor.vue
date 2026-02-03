<script setup>
import {ref} from "vue";
const array = ['마우스', '키보드', 'USB', '마우스패드'];
const itemList = ref(array); 
const friends = ref(["홍길동", "김길동"]);
let newFriend = ref("박길동");
const addFriend = () => {
  friends.value.push(newFriend.value);
  newFriend.value = "";
};
</script>

<template>
  <h2>전자기기목록</h2>
  <ol>
    <li v-for="(item, index) in itemList">{{ item }} {{ index }}</li> <!-- for directive가 태그까지 생성해서 구현해준다. -->
  </ol>
  <br><hr><br>
  <p>새로운 친구</p>
  <input type="text" v-model="newFriend" @keyup.enter="addFriend">
  <ul>
    <li v-for="(name, idx) in friends">{{ `${idx + 1} : ${name}` }}</li>
  </ul>
</template>

<style scoped></style>