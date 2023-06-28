<script lang="ts" setup>
import {
  defineComponent,
  defineProps,
  defineEmits,
  ref,
  StyleValue,
  onUpdated,
  onUnmounted,
} from "vue";
import { ISelectOption } from "@/common/interface/base";
import { Langs } from "@/common/lang";
import Button from "@/components/Button/Button.vue";
import IconAngleRight from "@/components/Icons/IconAngleRight.vue";
import IconAngleLeft from "@/components/Icons/IconAngleLeft.vue";
import IconCheck from "@/components/Icons/IconCheck.vue";

defineComponent({ name: "NVLAsyncSelectDropDown" });

interface NVLAsyncSelectDropDownProps {
  langs: Langs;
  isDropdown: boolean;
  dropDownStyle?: StyleValue;
  options: ISelectOption[];
  selectValue: ISelectOption;
  totalPage: number;
  currentPage: number;
}

const props = defineProps<NVLAsyncSelectDropDownProps>();

let time: any;

const render = ref<boolean>(false);

const emits = defineEmits(["onSelect", "onChangePage"]);

const onSelect = (value: string | number) => emits("onSelect", value);

const onChangePage = (type: "prev" | "next") => emits("onChangePage", type);

onUpdated(() => {
  if (props.isDropdown && !render.value) render.value = true;
  else if (!props.isDropdown && render.value)
    time = setTimeout(() => (render.value = false), 200);
});

onUnmounted(() => clearTimeout(time));
</script>

<template>
  <div
    v-if="render"
    :class="['group-select', isDropdown ? 'group-select-active' : '']"
    :style="dropDownStyle"
  >
    <div :class="options.length > 10 ? 'group-select--overflow' : ''">
      <!-- Select option item -->
      <div
        :class="[
          'select-option',
          idx === options.length - 1 ? 'select-option--border' : '',
          selectValue.value === op.value ? 'select-option-selected' : '',
        ]"
        :key="op.label"
        @click="() => onSelect(op.value)"
        v-for="(op, idx) in options"
      >
        <span>{{ op.label }}</span>
        <IconCheck v-if="selectValue.value === op.value" />
      </div>
    </div>

    <!-- Select option empty -->
    <div v-if="!options.length" class="select-option-empty">
      {{ langs?.common.form.optionEmtpy }}
    </div>

    <!-- Select pagination -->
    <div v-if="totalPage > 1" class="select-option-pagination">
      <p class="pagination-content">{{ currentPage }} / {{ totalPage }}</p>
      <div class="pagination-actions">
        <Button
          class="actions-button"
          :disabled="currentPage === 1"
          @onClick="() => onChangePage('prev')"
        >
          <IconAngleLeft class="button-icon" />
        </Button>
        <Button
          class="actions-button"
          :disabled="currentPage === totalPage"
          @onClick="() => onChangePage('next')"
        >
          <IconAngleRight class="button-icon" />
        </Button>
      </div>
    </div>
  </div>
</template>
