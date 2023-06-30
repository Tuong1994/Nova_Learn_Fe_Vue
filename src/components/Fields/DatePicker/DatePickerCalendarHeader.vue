ColCol
<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import IconAngleLeft from "@/components/Icons/IconAngleLeft.vue";
import IconAngleRight from "@/components/Icons/IconAngleRight.vue";
import DatePickerYearSelect from "./DatePickerYearSelect.vue";
import DatePickerMonthSelect from "./DatePickerMonthSelect.vue";

defineComponent({ name: "NVLDatePickerCalendarHeader" });

interface NVLDatePickerCalendarHeaderProps {
  months: string[];
  years: number[];
  currentYear: number;
  currentMonth: number;
}

defineProps<NVLDatePickerCalendarHeaderProps>();

const emits = defineEmits(["onNavigate", "onSelectMonth", "onSelectYear"]);

const handleNavigate = (type: "prev" | "next") => emits("onNavigate", type);

const onSelectMonth = (m: number) => emits("onSelectMonth", m);

const onSelectYear = (y: number) => emits("onSelectYear", y);
</script>

<template>
  <Row wrapClass="calendar-header" align="center" justify="spaceBetween">
    <Col>
      <IconAngleLeft
        class="header-icon"
        @onClick="() => handleNavigate('prev')"
      />
    </Col>
    <Col>
      <Row>
        <Col>
          <DatePickerMonthSelect
            :currentMonth="currentMonth"
            :months="months"
            @onSelectMonth="onSelectMonth"
          />
        </Col>
        <Col>
          <DatePickerYearSelect
            :currentYear="currentYear"
            :years="years"
            @onSelectYear="onSelectYear"
          />
        </Col>
      </Row>
    </Col>
    <Col>
      <IconAngleRight
        class="header-icon"
        @onClick="() => handleNavigate('next')"
      />
    </Col>
  </Row>
</template>
