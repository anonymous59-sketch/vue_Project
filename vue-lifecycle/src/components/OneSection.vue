<script setup>
import { ref, defineProps, defineEmits } from "vue";
// const content = ref("");
// defineProps(["content", "name"]); /* props는 readOnly라서 양뱡향 directive를 사용하면 안된다. */
const props = defineProps({
  /* 추천하는 정의 방식 */
  title /* 변수이름 */: {
    type: String /* 문자열 타입으로 */,
    default: "no title", // 기본값(부모가 데이터를 주지 않을 경우 사용할 기본값)
  },
  content: {
    type: [String, Object] /* 문자열, 객체도 가능 */,
    required: true, // 필수값 (부모가 반드시 데이터를 줘야 함) 에러를 일으킬정도로 강제성이 있는 건 아님, 훗날 유지보수를 위해 적어두는 이정표역할
  },
  name: {
    type: [String, Object],
    required: false,
    default: "이름 데이터 없음",
  },
});

// emit : 자식 => 부모, 데이터 전달 방식
// 1> event(message)를 정의
const emit = defineEmits(["sendMsg", "callStarPoint"]);
// 2) event를 발생
const emitTest = () => {
  emit("sendMsg"); // 단순히 메세지만 전달
};

const randomVal = () => {
  // 부모에게 전달할 데이터도 포함
  emit(
    "callStarPoint" /* 메세지 */,
    "자식" /* 데이터(갯수 제한 없고 객체든 배열이든 넘길 수 있음) */,
    props.content /* script 안에서 사용하려면 defineProps를 변수로 담고 그걸 객체처럼 사용할 수 있다. */,
    props.name,
  );
};
</script>

<template>
  <section class="box">
    <h4>현재의 컴포넌트</h4>
    <p>{{ title }}</p>
    <p>{{ name }}</p>
    <p>{{ content }}</p>
    <!-- <input type="text" v-model="content" /> -->
    <button type="button" @mouseover="emitTest" @click="randomVal">클릭</button>
  </section>
</template>

<style scoped>
.box {
  border: 1px dashed green;
  margin: 10px;
}
</style>
