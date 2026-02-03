<script setup>
import {ref} from "vue";
const randValue = ref(0);
// 이벤트 핸들러는 매개변수로 보통 이벤트 객체가 넘어오는데 vue에서는 이벤트 객체를 직접적으로 사용하지 않음
const onClickFunc = () => {
  randValue.value = parseInt(Math.random() * 100);
};
const selectTag = (selectedTag) => {
  alert(`Tag : ${selectedTag}`)
}
</script>

<template>
  <h3>On directive 기본</h3>
  <button type="button" v-on:click="onClickFunc" @mouseover="randValue = '멀티이벤트'">클릭</button>
  <p>결과 : {{ randValue }}</p>
  <hr>
  <br>
  <div v-on:click="selectTag('div')">
    div
    <form v-on:click.self.stop="selectTag('form')" @click="selectTag('from1')"> <!-- 해당 태그에 이벤트 발생을 해야지만 이벤트 발생 -->
      form
      <a href="http://www.naver.com" v-on:click.prevent="selectTag('a')" style="display: block;">
        a태그
        <p v-on:click.once="selectTag('p')" v-on:click="selectTag('p1')">네이버</p> <!-- once는 해당 이벤트를 한 번만 실행 -->
      </a>
    </form>
  </div>
  <input @keyup.ctrl.enter="selectTag('input')">
</template>

<style scoped>
div, div * {
  border: 1px solid burlywood;

}
</style>