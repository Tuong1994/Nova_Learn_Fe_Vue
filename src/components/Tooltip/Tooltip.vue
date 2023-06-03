<script lang="ts" setup>
import { defineComponent, defineProps, withDefaults, computed } from "vue";

defineComponent({ name: "NVLTooltip" });

interface NVLTooltipProps {
  placement?: "left" | "right" | "top" | "bottom";
  wrapClass?: string;
  content?: string;
  contentClass?: string;
}

const props = withDefaults(defineProps<NVLTooltipProps>(), {
  placement: "bottom",
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
      <div class="content-inner">
        {{ content }}
      </div>
    </div>
  </div>
</template>
