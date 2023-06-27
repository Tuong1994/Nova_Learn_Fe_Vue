<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { Columns } from "@/common/interface/table";

defineComponent({ name: "NVLTableHeadCell" });

interface NVLTableHeadCellProps {
  columns: Columns<any>;
}

defineProps<NVLTableHeadCellProps>();
</script>

<template>
  <th v-for="column in columns" :key="column.id">
    <div class="table-head">
      {{ column.title }}
    </div>
  </th>
</template>
