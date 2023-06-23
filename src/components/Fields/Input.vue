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
  useSlots,
} from "vue";
import { IRule, FieldValue } from "@/common/interface/base";
import { useStore } from "@/store";
import IconXCircle from "../Icons/IconXCircle.vue";
import NoteMessage from "../NoteMessage/NoteMessage.vue";
import useLang from "@/common/hooks/useLang";
import useValidate from "@/common/hooks/useValidate";

defineComponent({ name: "NVLInput" });

interface NVLInputProps {
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
  style?: StyleValue;
}

const props = withDefaults(defineProps<NVLInputProps>(), {
  rules: () => [],
});

const { langs } = useLang();

const slots = useSlots();

const store = useStore();

const isTouched = ref<boolean>(false);

const isError = ref<FieldValue>({});

const showPrefix = computed(() => !!slots.prefix);

const showSuffix = computed(() => !!slots.suffix);

const getSizeClass = computed(() => {
  const sizes: any = {
    sm: "control-input--sm",
    md: "control-input--md",
    lg: "control-input--lg",
  };
  return sizes[props.size ?? "md"];
});

watchEffect(() => {
  if (store.getters.getError) isError.value = store.getters.getError;
});

const emits = defineEmits(["update:modelValue"]);

const updateValue = (text: string) => emits("update:modelValue", text);

const onTouch = () => (isTouched.value = true);

const clearInput = () => emits("update:modelValue", "");

const onValidate = () => {
  if (!props.rules.length) return;

  const error = useValidate(props.rules, {
    [String(props.name)]: props.modelValue,
  });

  if (isTouched.value) {
    if (error) isError.value = error;
    else isError.value = {};
  }
};
</script>

<template>
  <div :class="['nvl-input-group', wrapClass]" :style="style">
    <!-- Label -->
    <label v-if="label" :for="label" :class="['group-label', labelClass]">
      <span v-if="required" class="label-mark">*</span>
      <span>{{ label }}</span>
    </label>
    <!-- Input -->
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
        :value="modelValue"
        :placeholder="
          placeholder ?? langs?.common.form.placeholder.defaultInput
        "
        @input="updateValue(($event.target as HTMLInputElement).value)"
        @focus="onTouch"
        @blur="onValidate"
      />
      <!-- Input clear icon -->
      <div v-if="modelValue" class="control-icon">
        <IconXCircle class="icon-x" @onClick="clearInput" />
      </div>
      <!-- Input suffix -->
      <div v-if="showSuffix" class="control-suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <!-- Error message -->
    <NoteMessage
      v-if="isError[String(name)]"
      type="error"
      :message="isError[String(name)]"
    />
  </div>
</template>
