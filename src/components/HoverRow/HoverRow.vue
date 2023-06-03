<script lang="ts" setup>
import { StyleValue, defineComponent, defineProps } from "vue";

defineComponent({ name: "NVLHoverRow" });

interface NVLHoverRowProps {
  wrapClass?: string;
  style?: StyleValue;
}

defineProps<NVLHoverRowProps>();
</script>

<template>
  <div :class="['nvl-hover-row', wrapClass]" :style="style">
    <slot></slot>
  </div>
</template>
