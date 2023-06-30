<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "vue";
import { IDate } from "./DatePickerCalendar.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";

defineComponent({ name: "NVLDatePickerDateOfMonth" });

interface NVLDatePickerDateOfMonthProps {
  dateList: IDate[];
  isTodayClass: (d: IDate) => string;
}

defineProps<NVLDatePickerDateOfMonthProps>();

const emits = defineEmits(['onSelectDate'])

const onSelectDate = (d: IDate) => emits('onSelectDate', d)
</script>

<template>
  <Row wrapClass="calendar-date" justify="spaceBetween">
    <Col v-for="(item, idx) in dateList" :key="idx" :span="3">
      <span
        :class="[
          'day-item',
          item.type === 'sub' ? 'day-item--unactive' : '',
          isTodayClass(item),
        ]"
        @click="() => onSelectDate(item)"
      >
        {{ item.date }}
      </span>
    </Col>
  </Row>
</template>
