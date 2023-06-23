<script lang="ts" setup>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import Layout from "./components/Layout/Layout.vue";
</script>

<template>
  <Header />

  <Layout>
    <router-view />
  </Layout>

  <Footer />
</template>
