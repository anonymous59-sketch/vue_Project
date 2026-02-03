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
  });
  //// css 
  const txtColorPink = ref("Fuchsia"); // color 이름은 css color에서 사이트를 참고한다.
  const backColorGreen = ref("ForestGreen");
  const styleAttribute = reactive({
    color: "Fuchsia",
    "background-color": "ForestGreen", // backgroundColor, background-color 표기법 차이(vue가 자동처리)
  });
  // class 
  const classInfo = ref("txtColorRed txtSize24"); // 쉬운 표현이지만 효용성이 낮음
  const isTxtColorRed = ref(true);
  const isBgColorBlue = ref(true);
  const classStyles = reactive({
    txtColorRed: true,
    bgColorBlue: false,
    txtSize24: true,
  });
  const msg = ref("Hello, World!");
</script>

<template>
  <h2>특정 속성의 경우</h2>
  <p v-html="info"></p> <!-- innerHTML -->
  <p v-text="info"></p> <!-- innertext -->
  <p>vuejs 공식 사이트 : {{ info }}</p>
  <hr>
  <h2>일반 속성의 경우</h2>
  <p><a href="https://vuejs.org" v-bind:style="{color : txtColorPink, backgroundColor: backColorGreen}">vue.js 사이트</a></p> 
  <!-- 스타일처럼 여러 값을 줘야하는 속성은 객체타입으로 준다 -->
  <p><a v-bind:href="url">Vue.js</a></p>
  <p><a v-bind:href="url + '/guide/introduction.html'" v-bind:style="styleAttribute">Vue.js 가이드 페이지</a></p>
  <p><button v-bind:disabled="isDisabled">동의합니다.</button></p>
  <p><img v-bind="imgAttribute" alt="vue 로고"></p> <!-- 속성 순서에 따라 덮어쓰는게 다르다. -->
  
  <hr>
  <h3>Class 속성</h3>
  <p id="cp" v-bind:class="classInfo">{{ msg }}</p>
  <p v-bind:class="{txtColorRed: isTxtColorRed, bgColorBlue: isBgColorBlue}">{{ msg }}</p>
  <p v-bind:class="classStyles">{{ msg }}</p>
</template>

<style scoped>
  .txtColorRed {
    color: red;
  }

  .txt-color-pink {
    color: pink
  }

  .bgColorBlue {
    background-color: blue;
  }

  .txtSize24 {
    font-size: 24px;
  }
</style>