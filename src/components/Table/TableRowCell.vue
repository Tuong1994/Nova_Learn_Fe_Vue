<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { TableColumn } from "@/common/interface/table";

defineComponent({ name: "NVLTableRowCell" });

interface NVLTableRowCellProps {
  item: any;
  idx: number;
  column: TableColumn<any>;
}

defineProps<NVLTableRowCellProps>();
</script>

<template>
  <td>
    <div v-if="column.component" class="table-cell">
      <component
        :is="column.component(item, idx).node"
        v-bind="column.component(item, idx).props"
      />
    </div>

    <div
      v-else-if="column.render"
      v-html="column.render(item, idx)"
      class="table-cell"
    ></div>

    <div v-else class="table-cell">
      {{ item[column.dataIndex] }}
    </div>
  </td>
</template>
