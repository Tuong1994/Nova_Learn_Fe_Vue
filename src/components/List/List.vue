<script lang="ts" setup>
import { StyleValue, defineComponent, defineProps } from "vue";

defineComponent({ name: "NVLList" });

interface NVLListProps {
  wrapClass?: string;
  style?: StyleValue;
}

defineProps<NVLListProps>();
</script>

<template>
  <ul :class="['nvl-list', wrapClass]" :style="style">
    <slot></slot>
  </ul>
</template>
