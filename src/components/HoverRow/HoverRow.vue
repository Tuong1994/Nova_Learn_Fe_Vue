<script lang="ts" setup>
import {
  StyleValue,
  defineComponent,
  defineProps,
  defineEmits,
  computed,
} from "vue";

defineComponent({ name: "NVLHoverRow" });

interface NVLHoverRowProps {
  wrapClass?: string;
  isActive?: boolean;
  style?: StyleValue;
}

const props = defineProps<NVLHoverRowProps>();

const activeClass = computed(() => props.isActive && "nvl-hover-row--active");

const emits = defineEmits(["onHover"]);

const onMouseEnter = () => emits("onHover");
</script>

<template>
  <div
    :class="['nvl-hover-row', activeClass, wrapClass]"
    :style="style"
    @mouseenter="onMouseEnter"
  >
    <slot></slot>
  </div>
</template>
