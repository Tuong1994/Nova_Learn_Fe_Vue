<script lang="ts" setup>
import { defineComponent, defineProps, withDefaults } from "vue";

defineComponent({ name: "NVLLoadingSkeleton" });

interface NVLLoadingSkeletonProps {
  wrapClass?: string;
  imgSize?: number;
  lineWidth?: number;
  lineHeight?: number;
  paragraphLines?: number;
  type?: "line" | "img" | "btn" | "paragraph";
}

withDefaults(defineProps<NVLLoadingSkeletonProps>(), {
  type: "line",
  paragraphLines: 4,
});
</script>

<template>
  <!-- Line -->
  <div
    v-if="type === 'line'"
    :style="{ width: `${lineWidth}px`, height: `${lineHeight}px` }"
    :class="['nvl-loading-skeleton nvl-loading-skeleton-line', wrapClass]"
  ></div>

  <!-- Img -->
  <div
    v-if="type === 'img'"
    :style="{ width: `${imgSize}px`, height: `${imgSize}px` }"
    :class="['nvl-loading-skeleton nvl-loading-skeleton-img', wrapClass]"
  ></div>

  <!-- Btn -->
  <div
    v-if="type === 'btn'"
    :class="['nvl-loading-skeleton nvl-loading-skeleton-btn', wrapClass]"
  ></div>

  <!-- Paragraph -->
  <div
    v-if="type === 'paragraph'"
    :class="['nvl-loading-skeleton-paragraph', wrapClass]"
  >
    <div
      v-for="line in paragraphLines"
      :key="line"
      :class="['nvl-loading-skeleton nvl-loading-skeleton-line']"
    ></div>
  </div>
</template>
