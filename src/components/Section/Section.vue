<script lang="ts" setup>
import {
  StyleValue,
  defineComponent,
  defineProps,
  defineExpose,
  ref,
} from "vue";

defineComponent({ name: "NVLSection" });

interface NVLSectionProps {
  wrapClass?: string;
  style?: StyleValue;
  id?: string;
}

defineProps<NVLSectionProps>();

const sectionRef = ref<HTMLDivElement | null>(null);

defineExpose({ sectionRef });
</script>

<template>
  <section
    ref="sectionRef"
    :id="id"
    :class="['nvl-section', wrapClass]"
    :style="style"
  >
    <slot></slot>
  </section>
</template>
