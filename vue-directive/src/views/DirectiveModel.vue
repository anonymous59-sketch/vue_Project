<script setup>
import {ref} from "vue";
const inputNameModel = ref("양방향");
const rCount = ref(5);
const textAreaInput = ref("입력하세요");
const memberType = ref("우수")
const isSelected = ref(true);
const gender = ref('남');
const selectOS = ref(["1", "3"]);
const choiceOS = ref(1);
const num = ref(0);
</script>

<template>
  <!-- v-model : 기본적으로 value 속성에 자동 연결(양방향 바인딩 HTML <=> 변수); input textarea select 
   양방향 변수인 ref 기반의 반응형 객체만 연결하도록 한다.-->
  <h3>input 태그의 type 속성</h3>
  <input type="text" v-model.number="inputNameModel"> <!-- 옵션으로 lazy, number, trim을 사용한다 -->
  <p>{{ inputNameModel }}</p>
  <input type="number" v-model="num"> <!-- number 옵션을 사용하기보다는 type을 number로 사용한다. -->
  <p>{{ num + 1111 }}</p>
  <h3>textarea 태그</h3>
  <textarea name="textarea" id="textarea" v-bind:rows="rCount" v-model="textAreaInput"></textarea>
  <p v-html="textAreaInput.replace(/\n/g, '<br>')"></p>
  <h3>select 태그</h3>
  <select name="select" id="select" v-model="memberType"> <!-- 기본값으로 선택되는 값을 지정할 수 있다. -->
  <option value="일반">일반회원</option>
  <option value="우수">우수회원</option>
  <option value="특별">특별회원</option>
  </select>
  <p>{{ memberType }}</p>
  <!-- checkBox, radio -->
  <hr>
  <h3>체크박스 태그</h3>
  <label for="agree">
    <input type="checkbox" name="agree" id="agree" v-model="isSelected">동의합니다.
  </label>
  <p>{{ isSelected }}</p> <!-- 1개의 체크박스에 대해서는 값이 boolean -->
  <label for="gender">
    <input type="checkbox" name="gender" id="gender" v-model="gender" true-value="여" false-value="남">성별
    <!-- vue에서 제공하는 기능; true와 false 값에 임의로 값을 설정해줄 수 있다. -->
  </label>
  <p>{{ gender }}</p>
  <!-- name 속성을 vue에서는 v-model 통일을 해서 사용하는 형식으로 한다. -->
  <!-- 배열형태로 checkbox의 값을 가지고 온다. -->
  <label for="mac">
    <input type="checkbox" id="mac" v-model="selectOS" value="1">macOS
  </label>
  <label for="windows">
    <input type="checkbox" id="windows" v-model="selectOS" value="2">windows
  </label>
  <label for="linux">
    <input type="checkbox" id="linux" v-model="selectOS" value="3">Linux
  </label>
  <p>{{ selectOS }}</p> <!-- 배열형태 -->
  <!-- 라디오 타입 -->
  <label for="mac1">
    <input type="radio" id="mac1" v-model="choiceOS" value="1">macOS
  </label>
  <label for="windows1">
    <input type="radio" id="windows1" v-model="choiceOS" value="2">windows
  </label>
  <label for="linux1">
    <input type="radio" id="linux1" v-model="choiceOS" value="3">Linux
  </label>
  <p>{{ choiceOS }}</p>   
</template>

<script></script>