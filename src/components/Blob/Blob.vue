<script lang="ts" setup>
import { computed, defineComponent, defineProps, withDefaults } from "vue";

defineComponent({ name: "NVLBlob" });

interface NVLBlobProps {
  wrapClass?: string;
  size?: number;
  color?: "purple" | "blue" | "red" | "orange" | "green";
  position?: "initial" | "relative" | "absolute";
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex?: number;
}

const props = withDefaults(defineProps<NVLBlobProps>(), {
  size: 300,
  color: "purple",
  position: "initial",
});

const getColorClass = computed(() => {
  const colors: any = {
    purple: "nvl-blob--purple",
    blue: "nvl-blob--blue",
    red: "nvl-blob--red",
    orange: "nvl-blob--orange",
    green: "nvl-blob--green",
  };
  return colors[props.color];
});
</script>

<template>
  <div
    :class="['nvl-blob', getColorClass, wrapClass]"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      position,
      top,
      left,
      right,
      bottom,
      zIndex,
    }"
  ></div>
</template>
