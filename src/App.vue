<script lang="ts" setup>
import { useRouter } from "vue-router";
import { computed } from "vue";
import MainView from "@/views/Main/MainView.vue";
import AdminView from "@/views/Admin/AdminView.vue";

const router = useRouter();

const isAdmin = computed<boolean>(() =>
  router.currentRoute.value.path.includes("admin")
);
</script>

<template>
  <MainView v-if="!isAdmin" />

  <AdminView v-if="isAdmin" />
</template>
