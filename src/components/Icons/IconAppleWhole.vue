<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "vue";

defineComponent({ name: "IconAppleWhole" });

interface Props {
  class?: string | string[];
  size?: number;
}

const props = defineProps<Props>();

const emits = defineEmits(["onClick"]);

const onClick = () => emits("onClick");
</script>

<template>
  <fa
    :icon="['fas', 'apple-whole']"
    :class="props.class"
    :style="{ fontSize: `${size}px` }"
    @click="onClick"
  />
</template>
