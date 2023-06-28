<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";

defineComponent({ name: "NVLRadio" });

interface NVLRadioProps {
  label?: string;
  name?: string;
  value?: string | number;
  checked?: boolean;
  modelValue?: string | number;
  wrapClass?: string;
  inputClass?: string;
  labelClass?: string;
}

defineProps<NVLRadioProps>();

const emits = defineEmits(["update:modelValue"]);

const updateValue = (value: string) => emits("update:modelValue", value);
</script>

<template>
  <div :class="['nvl-radio-group', wrapClass]">
    <label>
      <Row align="start" :gutters="[5]">
        <Col :span="2">
          <input
            type="radio"
            :name="name"
            :class="['group-control', inputClass]"
            :checked="checked"
            :value="value"
            @input="$event => updateValue(($event.target as HTMLInputElement).value)"
          />
        </Col>
        <Col :span="22">
          <span :class="labelClass">{{ label }}</span>
        </Col>
      </Row>
    </label>
  </div>
</template>
