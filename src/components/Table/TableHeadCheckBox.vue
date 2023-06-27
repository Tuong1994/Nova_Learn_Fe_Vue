<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "vue";
import CheckBox from "../Fields/CheckBox.vue";

defineComponent({ name: "NVLTableHeadCheckBox" });

interface NVLTableHeadCheckBoxProps {
  isMixed: boolean;
  isCheckedAll: boolean;
}

defineProps<NVLTableHeadCheckBoxProps>();

const emits = defineEmits(["onSelectAll"]);

const onSelectAll = () => emits("onSelectAll");
</script>

<template>
  <th class="table-first-col">
    <div class="table-head">
      <div
        v-if="isMixed"
        class="head-checkbox-mixed"
        @click="onSelectAll"
      ></div>

      <CheckBox
        v-if="!isMixed"
        wrapClass="cell-checkbox"
        :checked="isCheckedAll"
        @onChange="onSelectAll"
      />
    </div>
  </th>
</template>
