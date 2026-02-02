<script setup>
  import {ref, computed} from "vue";
  // computed : ReadOnly인 반응형 객체를 만드는 함수 => 다른 반응형 객체와 연동
  // computed는 매개변수가 없는 함수이다.
  // 원의 넓이 구하기
  const radiusInit = Math.round(Math.random() * 10);
  const radius = ref(radiusInit);

  const area = computed(() => radius.value ** 2 * Math.PI);
  
  // 영수증
  // 노트 10,000원(소비자가) => 공급가액 9,000원 / 부가세 1,000원
  const price = ref(0);
  const supply = computed(() => price.value * 0.9);
  const tax = computed(() => price.value - supply.value);
</script>

<template>
  <h2>원의 면적</h2>
  <p>반지름이 {{ radiusInit }} 이고</p>
  <p>원의 면적은 {{ area }}</p>
  <hr>
  <h2>영수증</h2>
  <span>제품가격</span>
  <input type="text" v-model="price">
  <p>공급가액 : {{ supply }}</p>
  <p>부가세 : {{ tax }}</p>
  <p>소비자가 : {{ price }}</p>
  
</template>

<style></style>