<script lang="ts" setup>
import { defineComponent, defineProps, withDefaults } from "vue";
import { Columns } from "@/common/interface/table";

defineComponent({ name: "NVLTableExpand" });

interface NVLTableExpandProps {
  dataSource: any[];
  columns: Columns<any>;
  rowKey?: string;
}

withDefaults(defineProps<NVLTableExpandProps>(), {
  rowKey: "id",
});
</script>

<template>
  <div class="nvl-table">
    <div class="table-inner">
      <table>
        <thead>
          <tr>
            <th v-for="column in columns" :key="column.id">
              <div class="table-head">
                {{ column.title }}
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in dataSource" :key="item[rowKey]">
            <td v-for="column in columns" :key="column.id">
              <component v-if="column.component" :is="column.component" />

              <div v-else-if="column.render" v-html="column.render(item)"></div>

              <div v-else class="table-cell">
                {{ item[column.dataIndex] }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
