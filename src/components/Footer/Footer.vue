<script lang="ts" setup>
import { defineComponent } from "vue";
import useLang from "@/common/hooks/useLang";
import FooterTop from "./FooterTop.vue";
import FooterBottom from "./FooterBottom.vue";

defineComponent({ name: "NVLFooter" });

const langs = useLang();
</script>

<template>
  <footer class="nvl-footer">
    <FooterTop :langs="langs" />
    <FooterBottom :langs="langs" />
  </footer>
</template>
