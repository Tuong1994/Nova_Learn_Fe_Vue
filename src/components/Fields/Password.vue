<script lang="ts" setup>
import {
  defineComponent,
  withDefaults,
  defineProps,
  defineEmits,
  computed,
  ref,
  useSlots,
  StyleValue,
} from "vue";
import { FieldValue, IRule } from "@/common/interface/base";
import IconEye from "../Icons/IconEye.vue";
import IconEyeSlash from "../Icons/IconEyeSlash.vue";
import NoteMessage from "../NoteMessage/NoteMessage.vue";
import useLang from "@/common/hooks/useLang";
import useValidate from "@/common/hooks/useValidate";

defineComponent({ name: "NVLInputPassword" });

interface NVLInputPasswordProps {
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

const props = withDefaults(defineProps<NVLInputPasswordProps>(), {
  rules: () => [],
});

const { langs } = useLang();

const slots = useSlots();

const isShow = ref<boolean>(false);

const isTouched = ref<boolean>(false);

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

const emits = defineEmits(["update:modelValue"]);

const showPass = () => (isShow.value = !isShow.value);

const updateValue = (text: string) => emits("update:modelValue", text);

const onTouch = () => (isTouched.value = true);

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
        :type="!isShow ? 'password' : 'text'"
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
      <!-- Input show / hide password icon -->
      <div class="control-icon">
        <IconEye v-if="!isShow" @onClick="showPass" />
        <IconEyeSlash v-if="isShow" @onClick="showPass" />
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
