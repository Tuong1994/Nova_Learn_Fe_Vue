<script lang="ts" setup>
import {
  StyleValue,
  computed,
  defineComponent,
  defineProps,
  withDefaults,
} from "vue";

defineComponent({ name: "NVLTitle" });

interface NVLTitleProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  align?: "left" | "center" | "right";
  theme?: "dark" | "light";
  wrapClass?: string;
  style?: StyleValue;
}

const props = withDefaults(defineProps<NVLTitleProps>(), {
  align: "left",
  theme: "dark",
});

const alignClass = computed(() => {
  const aligns: any = {
    left: "nvl-title--left",
    right: "nvl-title--right",
    center: "nvl-title--center",
  };
  return aligns[props.align];
});

const themeClass = computed(() => {
  const themes: any = {
    dark: "nvl-title--dark",
    light: "nvl-title--light",
  };
  return themes[props.theme];
});
</script>

<template>
  <h1
    :class="['nvl-title nvl-title-h1', alignClass, themeClass, wrapClass]"
    :style="style"
    v-if="level && level === 1"
  >
    <slot></slot>
  </h1>
  <h2
    :class="['nvl-title nvl-title-h2', alignClass, themeClass, wrapClass]"
    :style="style"
    v-if="level && level === 2"
  >
    <slot></slot>
  </h2>
  <h3
    :class="['nvl-title nvl-title-h3', alignClass, themeClass, wrapClass]"
    :style="style"
    v-if="level && level === 3"
  >
    <slot></slot>
  </h3>
  <h4
    :class="['nvl-title nvl-title-h4', alignClass, themeClass, wrapClass]"
    :style="style"
    v-if="level && level === 4"
  >
    <slot></slot>
  </h4>
  <h5
    :class="['nvl-title nvl-title-h5', alignClass, themeClass, wrapClass]"
    :style="style"
    v-if="level && level === 5"
  >
    <slot></slot>
  </h5>
  <h6
    :class="['nvl-title nvl-title-h6', alignClass, themeClass, wrapClass]"
    :style="style"
    v-if="level && level === 6"
  >
    <slot></slot>
  </h6>
</template>
