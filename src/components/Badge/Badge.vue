<script lang="ts" setup>
import { defineComponent, defineProps, withDefaults, computed } from "vue";

defineComponent({ name: "NVLBadge" });

interface NVLBadgeProps {
  wrapClass?: string;
  variants?: "info" | "warning" | "success" | "danger";
  type?: "ghost" | "fill";
}

const props = withDefaults(defineProps<NVLBadgeProps>(), {
  type: "ghost",
});

const variantClass = computed(() => {
  const variants: any = {
    info: `nvl-badge-ghost--info ${
      props.type === "fill" ? "nvl-badge-fill nvl-badge-fill--info" : ""
    }`,
    warning: `nvl-badge-ghost--warning ${
      props.type === "fill" ? "nvl-badge-fill nvl-badge-fill--warning" : ""
    }`,
    success: `nvl-badge-ghost--success ${
      props.type === "fill" ? "nvl-badge-fill nvl-badge-fill--success" : ""
    }`,
    danger: `nvl-badge-ghost--danger ${
      props.type === "fill" ? "nvl-badge-fill nvl-badge-fill--danger" : ""
    }`,
  };
  return variants[props.variants ?? ""];
});
</script>

<template>
  <div :class="['nvl-badge', variantClass, wrapClass]">
    <slot></slot>
  </div>
</template>
