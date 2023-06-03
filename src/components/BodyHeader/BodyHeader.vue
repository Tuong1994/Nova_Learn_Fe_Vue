<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";

defineComponent({ name: "NVLBodyHeader" });

interface NVLBodyHeaderProps {
  wrapClass?: string;
}

defineProps<NVLBodyHeaderProps>();
</script>

<template>
  <div :class="['nvl-body-header', wrapClass]">
    <div class="header-title">
      <slot name="title"></slot>
    </div>
    <div class="header-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
