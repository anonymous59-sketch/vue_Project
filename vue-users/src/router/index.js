import { createRouter, createWebHistory } from "vue-router";
import AppTop from "../views/AppTop.vue";

const router = createRouter({
  // history 모드를 사용 => Javascript의 history 객체와 vue r outer 연동
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: AppTop,
    },
    {
      path: "/member/list",
      name: "memberList",
      component: () => import("../views/member/MemberList.vue"),
    },
    {
      path: "/member/detail/:id",
      name: "memberDetail",
      component: () => import("../views/member/MemberDetail.vue"),
    },
    {
      path: "/member/add",
      name: "memberAdd",
      component: () => import("../views/member/MemberAdd.vue"),
    },
  ],
});

export default router;
