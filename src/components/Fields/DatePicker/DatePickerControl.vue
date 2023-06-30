<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits, computed } from "vue";
import { FieldValue } from "@/common/interface/base";
import { Langs } from "@/common/lang";
import IconCalendar from "@/components/Icons/IconCalendar.vue";
import moment from "moment";

defineComponent({ name: "NVLDatePickerControl" });

interface NVLDatePickerControlProps {
  langs: Langs;
  name?: string;
  selectedValue?: Date;
  inputClass?: string;
  dateFormat: string;
  isError: FieldValue;
  getSizeClass: any;
}

const props = defineProps<NVLDatePickerControlProps>();

const emits = defineEmits(["onDropDown"]);

const formatDate = computed<string>(() =>
  moment(props.selectedValue).format(props.dateFormat)
);

const onDropDown = () => emits('onDropDown')
</script>

<template>
  <div
    :class="[
      'group-control',
      isError[String(name)] ? 'group-control-error--border' : '',
      inputClass,
    ]"
    @click="onDropDown"
  >
    <!-- Input prefix -->
    <div class="control-prefix">
      <IconCalendar />
    </div>

    <!-- Input control -->
    <div :class="['control-input', getSizeClass]">
      {{ formatDate }}
    </div>
  </div>
</template>
