<script lang="ts" setup>
import { defineComponent } from "vue";
import Header from "../../components/Header/Header.vue";
import Footer from "../../components/Footer/Footer.vue";
import Layout from "../../components/Layout/Layout.vue";

defineComponent({ name: "MainView" });
</script>

<template>
  <Header />

  <Layout>
    <router-view />
  </Layout>

  <Footer />
</template>
