<script lang="ts" setup>
import { IBreadCrumbItem } from "@/common/interface/base";
import {
  StyleValue,
  computed,
  defineComponent,
  defineProps,
  withDefaults,
} from "vue";

defineComponent({ name: "NVLBreadCrumb" });

interface NVLBreadCrumbProps {
  wrapClass?: string;
  separator?: string;
  items?: IBreadCrumbItem[];
  style?: StyleValue;
  theme?: "dark" | "light";
}

const props = withDefaults(defineProps<NVLBreadCrumbProps>(), {
  separator: "/",
  theme: "dark",
  items: () => [],
});

const themeClass = computed(() => {
  const themes: any = {
    dark: "nvl-breadcrumb--dark",
    light: "nvl-breadcrumb--light",
  };
  return themes[props.theme];
});
</script>

<template>
  <div :class="['nvl-breadcrumb', themeClass, wrapClass]" :style="style">
    <div v-for="item in items" :key="item.id" class="breadcrumb-item">
      <router-link :to="item.link" class="item-title">
        {{ item.title }}
      </router-link>
      <div class="item-separator">
        {{ separator }}
      </div>
    </div>
  </div>
</template>
