<script lang="ts" setup>
import {
  defineComponent,
  defineProps,
  defineEmits,
  withDefaults,
  computed,
  ref,
  watch,
  StyleValue,
} from "vue";

defineComponent({ name: "NVLButton" });

interface NVLButtonProps {
  disabled?: boolean;
  variant?: "primary" | "secondary" | "success" | "danger";
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  ghost?: boolean;
  wrapClass?: string;
  style?: StyleValue;
}

const props = withDefaults(defineProps<NVLButtonProps>(), {
  size: "md",
  type: "button",
});

const isRipple = ref<boolean>(false);

const coords = ref<{ x: number; y: number }>({ x: -1, y: -1 });

const variantClass = computed(() => {
  const variants: any = {
    primary: `nvl-button--primary ${
      props.ghost ? "nvl-button-ghost nvl-button-ghost--primary" : ""
    }`,
    secondary: `nvl-button--secondary ${
      props.ghost ? "nvl-button-ghost nvl-button-ghost--secondary" : ""
    }`,
    success: `nvl-button--success ${
      props.ghost ? "nvl-button-ghost nvl-button-ghost--success" : ""
    }`,
    danger: `nvl-button--danger ${
      props.ghost ? "nvl-button-ghost nvl-button-ghost--danger" : ""
    }`,
  };
  return variants[props.variant ?? ""];
});

const sizeClass = computed(() => {
  const sizes: any = {
    sm: "nvl-button-sm",
    md: "nvl-button-md",
    lg: "nvl-button-lg",
  };
  return sizes[props.size];
});

const emits = defineEmits(["onClick"]);

watch(coords, (newValue) => {
  if (newValue.x !== -1 && newValue.y !== -1) {
    isRipple.value = true;

    setTimeout(() => (isRipple.value = false), 300);
  } else {
    isRipple.value = false;
  }
});

watch(isRipple, (newValue) => {
  if (!newValue) coords.value = { x: -1, y: -1 };
});

const onClick = (e: any) => {
  const newCoords = {
    x: e.clientX - e.target.offsetLeft,
    y: e.clientY - e.target.offsetTop,
  };

  coords.value = newCoords;
  emits("onClick");
};
</script>

<template>
  <button
    :disabled="disabled"
    :class="[
      'nvl-button',
      variantClass,
      sizeClass,
      wrapClass,
      disabled ? 'nvl-button--disabled' : '',
    ]"
    :style="style"
    :type="type"
    @click="onClick"
  >
    <div
      v-if="isRipple"
      class="button-ripple"
      :style="{ left: `${coords.x}px`, top: `${coords.y}px` }"
    ></div>
    <slot></slot>
  </button>
</template>
