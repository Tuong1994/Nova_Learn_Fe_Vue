<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "vue";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";

defineComponent({ name: "NVLRadio" });

interface NVLRadioProps {
  label?: string;
  name?: string;
  wrapClass?: string;
  value?: string | number;
  checked?: boolean;
  modelValue?: string | number;
}

defineProps<NVLRadioProps>();

const emits = defineEmits(["update:modelValue"]);

const updateValue = (value: string) => emits("update:modelValue", value);
</script>

<template>
  <div class="nvl-radio-group">
    <label>
      <Row align="start" :gutters="[5]">
        <Col :span="2">
          <input
            type="radio"
            :name="name"
            :class="['group-control']"
            :checked="checked"
            :value="value"
            @input="$event => updateValue(($event.target as HTMLInputElement).value)"
          />
        </Col>
        <Col :span="22">
          <span>{{ label }}</span>
        </Col>
      </Row>
    </label>
  </div>
</template>
