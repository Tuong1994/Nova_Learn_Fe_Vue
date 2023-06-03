<script lang="ts" setup>
import {
  defineComponent,
  defineEmits,
  defineProps,
  withDefaults,
  ref,
} from "vue";
import { useStore } from "@/store";
import { FieldValue, IRule } from "@/common/interface/base";
import useValidate from "@/common/hooks/useValidate";

defineComponent({ name: "NVLForm" });

interface NVLFormProps {
  formData?: any;
  wrapClass?: string;
  rules?: IRule[];
}

const props = withDefaults(defineProps<NVLFormProps>(), {
  rules: () => [],
});

const store = useStore();

const data = ref(props.formData);

const emits = defineEmits(["onSubmit"]);

const onSubmit = () => {
  let error: FieldValue = {};

  let key: keyof typeof data.value = "";

  for (key in data.value) {
    error = useValidate(props.rules, { [key]: data.value[key] });

    if (error[key]) return store.dispatch("isError", error);
  }

  if (!error[key]) emits("onSubmit", data.value);
};
</script>

<template>
  <form :class="wrapClass" @submit.prevent="onSubmit">
    <slot></slot>
  </form>
</template>
