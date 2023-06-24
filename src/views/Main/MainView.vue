<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import Header from "../../components/Header/Header.vue";
import Footer from "../../components/Footer/Footer.vue";
import Layout from "../../components/Layout/Layout.vue";

defineComponent({ name: "MainView" });

interface MainViewProps {
  isLogin: boolean;
}

defineProps<MainViewProps>();
</script>

<template>
  <Header :isLogin="isLogin" />

  <Layout>
    <router-view />
  </Layout>

  <Footer />
</template>
