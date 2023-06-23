<script lang="ts" setup>
import {
  defineComponent,
  defineProps,
  withDefaults,
  computed,
  StyleValue,
} from "vue";
import vLazyload from "@/common/directives/vLazyload";

defineComponent({ name: "NVLImage" });

interface NVLImageProps {
  src?: string;
  alt?: string;
  size?: "xs" | "sm" | "md" | "lg";
  fit?: "cover" | "contain" | "fill" | "none";
  wrapClass?: string;
  previewWrapClass?: string;
  style?: StyleValue;
}

const props = withDefaults(defineProps<NVLImageProps>(), {
  src: require("../../assets/images/logo.png"),
  alt: "logo",
  fit: "cover",
  style: () => ({}),
});

const getSizeClass = computed(() => {
  const sizes: any = {
    xs: "nvl-image-xs",
    sm: "nvl-image-sm",
    md: "nvl-image-md",
    lg: "nvl-image-lg",
  };
  return sizes[props.size ?? ""];
});

const getFitClass = computed(() => {
  const fits: any = {
    none: "image--fit-none",
    contain: "image--fit-contain",
    cover: "image--fit-cover",
    fill: "image--fit-fill",
  };
  return fits[props.fit];
});
</script>

<template>
  <div :class="['nvl-image', getSizeClass, wrapClass]" :style="style">
    <img
      v-lazyload
      :class="['image-view', getFitClass]"
      :data-src="src"
      :alt="alt"
    />
  </div>
</template>
