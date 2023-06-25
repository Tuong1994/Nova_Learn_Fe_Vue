<script lang="ts" setup generic="T extends object">
import { Columns } from "@/common/interface/table";
import { defineComponent, defineProps } from "vue";

defineComponent({ name: "NVLTable" });

interface NVLTableProps {
  wrapClass?: string;
  tableClass?: string;
  dataSource: T[];
  columns: Columns<T>;
  rowKey: keyof T;
}

defineProps<NVLTableProps>();
</script>

<template>
  <div :class="['nvl-table', wrapClass]">
    <div :class="['table-inner', tableClass]">
      <table>
        <thead>
          <!-- Table checkbox head -->
          <tr>
            <th>
              <div class="table-head"></div>
            </th>

            <!-- Table head -->
            <th
              v-for="column in columns"
              :key="column.id"
              :style="{ padding: '10px' }"
            >
              <div class="table-head">{{ column.title }}</div>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, idx) in dataSource" :key="rowKey ? item[String(rowKey)] : idx">
            <!-- Table checkbox cell -->
            <td>
              <div class="table-cell">
                <input type="checkbox" />
              </div>
            </td>

            <!-- Table cell -->
            <td v-for="column in columns" :key="column.id">
              <component v-if="column.component" :is="column.component" />

              <div v-else-if="column.render" v-html="column.render(item)"></div>

              <div v-else class="table-cell">
                {{ item[column.dataIndex] }}
              </div>
            </td>
          </tr>

          <!-- Expand table -->
          <!-- <tr></tr> -->
        </tbody>
      </table>
    </div>
  </div>
</template>
