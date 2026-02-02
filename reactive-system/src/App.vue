<script setup>
  //composition API : script 태그에 setup를 반드시 추가
  // 적절한 함수를 불러와서 사용
  import {ref} from "vue";
  // ref: CRUD가 가능한 반응형 객체를 만드는 함수 중 하나
  // computed : R만 가능함
  
  let msg = "Hello, World"; // 반응형 객체가 메모리를 많이 쓰기때문에 일반 변수도 사용할 수 있다.

  const now = new Date();
  const nowStr = now.toLocaleTimeString();

  let timeStr = nowStr;
  const timeStrRef = ref(nowStr); // 반응형 객체를 반환 : 값을 감싸는 형태

  function changeTime() {
    const newTime = new Date();
    const newTimeStr = newTime.toLocaleTimeString();
    timeStrRef.value = newTimeStr;
  }

  setInterval(changeTime, 1000);
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>처음 시간 : {{ timeStr }}</p>
  <p>현재 시간(ref) : {{ timeStrRef }}</p>
</template>

<style scoped></style>
