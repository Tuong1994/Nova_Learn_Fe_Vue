<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits, ref, computed } from "vue";
import { Columns } from "@/common/interface/table";
import CheckBox from "../Fields/CheckBox.vue";
import IconPlus from "../Icons/IconPlus.vue";
import IconMinus from "../Icons/IconMinus.vue";
import TableExpand from "./TableExpand.vue";
import TableRowCell from "./TableRowCell.vue";

defineComponent({ name: "NVLTableRow" });

interface NVLTableRowProps {
  item: any;
  idx: number;
  rowKey: string;
  rowSelectedKeys: string[];
  expandDataSource: any[];
  expandColumns: Columns<any>;
  columns: Columns<any>;
  hasExpand: boolean;
  hasSelection: boolean;
}

const props = defineProps<NVLTableRowProps>();

const isExpand = ref<boolean>(false);

const isSelected = computed<boolean>(() =>
  props.rowSelectedKeys.includes(props.item.id)
);

const emits = defineEmits(["onSelect"]);

const onSelect = (e: Event) => emits("onSelect", e);

const onExpand = () => (isExpand.value = !isExpand.value);
</script>

<template>
  <tr :class="isSelected ? 'row-active' : ''">
    <!-- Table expand cell -->
    <td v-if="hasExpand">
      <div class="table-cell">
        <IconPlus v-if="!isExpand" class="cell-icon" @onClick="onExpand" />
        <IconMinus v-if="isExpand" class="cell-icon" @onClick="onExpand" />
      </div>
    </td>

    <!-- Table checkbox cell -->
    <td class="table-first-col" v-if="hasSelection">
      <div class="table-cell">
        <CheckBox
          wrapClass="cell-checkbox"
          :value="item.id"
          :checked="rowSelectedKeys.includes(String(item.id))"
          @onChange="onSelect"
        />
      </div>
    </td>

    <!-- Table cell -->
    <TableRowCell
      v-for="column in columns"
      :key="column.id"
      :column="column"
      :item="item"
      :idx="idx"
    />
  </tr>

  <tr v-if="isExpand">
    <td />
    <td :colspan="columns.length + 1">
      <TableExpand :dataSource="expandColumns" :columns="expandColumns" />
    </td>
  </tr>
</template>
