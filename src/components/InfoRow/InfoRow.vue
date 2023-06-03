<script lang="ts" setup>
import {
  StyleValue,
  computed,
  defineComponent,
  defineProps,
  withDefaults,
} from "vue";

defineComponent({ name: "NVLInfoRow" });

interface NVLInfoRowProps {
  title?: string;
  content?: string;
  wrapClass?: string;
  titleClass?: string;
  contentClass?: string;
  style?: StyleValue;
  theme?: "dark" | "light";
}

const props = withDefaults(defineProps<NVLInfoRowProps>(), {
  title: "Title",
  content: "Content",
  theme: "dark",
});

const getThemeClass = computed(() => {
  const themes: any = {
    dark: "nvl-info-row--dark",
    light: "nvl-info-row--light",
  };
  return themes[props.theme];
});
</script>

<template>
  <div :class="['nvl-info-row', getThemeClass, wrapClass]" :style="style">
    <span :class="['row-title', titleClass]">{{ title }}</span>
    <span :class="['row-content', contentClass]">{{ content }}</span>
  </div>
</template>
