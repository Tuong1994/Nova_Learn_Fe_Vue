<script lang="ts" setup>
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import MainView from "@/views/Main/MainView.vue";
import AdminView from "@/views/Admin/AdminView.vue";
import AlertMessage from "./components/AlertMessage/AlertMessage.vue";

const router = useRouter();

const isAdmin = computed<boolean>(() =>
  router.currentRoute.value.path.includes("admin")
);

const isLogin = ref<boolean>(true);
</script>

<template>
  <main>
    <MainView v-if="!isAdmin" :isLogin="isLogin" />

    <AdminView v-if="isAdmin" :isLogin="isLogin" />    

    <AlertMessage />
  </main>
</template>
