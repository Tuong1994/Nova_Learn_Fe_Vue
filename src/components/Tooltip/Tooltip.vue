<script lang="ts" setup>
import { defineComponent, defineProps, withDefaults, computed } from "vue";

defineComponent({ name: "NVLTooltip" });

interface NVLTooltipProps {
  placement?: "left" | "right" | "top" | "bottom";
  wrapClass?: string;
  content?: string;
  contentClass?: string;
  showArrow?: boolean;
}

const props = withDefaults(defineProps<NVLTooltipProps>(), {
  placement: "bottom",
  showArrow: true,
});

const placementClass = computed(() => {
  const placements: any = {
    left: "tooltip-content--left",
    right: "tooltip-content--right",
    top: "tooltip-content--top",
    bottom: "tooltip-content--bottom",
  };
  return placements[props.placement];
});
</script>

<template>
  <div :class="['nvl-tooltip', wrapClass]">
    <slot></slot>
    <div :class="['tooltip-content', placementClass, contentClass]">
      <span v-if="showArrow" class="content-arrow--left"></span>
      <span v-if="showArrow" class="content-arrow--right"></span>
      <span v-if="showArrow" class="content-arrow--bottom"></span>
      <span v-if="showArrow" class="content-arrow--top"></span>

      <div class="content-inner">
        {{ content }}
      </div>
    </div>
  </div>
</template>
