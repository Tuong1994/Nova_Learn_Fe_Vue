<script lang="ts" setup>
import { defineComponent, withDefaults, defineProps, computed } from "vue";
import { ITableHeader } from "@/common/interface/base";
import TableFilter from "./TableFilter.vue";

defineComponent({ name: "NVLTable" });

interface NVLTableProps {
  header?: string[];
  wrapClass?: string;
  tableClass?: string;
  hasFilter?: boolean;
  hasExpand?: boolean;
}

const props = withDefaults(defineProps<NVLTableProps>(), {
  header: () => [],
});

const tHeaders = computed<ITableHeader[]>(() => {
  const actions = { id: "action", title: "" };
  const headers: ITableHeader[] = props.header.map((head, idx) => ({
    id: String(idx + 1),
    title: head,
  }));

  return props.hasExpand ? [actions, ...headers] : headers;
});
</script>

<template>
  <div :class="['nvl-table', wrapClass]">
    <TableFilter v-if="hasFilter">
      <slot name="filter"></slot>
    </TableFilter>
    <div :class="['table-inner', tableClass]">
      <table>
        <thead>
          <tr>
            <th v-for="head in tHeaders" :key="head.id">
              <div class="table-head">{{ head.title }}</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <slot name="row" :expand="hasExpand"></slot>
        </tbody>
      </table>
    </div>
  </div>
</template>
