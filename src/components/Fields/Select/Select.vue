<script lang="ts" setup>
import {
  defineComponent,
  defineProps,
  defineEmits,
  withDefaults,
  computed,
  ref,
  onMounted,
  StyleValue,
  useSlots,
} from "vue";
import { FieldValue, IRule, ISelectOption } from "@/common/interface/base";
import NoteMessage from "@/components/NoteMessage/NoteMessage.vue";
import SelectControl from "./SelectControl.vue";
import SelectDropDown from "./SelectDropDown.vue";
import useClickOutside from "@/common/hooks/useClickOutside";
import useLang from "@/common/hooks/useLang";
import useValidate from "@/common/hooks/useValidate";

defineComponent({ name: "NVLSelect" });

interface NVLSelectProps {
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
  style?: StyleValue;
  dropDownStyle?: StyleValue;
}

const props = withDefaults(defineProps<NVLSelectProps>(), {
  rules: () => [],
});

const { langs } = useLang();

const slots = useSlots();

const selectRef = ref<HTMLDivElement | null>(null);

const selectValue = ref<ISelectOption>({ label: "", value: 0 });

const searchValue = ref<string>("");

const isTouched = ref<boolean>(false);

const options = ref<ISelectOption[]>([]);

const isError = ref<FieldValue>({});

const showPrefix = computed(() => !!slots.prefix);

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
const onValidate = () => {
  if (!props.rules.length) return;

  const error = useValidate(props.rules, {
    [String(props.name)]: String(selectValue.value.value),
  });

  if (isTouched.value) {
    if (error) isError.value = error;
    else isError.value = {};
  }
};

const isDropdown = useClickOutside(selectRef, onValidate);

const emits = defineEmits(["onChange"]);

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
};

// Clear input value
const onClearInput = () => {
  if (selectValue.value) selectValue.value = { label: "", value: 0 };
  if (searchValue.value) searchValue.value = "";
  emits("onChange", "");
};

// Filter option by search value
const filterOptions = (options: ISelectOption[]) => {
  if (searchValue.value)
    return options.filter((op) =>
      op.label.toLowerCase().includes(searchValue.value.toLowerCase())
    );
  else return options;
};

// Set select value / options by props
onMounted(() => {
  if (props.options) options.value = props.options;
  if (props.value)
    selectValue.value = options.value.find(
      (op) => op.value === props.value
    ) as ISelectOption;
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
    <SelectControl
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
    </SelectControl>

    <!-- Error message -->
    <NoteMessage
      v-if="isError[String(name)]"
      type="error"
      :message="isError[String(name)]"
    />

    <!-- Select options -->
    <SelectDropDown
      :langs="langs"
      :isDropdown="isDropdown"
      :dropDownStyle="dropDownStyle"
      :options="options"
      :selectValue="selectValue"
      :filterOptions="filterOptions"
      @onSelect="onSelect"
    />
  </div>
</template>
