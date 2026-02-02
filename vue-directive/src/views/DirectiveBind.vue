<script setup>
  // Directive : HTML Tag를 제어하는 명령어. 데이터 바인딩 => template에서 사용되고 변수는 script에서 선언
  // v-bind : HTML Tag의 속성에 데이터를 바인드하는 디렉티브, 단방향 바인딩만 가능 (변수 => HTML)
  // 디렉티브에 연결될 객체는 반응형이면 모두 가능하다.

  import {ref, reactive, computed} from "vue";
  const info = ref("<strong>https://vuejs.org</strong>");
  const url = ref('http://vuejs.org')
  const isDisabled = ref(true);
  const imgAttribute = reactive({
    // 필드명 => 속성 이름 >> 필드명이 태그의 속성으로 바로 들어가니까 고려해서 정해야한다.
    src: "./src/assets/logo.svg",
    alt: "vue 기본 로고",
    width: "150px"
  })
</script>

<template>
  <h2>특정 속성의 경우</h2>
  <p v-html="info"></p> <!-- innerHTML -->
  <p v-text="info"></p> <!-- innertext -->
  <p>vuejs 공식 사이트 : {{ info }}</p>
  <hr>
  <h2>일반 속성의 경우</h2>
  <p><a href="https://vuejs.org">vue.js 사이트</a></p>
  <p><a v-bind:href="url">Vue.js</a></p>
  <p><a v-bind:href="url + '/guide/introduction.html'">Vue.js 가이드 페이지</a></p>
  <p><button v-bind:disabled="isDisabled">동의합니다.</button></p>
  <p><img v-bind="imgAttribute" alt="vue 로고"></p> <!-- 속성 순서에 따라 덮어쓰는게 다르다. -->
</template>

<style></style>