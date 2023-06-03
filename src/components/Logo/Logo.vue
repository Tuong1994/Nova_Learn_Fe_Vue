<script lang="ts" setup>
import { defineComponent, defineProps, withDefaults } from "vue";

defineComponent({ name: "NVLLogo" });

interface NVLLogoProps {
  theme?: "dark" | "light";
}

withDefaults(defineProps<NVLLogoProps>(), {
  theme: "light",
});
</script>

<template>
  <router-link
    to="/"
    :class="['nvl-logo', theme === 'dark' ? 'nvl-logo--white' : '']"
  >
    <div class="logo-text">
      <div class="text-first">N</div>
      <div class="text-middle">OVA</div>
      <div class="text-line">-</div>
      <div class="text-last">learn</div>
    </div>
    <div class="logo-line">
      <div class="line-first"></div>
      <div class="line-last"></div>
    </div>
  </router-link>
</template>
