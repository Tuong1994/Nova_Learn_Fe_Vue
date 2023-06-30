<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";

defineComponent({ name: "NVLDatePickerDayOfWeek" });

interface NVLDatePickerDayOfWeekProps {
  days: string[];
}

defineProps<NVLDatePickerDayOfWeekProps>();
</script>

<template>
  <Row wrapClass="calendar-day" justify="spaceBetween">
    <Col v-for="(day, idx) in days" :key="idx" :span="3">
      <span class="date-item">{{ day }}</span>
    </Col>
  </Row>
</template>
