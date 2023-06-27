<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "vue";

defineComponent({ name: "IconPen" });

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
    :icon="['fas', 'pen']"
    :class="props.class"
    :style="{ fontSize: `${size}px` }"
    @click="onClick"
  />
</template>
