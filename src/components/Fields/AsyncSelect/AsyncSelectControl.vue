<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "vue";
import { FieldValue, ISelectOption } from "@/common/interface/base";
import { Langs } from "@/common/lang";
import IconXCircle from "@/components/Icons/IconXCircle.vue";
import IconAngleDown from "@/components/Icons/IconAngleDown.vue";

defineComponent({ name: "NVLAsyncSelectControl" });

interface NVLAsyncSelectControlProps {
  langs: Langs;
  label?: string;
  name?: string;
  placeholder?: string;
  inputClass?: string;
  inputValue: string;
  searchValue: string;
  showPrefix: boolean;
  selectValue: ISelectOption;
  isError: FieldValue;
  getSizeClass: any;
}

defineProps<NVLAsyncSelectControlProps>();

const emits = defineEmits([
  "onSearch",
  "onTouch",
  "onDropDown",
  "onClearInput",
]);

const onSearch = (e: Event) => emits("onSearch", e);

const onTouch = () => emits("onTouch");

const onDropDown = () => emits("onDropDown");

const onClearInput = () => emits("onClearInput");
</script>

<template>
  <div
    :class="[
      'group-control',
      isError[String(name)] ? 'group-control-error--border' : '',
      inputClass,
    ]"
  >
    <!-- Input prefix -->
    <div v-if="showPrefix" class="control-prefix">
      <slot name="prefix"></slot>
    </div>
    <!-- Input control -->
    <input
      type="text"
      :class="['control-input', getSizeClass]"
      :id="label"
      :name="name"
      :value="inputValue"
      :placeholder="placeholder ?? langs?.common.form.placeholder.defaultSelect"
      @input="onSearch"
      @focus="onTouch"
      @click="onDropDown"
    />
    <!-- Input icon -->
    <div class="control-icon">
      <IconAngleDown v-if="!searchValue && !selectValue.label" />
      <IconXCircle
        class="icon-x"
        @onClick="onClearInput"
        v-if="searchValue || selectValue.label"
      />
    </div>
  </div>
</template>
