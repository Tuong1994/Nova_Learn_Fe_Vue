<script lang="ts" setup>
import { computed, defineComponent, defineProps, withDefaults } from "vue";

defineComponent({ name: "NVLLoadingSpinner" });

interface NVLLoadingSpinnerProps {
  theme?: "dark" | "light";
}

const props = withDefaults(defineProps<NVLLoadingSpinnerProps>(), {
  theme: "dark",
});

const themeClass = computed(() => {
  const themes: any = {
    dark: "spinner-item--dark",
    light: "spinner-item--light",
  };
  return themes[props.theme];
});
</script>

<template>
  <div class="nvl-loading-spinner">
    <span
      v-for="(_, idx) in 4"
      :key="idx"
      :class="['spinner-item', themeClass]"
    ></span>
  </div>
</template>
