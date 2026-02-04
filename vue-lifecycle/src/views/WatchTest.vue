<script setup>
import {ref, computed, watch} from "vue";

const forbiddenInput = ref("바보, 멍청이");
const memoContent = ref("");
// 알림메세지
const message = ref("");
// 비활성화 제어
const isBlocked = ref(false);

const forbiddenwords = computed(() => forbiddenInput.value.split(","));

// 본문내용 감시 => 금지어 사용했는지 확인 필요
watch(memoContent, (newValue, oldValue) => {
  // console.log("감시자", newValue, oldValue);
  for(let i = 0; i < forbiddenwords.value.length; i++) {
    let word = forbiddenwords.value[i].trim(); /* 공백 있으면 없애기 */
    if(newValue.includes(word)) {
      // 금지어가 포함된 경우
      message.value = `경고 : [${word}]은 금지어입니다. 입력이 차단되었습니다.`;
      isBlocked.value = true;
    }
  }
})

const resetAll = () => {
  memoContent.value = "";
  message.value = "";
  isBlocked.value = false;
}
</script>

<template>
  <h3>콘텐츠 보안 적용</h3>
  <div>
    <label>금지어 설정 : </label>
    <input v-model="forbiddenInput" type="text" placeholder="금지이름 쉼표로 구분">
      <div>
        <textarea v-model="memoContent" :disabled="isBlocked" placeholder="내용을 입력하세요..." rows="10" cols="50"></textarea>
      </div>
    </input>
    
    <p v-if="message" style="color : red; font-weight: bold;">{{ message }}</p>
    <button type="button" v-show="isBlocked" @click="resetAll">시스템 초기화</button>
  </div>
</template>

<style scoped>
</style>