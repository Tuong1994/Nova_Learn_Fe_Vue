<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";

defineComponent({ name: "NVLCheckBox" });

interface NVLCheckBoxProps {
  label?: string;
  name?: string;
  value?: string | number;
  checked?: boolean;
  modelValue?: string | number;
  wrapClass?: string;
  inputClass?: string;
  labelClass?: string;
}

const props = defineProps<NVLCheckBoxProps>();

const emits = defineEmits(["update:modelValue", "onChange"]);

const updateValue = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;

  if (props.modelValue) emits("update:modelValue", value);

  else emits("onChange", e);
};
</script>

<template>
  <div :class="['nvl-checkbox-group', wrapClass]">
    <label>
      <Row align="start" :gutters="[5]">
        <Col :span="2">
          <input
            type="checkbox"
            :class="['group-control', inputClass]"
            :name="name"
            :checked="checked"
            :value="value"
            @input="updateValue"
          />
        </Col>
        <Col :span="22">
          <span :class="labelClass">{{ label }}</span>
        </Col>
      </Row>
    </label>
  </div>
</template>
