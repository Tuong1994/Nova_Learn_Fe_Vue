<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";

defineComponent({ name: "NVLTableCell" });

interface NVLTableCellProps {
  className?: string;
}

defineProps<NVLTableCellProps>();
</script>

<template>
  <td>
    <div :class="['table-cell', className]">
      <slot></slot>
    </div>
  </td>
</template>
