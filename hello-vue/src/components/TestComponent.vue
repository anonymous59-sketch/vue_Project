<!-- TestComponent.vue .vue 파일 제목은 파스칼 표기법-->
 <!-- Component : Javascript(script) + HTML(template) + CSS(style) -->
<script setup>
  import {ref} from "vue";
  let message = ref("메세지를 입력해주세요");
</script>

<template> <!-- body 대신 template를 사용한다. -->
  <div>
    <h1>{{ message }}</h1>
    <input type="text" v-model="message" /><!-- directive문법 -->
  </div>
</template>

<style></style>