<script lang="ts" setup>
import {
  defineComponent,
  withDefaults,
  defineProps,
  defineEmits,
  ref,
  computed,
  StyleValue,
  watchEffect,
} from "vue";
import { IRule, FieldValue } from "@/common/interface/base";
import { useStore } from "@/store";
import NoteMessage from "@/components/NoteMessage/NoteMessage.vue";
import DatePickerControl from "./DatePickerControl.vue";
import DatePickerCalendar from "./DatePickerCalendar.vue";
import useLang from "@/common/hooks/useLang";
import useValidate from "@/common/hooks/useValidate";
import useClickOutside from "@/common/hooks/useClickOutside";

defineComponent({ name: "NVLDatePicker" });

interface NVLDatePickerProps {
  label?: string;
  name?: string;
  wrapClass?: string;
  labelClass?: string;
  inputClass?: string;
  required?: boolean;
  rules?: IRule[];
  value?: Date;
  dateFormat?: string;
  style?: StyleValue;
  size?: "sm" | "md" | "lg";
}

const props = withDefaults(defineProps<NVLDatePickerProps>(), {
  rules: () => [],
  value: () => new Date(),
  dateFormat: "DD/MM/YYYY",
});

const emits = defineEmits(["onChange"]);

const { langs } = useLang();

const store = useStore();

const selectedValue = ref<Date>(props.value);

const isTouched = ref<boolean>(false);

const isError = ref<FieldValue>({});

const datePickerRef = ref<HTMLDivElement | null>(null);

const isDropDown = useClickOutside(datePickerRef);

const getSizeClass = computed(() => {
  const sizes: any = {
    sm: "control-input--sm",
    md: "control-input--md",
    lg: "control-input--lg",
  };
  return sizes[props.size ?? "md"];
});

const onChange = (d: Date) => {
  selectedValue.value = d;

  emits("onChange", d);
};

const onDropDown = () => (isDropDown.value = !isDropDown.value);

const onValidate = () => {
  if (!props.rules.length) return;

  const error = useValidate(props.rules, {
    [String(props.name)]: "",
  });

  if (isTouched.value) {
    if (error) isError.value = error;
    else isError.value = {};
  }
};

watchEffect(() => {
  if (store.getters.getError) isError.value = store.getters.getError;
});
</script>

<template>
  <div
    :style="style"
    :class="['nvl-input-group', wrapClass]"
    ref="datePickerRef"
  >
    <!-- Label -->
    <label v-if="label" :class="['group-label', labelClass]">
      <span v-if="required" class="label-mark">*</span>
      <span>{{ label }}</span>
    </label>

    <!-- Input -->
    <DatePickerControl
      :langs="langs"
      :name="name"
      :isError="isError"
      :inputClass="inputClass"
      :dateFormat="dateFormat"
      :selectedValue="selectedValue"
      :getSizeClass="getSizeClass"
      @onDropDown="onDropDown"
    />

    <!-- Error message -->
    <NoteMessage
      v-if="isError[String(name)]"
      type="error"
      :message="isError[String(name)]"
    />

    <!-- Calendar -->
    <DatePickerCalendar
      :langs="langs"
      :isDropDown="isDropDown"
      :selectedValue="selectedValue"
      @onChange="onChange"
    />
  </div>
</template>
