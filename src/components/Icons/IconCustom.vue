<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "vue";

defineComponent({ name: "IconCustom" });

interface Props {
  class?: string | string[];
  icon?: string;
}

const props = defineProps<Props>();

const emits = defineEmits(["onClick"]);

const onClick = () => emits("onClick");
</script>

<template>
  <fa :icon="['fas', icon]" :class="props.class" @click="onClick" />
</template>
