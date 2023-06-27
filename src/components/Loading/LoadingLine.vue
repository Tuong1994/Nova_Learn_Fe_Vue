<script lang="ts" setup>
import { defineComponent, defineProps, withDefaults, computed } from "vue";

defineComponent({ name: "NVLLoadingLine" });

interface NVLLoadingLineProps {
  theme?: "dark" | "light";
}

const props = withDefaults(defineProps<NVLLoadingLineProps>(), {
  theme: "dark",
});

const themeClass = computed(() => {
  const themes: any = {
    dark: "line-item--dark",
    light: "line-item--light",
  };
  return themes[props.theme];
});
</script>

<template>
  <div class="nvl-loading-line">
    <div
      v-for="(_, idx) in 8"
      :key="idx"
      :class="['line-item', themeClass]"
    ></div>
  </div>
</template>
