<script lang="ts" setup>
import { defineComponent, defineProps, withDefaults, computed, ref } from "vue";
import { ITableHeader } from "@/common/interface/base";
import IconPlus from "../Icons/IconPlus.vue";
import IconMinus from "../Icons/IconMinus.vue";
import Table from "./Table.vue";

defineComponent({ name: "NVLTableRow" });

interface NVLTableRowProps {
  className?: string;
  hasExpand?: boolean;
  expanCols?: number;
}

const props = defineProps<NVLTableRowProps>();

const colSpan = computed(() => {
  if (props.hasExpand && props.expanCols) return props.expanCols + 1;
  return 1;
});

const isExpand = ref<boolean>(false);

const onExpand = () => (isExpand.value = !isExpand.value);
</script>

<template>
  <tr :class="className">
    <td v-if="hasExpand" @click="onExpand">
      <IconPlus v-if="!isExpand" class="cell-icon"  />
      <IconMinus v-if="isExpand" class="cell-icon" />
    </td>
    <slot name="cell"></slot>
  </tr>
  <tr v-if="hasExpand && isExpand">
    <td :colspan="colSpan">
      <slot name="table-expand"></slot>
    </td>
  </tr>
</template>
