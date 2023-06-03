<script lang="ts" setup>
import {
  defineComponent,
  withDefaults,
  defineProps,
  useSlots,
  computed,
  StyleValue,
} from "vue";

defineComponent({ name: "NVLDivider" });

interface NVLDividerProps {
  wrapClass?: string;
  contentClass?: string;
  contentPlacement?: "left" | "center" | "right";
  style?: StyleValue;
}

const props = withDefaults(defineProps<NVLDividerProps>(), {
  contentPlacement: "center",
});

const slots = useSlots();

const contentPlacementClass = computed(() => {
  const placements: any = {
    left: "divider-content--left",
    center: "divider-content--center",
    right: "divider-content--right",
  };
  return placements[props.contentPlacement];
});

const showContent = () => !!slots.content;
</script>

<template>
  <div :class="['nvl-divider', wrapClass]" :style="style">
    <span
      v-if="showContent()"
      :class="['divider-content', contentPlacementClass, contentClass]"
    >
      <slot name="content"></slot>
    </span>
  </div>
</template>
