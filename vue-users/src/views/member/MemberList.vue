<script setup>
import { RouterLink, useRouter} from "vue-router";
import { onBeforeMount, ref } from "vue";

const router = useRouter();
const goToDetail = (memberId) => {
  router.push({name : "memberDetail", params: {id : memberId}});
}
const member = ref([]);
const server = "https://jsonplaceholder.typicode.com";
const findMemberList = async () => {
  const list = await fetch(server + "/users")
    .then((res) => res.json())
    .catch((err) => console.error(err));

  console.log(list);
  member.value = list;
};

// lifecycle hook 중 가장 먼저 실행
// lifecycle hook은 script 코드의 가장 마지막에 작성하기!!
onBeforeMount(() => {
  findMemberList();
});
</script>

<template>
  <h1>회원 관리</h1>
  <p><RouterLink :to="{ name: 'main' }">TOP</RouterLink> > 회원 리스트</p>
  <h3>회원 리스트</h3>
  <p>
    신규등록은 <RouterLink :to="{ path: '/member/add' }">여기</RouterLink>를 클릭
  </p>
  <ul>
    <li v-for="info in member" :key="info.id" @click="goToDetail(info.id)">
      ID가 {{ info.id }}인 {{ info.name }}님
      
    <!-- <li v-for="info in member" :key="info.id">
      <RouterLink :to="{ path: `/member/detail/${info.id}`}">
        ID가 {{ info.id }}인 {{ info.name }}님</RouterLink> -->
    </li>

    <!-- <li>
      <RouterLink :to="{ path: '/member/detail/:id' }"
        >ID가 47783인 철수님</RouterLink
      >
    </li> -->
  </ul>
</template>

<style scoped></style>
