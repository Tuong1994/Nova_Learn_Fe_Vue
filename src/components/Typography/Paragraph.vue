<script lang="ts" setup>
import { computed, defineComponent, defineProps, withDefaults } from "vue";

defineComponent({ name: "NVLParagraph" });

interface NVLParagraphProps {
  wrapClass?: string;
  size?: number;
  theme?: "dark" | "light";
  align?: "left" | "center" | "right" | "justify";
  transform?: "uppercase" | "lowercase" | "capitalize" | "none";
}

const props = withDefaults(defineProps<NVLParagraphProps>(), {
  theme: "dark",
  align: "left",
  transform: "none",
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

const transformClass = computed(() => {
  const transforms: any = {
    uppercase: "nvl-paragraph--uppercase",
    lowercase: "nvl-paragraph--lowercase",
    capitalize: "nvl-paragraph--capitalize",
    none: "nvl-paragraph--none",
  };
  return transforms[props.transform];
});
</script>

<template>
  <p
    :class="[
      'nvl-paragraph',
      getAlignClass,
      transformClass,
      getThemeClass,
      wrapClass,
    ]"
    :style="{ fontSize: `${size}px` }"
  >
    <slot></slot>
  </p>
</template>
