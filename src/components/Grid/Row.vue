<script lang="ts" setup>
import {
  StyleValue,
  computed,
  defineComponent,
  defineProps,
  withDefaults,
} from "vue";

defineComponent({ name: "NVLGridRow" });

interface NVLGridRowProps {
  wrapClass?: string;
  style?: StyleValue;
  gutters?: [number?, number?];
  justify?: "start" | "center" | "spaceBetween" | "spaceEvenly" | "end";
  align?: "base" | "start" | "center" | "end" | "stretch";
}

const props = withDefaults(defineProps<NVLGridRowProps>(), {
  justify: "start",
  align: "base",
  style: () => ({}),
  gutters: () => [],
});

const justifyClass = computed(() => {
  const justifies: any = {
    start: "nvl-grid-row--justify-start",
    center: "nvl-grid-row--justify-center",
    spaceBetween: "nvl-grid-row--justify-between",
    spaceEvenly: "nvl-grid-row--justify-evenly",
    end: "nvl-grid-row--justify-end",
  };
  return justifies[props.justify];
});

const alignClass = computed(() => {
  const aligns: any = {
    base: "nvl-grid-row--align-base",
    start: "nvl-grid-row--align-start",
    center: "nvl-grid-row--align-center",
    end: "nvl-grid-row--align-end",
    stretch: "nvl-grid-row--align-stretch",
  };
  return aligns[props.align];
});

const gutterStyle = computed(() => {
  let style: StyleValue = { gap: "15px" };

  if (props.gutters.length === 1)
    return (style = { gap: `${props.gutters[0]}px` });

  if (props.gutters.length === 2)
    return (style = { gap: `${props.gutters[0]}px ${props.gutters[1]}px` });

  return style;
});
</script>

<template>
  <div
    :class="['nvl-grid-row', justifyClass, alignClass, wrapClass]"
    :style="[style, gutterStyle]"
  >
    <slot></slot>
  </div>
</template>
