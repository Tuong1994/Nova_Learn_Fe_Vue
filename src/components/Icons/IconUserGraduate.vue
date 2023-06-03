<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "vue";

defineComponent({ name: "IconUserGraduate" });

interface Props {
  class?: string | string[];
}

const props = defineProps<Props>();

const emits = defineEmits(["onClick"]);

const onClick = () => emits("onClick");
</script>

<template>
  <fa :icon="['fas', 'user-graduate']" :class="props.class" @click="onClick" />
</template>
