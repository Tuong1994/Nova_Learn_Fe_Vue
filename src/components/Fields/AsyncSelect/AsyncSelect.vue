<script lang="ts" setup generic="">
import {
  defineComponent,
  defineProps,
  defineEmits,
  withDefaults,
  ref,
  computed,
  onMounted,
  useSlots,
  StyleValue,
} from "vue";
import { FieldValue, IRule, ISelectOption } from "@/common/interface/base";
import NoteMessage from "@/components/NoteMessage/NoteMessage.vue";
import useClickOutside from "@/common/hooks/useClickOutside";
import useLang from "@/common/hooks/useLang";
import useValidate from "@/common/hooks/useValidate";
import AsyncSelectDropDown from "./AsyncSelectDropDown.vue";
import AsyncSelectControl from "./AsyncSelectControl.vue";

defineComponent({ name: "NVLAsyncSelect" });

interface NVLAsyncSelectProps {
  label?: string;
  name?: string;
  placeholder?: string;
  modelValue?: string;
  wrapClass?: string;
  labelClass?: string;
  inputClass?: string;
  required?: boolean;
  rules?: IRule[];
  size?: "sm" | "md" | "lg";
  value?: string | number;
  options?: ISelectOption[];
  isLoading?: boolean;
  total?: number;
  page?: number;
  limit?: number;
  style?: StyleValue;
  dropDownStyle?: StyleValue;
}

const props = withDefaults(defineProps<NVLAsyncSelectProps>(), {
  page: 1,
  limit: 10,
  total: 0,
  rules: () => [],
});

const { langs } = useLang();

const slots = useSlots();

const selectRef = ref<HTMLDivElement | null>(null);

const selectValue = ref<ISelectOption>({ label: "", value: 0 });

const searchValue = ref<string>("");

const currentPage = ref<number>(props.page);

const isTouched = ref<boolean>(false);

const options = ref<ISelectOption[]>([]);

const isError = ref<FieldValue>({});

const showPrefix = computed(() => !!slots.prefix);

const totalPage = computed(() => Math.ceil(props.total / props.limit));

const getSizeClass = computed(() => {
  const sizes: any = {
    sm: "control-input--sm",
    md: "control-input--md",
    lg: "control-input--lg",
  };
  return sizes[props.size ?? "md"];
});

// Render input value
const inputValue = computed(() => {
  if (selectValue.value.label) return selectValue.value.label;
  else if (searchValue.value) return searchValue.value;
  return "";
});

// Handle validate
const validate = () => {
  if (!props.rules.length) return;

  const error = useValidate(props.rules, {
    [String(props.name)]: String(selectValue.value.value),
  });

  if (isTouched.value) {
    if (error) isError.value = error;
    else isError.value = {};
  }
};

const isDropdown = useClickOutside(selectRef, validate);

const emits = defineEmits(["onChange", "onSearchChange", "onChangePage"]);

const onTouch = () => (isTouched.value = true);

const onDropDown = () => (isDropdown.value = !isDropdown.value);

// Handle select option
const onSelect = (v: string | number) => {
  selectValue.value = options.value.find(
    (op) => op.value === v
  ) as ISelectOption;
  searchValue.value = "";
  emits("onChange", v);
};

// Handle search option
const onSearch = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  selectValue.value.label = "";
  searchValue.value = value;
  emits("onSearchChange", value);
};

// Clear input value
const onClearInput = () => {
  if (selectValue.value) selectValue.value = { label: "", value: 0 };
  if (searchValue.value) searchValue.value = "";
  emits("onChange", "");
};

// Handle change page
const onChangePage = (type: "prev" | "next") => {
  if (type === "prev") currentPage.value -= 1;
  else currentPage.value += 1;
  emits("onChangePage", currentPage.value);
};

// Set select value / options by props
onMounted(() => {
  if (props.options) options.value = props.options;
});
</script>

<template>
  <div :class="['nvl-input-group', wrapClass]" ref="selectRef" :style="style">
    <!-- Label -->
    <label v-if="label" :for="label" :class="['group-label', labelClass]">
      <span v-if="required" class="label-mark">*</span>
      <span>{{ label }}</span>
    </label>

    <!-- Input -->
    <AsyncSelectControl
      :langs="langs"
      :label="label"
      :name="name"
      :placeholder="placeholder"
      :isError="isError"
      :showPrefix="showPrefix"
      :inputValue="inputValue"
      :inputClass="inputClass"
      :searchValue="searchValue"
      :selectValue="selectValue"
      :getSizeClass="getSizeClass"
      @onSearch="onSearch"
      @onDropDown="onDropDown"
      @onTouch="onTouch"
      @onClearInput="onClearInput"
    >
      <template #prefix>
        <slot name="prefix"></slot>
      </template>
    </AsyncSelectControl>

    <!-- Error message -->
    <NoteMessage
      v-if="isError[String(name)]"
      type="error"
      :message="isError[String(name)]"
    />

    <!-- Select options -->
    <AsyncSelectDropDown
      :langs="langs"
      :isDropdown="isDropdown"
      :dropDownStyle="dropDownStyle"
      :options="options"
      :selectValue="selectValue"
      :totalPage="totalPage"
      :currentPage="currentPage"
      @onSelect="onSelect"
      @onChangePage="onChangePage"
    />
  </div>
</template>
