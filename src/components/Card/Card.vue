<script lang="ts" setup>
import { StyleValue, defineComponent, defineProps, useSlots } from "vue";

defineComponent({ name: "NVLCard" });

interface NVLCardProps {
  isHover?: boolean;
  wrapClass?: string;
  headerClass?: string;
  bodyClass?: string;
  style?: StyleValue;
  headerStyle?: StyleValue;
  bodyStyle?: StyleValue;
}

defineProps<NVLCardProps>();

const slots = useSlots();

const showHeader = () => !!slots.header;

const showBody = () => !!slots.body;
</script>

<template>
  <div
    :class="['nvl-card', isHover ? 'nvl-card--hover' : '', wrapClass]"
    :style="style"
  >
    <div
      v-if="showHeader()"
      :class="['card-header', headerClass]"
      :style="headerStyle"
    >
      <slot name="header"></slot>
    </div>
    <div v-if="showBody()" :class="['card-body', bodyClass]" :style="bodyStyle">
      <slot name="body"></slot>
    </div>
  </div>
</template>
