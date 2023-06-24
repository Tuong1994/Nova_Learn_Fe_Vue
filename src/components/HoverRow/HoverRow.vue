<script lang="ts" setup>
import {
  StyleValue,
  defineComponent,
  defineProps,
  defineEmits,
  withDefaults,
  computed,
} from "vue";

defineComponent({ name: "NVLHoverRow" });

interface NVLHoverRowProps {
  wrapClass?: string;
  isActive?: boolean;
  style?: StyleValue;
  theme?: "light" | "dark";
}

const props = withDefaults(defineProps<NVLHoverRowProps>(), {
  theme: "dark",
});

const emits = defineEmits(["onHover"]);

const activeClass = computed(() => props.isActive && "nvl-hover-row--active");

const themeClass = computed(() => {
  const themes: any = {
    dark: "nvl-hover-row--dark",
    light: "nvl-hover-row--light",
  };
  return themes[props.theme];
});

const onMouseEnter = () => emits("onHover");
</script>

<template>
  <div
    :class="['nvl-hover-row', themeClass, activeClass, wrapClass]"
    :style="style"
    @mouseenter="onMouseEnter"
  >
    <slot></slot>
  </div>
</template>
