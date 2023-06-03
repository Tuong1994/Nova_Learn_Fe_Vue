<script lang="ts" setup>
import { computed, defineComponent, defineProps, withDefaults } from "vue";

defineComponent({ name: "NVLParagraph" });

interface NVLParagraphProps {
  wrapClass?: string;
  size?: number;
  theme?: "dark" | "light";
  align?: "left" | "center" | "right" | "justify";
}

const props = withDefaults(defineProps<NVLParagraphProps>(), {
  theme: "dark",
  align: "left",
  size: 15,
});

const getThemeClass = computed(() => {
  const themes: any = {
    dark: "nvl-paragraph--dark",
    light: "nvl-paragraph--light",
  };
  return themes[props.theme];
});

const getAlignClass = computed(() => {
  const aligns: any = {
    left: "nvl-paragraph--left",
    center: "nvl-paragraph--center",
    right: "nvl-paragraph--right",
    justify: "nvl-paragraph--justify",
  };
  return aligns[props.align];
});
</script>

<template>
  <p
    :class="['nvl-paragraph', getAlignClass, getThemeClass, wrapClass]"
    :style="{ fontSize: `${size}px` }"
  >
    <slot></slot>
  </p>
</template>
