<script lang="ts" setup>
import { StyleValue, defineComponent, defineProps } from "vue";

defineComponent({ name: "NVLLinkContent" });

interface NVLLinkContentProps {
  id?: string;
  wrapClass?: string;
  style?: StyleValue;
}

defineProps<NVLLinkContentProps>();
</script>

<template>
  <div :class="['nvl-link-content', wrapClass]" :id="id" :style="style">
    <slot></slot>
  </div>
</template>
