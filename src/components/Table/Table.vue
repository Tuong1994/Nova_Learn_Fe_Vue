<script lang="ts" setup>
import {
  computed,
  defineComponent,
  defineProps,
  defineEmits,
  withDefaults,
  ref,
} from "vue";
import { Columns } from "@/common/interface/table";
import TableRow from "./TableRow.vue";
import TableHeadCell from "./TableHeadCell.vue";
import TableHeadCheckBox from "./TableHeadCheckBox.vue";
import TableHeadActions from "./TableHeadActions.vue";
import TableFilter from "./TableFilter.vue";
import LoadingLine from "../Loading/LoadingLine.vue";

defineComponent({ name: "NVLTable" });

interface NVLTableProps {
  wrapClass?: string;
  tableClass?: string;
  rowKey?: string;
  hasSelection?: boolean;
  hasExpand?: boolean;
  hasFilter?: boolean;
  loading?: boolean;
  dataSource: any[];
  expandDataSource?: any[];
  columns: Columns<any>;
  expandColumns?: Columns<any>;
}

const props = withDefaults(defineProps<NVLTableProps>(), {
  rowKey: "id",
  hasExpand: false,
  hasFilter: false,
  hasSelection: false,
  expandDataSource: () => [],
  expandColumns: () => [],
});

const emits = defineEmits(["onRowsSelect", "onRemove"]);

const rowSelectedKeys = ref<string[]>([]);

// When selected 1 row => show check mixed icon
const isMixed = computed<boolean>(
  () =>
    rowSelectedKeys.value.length > 0 &&
    rowSelectedKeys.value.length < props.dataSource.length
);

// When selected all rows => show check all icon
const isCheckedAll = computed<boolean>(
  () =>
    rowSelectedKeys.value.length > 0 &&
    rowSelectedKeys.value.length === props.dataSource.length
);

// When selected all rows => thead actions will span all columns
const tHeadColSpan = computed<number>(() => {
  if (props.hasExpand) return props.columns.length + 1;
  return props.columns.length;
});

// Handle select single row
const onSelect = (e: Event) => {
  const key = (e.target as HTMLInputElement).value;
  if (rowSelectedKeys.value.includes(key))
    rowSelectedKeys.value = rowSelectedKeys.value.filter((k) => k !== key);
  else rowSelectedKeys.value.push(key);

  emits("onRowsSelect", rowSelectedKeys.value);
};

// Handle select all rows
const onSelectAll = () => {
  if (
    rowSelectedKeys.value.length > 0 &&
    rowSelectedKeys.value.length === props.dataSource.length
  )
    rowSelectedKeys.value = [];
  else rowSelectedKeys.value = props.dataSource.map((data) => data.id);

  emits("onRowsSelect", rowSelectedKeys.value);
};

// Handle remove
const onRemove = () => emits("onRemove");

// Handle cancel
const onCancel = () => {
  rowSelectedKeys.value = [];
  emits("onRowsSelect", rowSelectedKeys.value);
};
</script>

<template>
  <div :class="['nvl-table', wrapClass]">
    <!-- Table filter -->
    <TableFilter v-if="hasFilter">
      <slot name="filter"></slot>
    </TableFilter>

    <div :class="['table-inner', tableClass]">
      <!-- Table loading -->
      <div v-if="loading" class="inner-loading">
        <LoadingLine />
      </div>

      <!-- Table inner -->
      <table>
        <thead>
          <tr>
            <!-- Table head expand -->
            <th v-if="hasExpand" />

            <!-- Table head checkbox -->
            <TableHeadCheckBox
              v-if="hasSelection"
              :isMixed="isMixed"
              :isCheckedAll="isCheckedAll"
              @onSelectAll="onSelectAll"
            />

            <!-- Table head -->
            <TableHeadCell
              v-if="rowSelectedKeys.length === 0"
              :columns="columns"
            />

            <!-- Table head actions -->
            <TableHeadActions
              v-if="rowSelectedKeys.length > 0"
              :tHeadColSpan="tHeadColSpan"
              @onRemove="onRemove"
              @onCancel="onCancel"
            />
          </tr>
        </thead>

        <tbody>
          <TableRow
            v-for="(item, idx) in dataSource"
            :key="item[rowKey]"
            :item="item"
            :idx="idx"
            :rowKey="rowKey"
            :columns="columns"
            :expandDataSource="expandDataSource"
            :expandColumns="expandColumns"
            :rowSelectedKeys="rowSelectedKeys"
            :hasExpand="hasExpand"
            :hasSelection="hasSelection"
            @onSelect="onSelect"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>
