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
          <tr v-for="(item, idx) in dataSource" :key="item[rowKey]">
            <td v-for="column in columns" :key="column.id">
              <div v-if="column.component" class="table-cell">
                <component
                  :is="column.component(item, idx).node"
                  v-bind="column.component(item, idx).props"
                />
              </div>

              <div
                v-else-if="column.render"
                v-html="column.render(item)"
                class="table-cell"
              ></div>

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
