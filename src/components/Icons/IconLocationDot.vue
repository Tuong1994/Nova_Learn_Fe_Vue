<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "vue";

defineComponent({ name: "IconLocationDot" });

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
    :icon="['fas', 'location-dot']"
    :class="props.class"
    :style="{ fontSize: `${size}px` }"
    @click="onClick"
  />
</template>
