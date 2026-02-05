<script setup>
// 자식 컴포넌트는 <template> 안에서 태그로 인식됨
import OneSection from "../components/OneSection.vue";
import { ref } from "vue";
const postList = ref([
  { id: 1, name: "김길동", message: "Hello" },
  { id: 2, name: "박길동", message: "Good Morning" },
  { id: 3, name: "최길동", message: "Today is ..." },
]);

const msgHandler = () => {
  alert("자식 컴포넌트의 메세지 처리");
};

const startName = ref("부모");
const startPoint = ref(0);

const createStarPoint = (target, content, name) => {
  console.log(target, content, name);
  startName.value = name;
  startPoint.value = Math.ceil(Math.random() * 5);
};
</script>
<template>
  <h1>컴포넌트 기초</h1>
  <section>
    <h2>컴포넌트 1개</h2>
    <!-- 자식 컴포넌트는 부모 컴포넌트의 화면을 구성하는 일부 -->
    <OneSection :content="'Hello, World'" />
  </section>
  <p>{{ startName }}/별점: {{ startPoint }}</p>
  <section>
    <h2>컴포넌트 여러개</h2>
    <OneSection
      v-for="post in postList"
      :content="post.message"
      :name="post.name"
      @sendMsg="msgHandler"
      @callStarPoint="createStarPoint"
    />
    <!-- 변수가 자동으로 받아와서 쓰는 경우(자식 컴포넌트에서 값이 넘어오는경우)는 ()를 사용하지 말고 
     직접 값을 넘길 수 있는 함수면 ()를 사용해서 용도를 구별할 수 있게 한다. 
     ()가 없이 사용은 모두 가능하긴 한데 용도의 구별을 쉽게 하기 위하여 사용 -->
  </section>
</template>

<style scoped>
section {
  border: 1px solid blue;
  margin: 10px;
}
</style>
