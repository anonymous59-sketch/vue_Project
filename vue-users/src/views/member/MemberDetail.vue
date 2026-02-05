<script setup>
import { RouterLink, useRoute } from "vue-router";
import { onBeforeMount, ref } from "vue";
const route = useRoute(); // 호출 할 때 넘겨받은 정보를 가져온다. params 방식
const memId = route.params.id;
// console.log(memId);
const infoMember = ref({});
const server = "https://jsonplaceholder.typicode.com";
const findMemberById = async (memberId) => {
  const info = await fetch(`${server}/users/${memberId}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
  // console.log(info);
  infoMember.value = info;
};

onBeforeMount(() => {
  findMemberById(memId);
})
</script>

<template>
  <h1>회원 관리</h1>
  <p>
    <RouterLink :to="{ name: 'main' }">TOP</RouterLink> >
    <RouterLink :to="{ name: 'memberList' }">회원 리스트</RouterLink>
    > 회원 상세정보
  </p>
  <h3>회원 상세 정보</h3>
  <div>
    <div><span>ID </span>{{infoMember.id}}</div>
    <div><span>이름 </span>{{infoMember.name}}</div>
    <div><span>이메일 </span>{{ infoMember.email }}</div>
    <div><span>연락처 </span>{{ infoMember.phone }}</div>
  </div>
</template>

<style scoped>
span {
  font-weight: bold;
}
</style>
