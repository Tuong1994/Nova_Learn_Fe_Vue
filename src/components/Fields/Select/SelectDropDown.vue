<script lang="ts" setup>
import {
  StyleValue,
  defineComponent,
  defineProps,
  defineEmits,
  ref,
  onUpdated,
  onUnmounted,
} from "vue";
import { ISelectOption } from "@/common/interface/base";
import { Langs } from "@/common/lang";
import IconCheck from "@/components/Icons/IconCheck.vue";

defineComponent({ name: "NVLSelectDropDown" });

interface NVLSelectDropDownProps {
  langs: Langs;
  isDropdown: boolean;
  options: ISelectOption[];
  dropDownStyle?: StyleValue;
  selectValue: ISelectOption;
  filterOptions: (op: ISelectOption[]) => ISelectOption[];
}

const props = defineProps<NVLSelectDropDownProps>();

const emits = defineEmits(["onSelect"]);

let time: any;

const render = ref<boolean>(false);

const onSelect = (value: string | number) => emits("onSelect", value);

onUpdated(() => {
  if (props.isDropdown && !render.value) render.value = true;
  else if (!props.isDropdown && render.value)
    time = setTimeout(() => (render.value = false), 200);
});

onUnmounted(() => clearTimeout(time))
</script>

<template>
  <div
    v-if="render"
    :class="[
      'group-select',
      isDropdown ? 'group-select-active' : '',
      filterOptions(options).length > 10 ? 'group-select--overflow' : '',
    ]"
    :style="dropDownStyle"
  >
    <!-- Select option item -->
    <div
      :class="[
        'select-option',
        idx === filterOptions(options).length - 1
          ? 'select-option--border'
          : '',
        selectValue.value === op.value ? 'select-option-selected' : '',
      ]"
      :key="op.label"
      @click="() => onSelect(op.value)"
      v-for="(op, idx) in filterOptions(options)"
    >
      <span>{{ op.label }}</span>
      <IconCheck v-if="selectValue.value === op.value" />
    </div>

    <!-- Select option empty -->
    <div v-if="!filterOptions(options).length" class="select-option-empty">
      {{ langs?.common.form.optionEmtpy }}
    </div>
  </div>
</template>
