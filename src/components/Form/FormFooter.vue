<script lang="ts" setup>
import { StyleValue, defineComponent, defineProps } from "vue";

defineComponent({ name: "NVLFormItem" });

interface NVLFormItemProps {
  wrapClass?: string;
  style?: StyleValue
}

defineProps<NVLFormItemProps>();
</script>

<template>
    <div :class="['nvl-form-footer', wrapClass]" :style="style">
        <slot></slot>
    </div>
</template>
