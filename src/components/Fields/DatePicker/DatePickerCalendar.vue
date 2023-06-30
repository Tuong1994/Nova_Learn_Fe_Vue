<script lang="ts" setup>
import {
  defineComponent,
  defineProps,
  defineEmits,
  ref,
  computed,
  onUpdated,
  onUnmounted,
} from "vue";
import { Langs } from "@/common/lang";
import DatePickerCalendarHeader from "./DatePickerCalendarHeader.vue";
import DatePickerDateOfMonth from "./DatePickerDateOfMonth.vue";
import DatePickerDayOfWeek from "./DatePickerDayOfWeek.vue";

defineComponent({ name: "NVLDatePickerCalendar" });

interface NVLDatePickerCalendarProps {
  langs: Langs;
  isDropDown: boolean;
  selectedValue: Date;
}

export interface IDate {
  fullDate: Date;
  date: number;
  day: number;
  month: number;
  year: number;
  type: "main" | "sub";
}

const props = defineProps<NVLDatePickerCalendarProps>();

const emits = defineEmits(["onChange"]);

let time: any;

const render = ref<boolean>(false);

const currentDate = ref<Date>(props.selectedValue);

const currentMonth = ref<number>(new Date().getMonth());

const currentYear = ref<number>(new Date().getFullYear());

const days = computed<string[]>(() => [
  props.langs?.common.components.datepicker.days.sun ?? "",
  props.langs?.common.components.datepicker.days.mon ?? "",
  props.langs?.common.components.datepicker.days.tue ?? "",
  props.langs?.common.components.datepicker.days.wed ?? "",
  props.langs?.common.components.datepicker.days.thu ?? "",
  props.langs?.common.components.datepicker.days.fri ?? "",
  props.langs?.common.components.datepicker.days.sat ?? "",
]);

const months = computed<string[]>(() => [
  props.langs?.common.components.datepicker.months.jan ?? "",
  props.langs?.common.components.datepicker.months.feb ?? "",
  props.langs?.common.components.datepicker.months.mar ?? "",
  props.langs?.common.components.datepicker.months.apr ?? "",
  props.langs?.common.components.datepicker.months.may ?? "",
  props.langs?.common.components.datepicker.months.jun ?? "",
  props.langs?.common.components.datepicker.months.jul ?? "",
  props.langs?.common.components.datepicker.months.aug ?? "",
  props.langs?.common.components.datepicker.months.sep ?? "",
  props.langs?.common.components.datepicker.months.oct ?? "",
  props.langs?.common.components.datepicker.months.nov ?? "",
  props.langs?.common.components.datepicker.months.dec ?? "",
]);

const years = computed<number[]>(() => {
  let startYear = 1970;

  const currentYear = new Date().getFullYear();

  const y: number[] = [];

  while (startYear <= currentYear) {
    y.push(startYear++);
  }

  return y;
});

// Getting first day of month
const firstDayOfMonth = computed<number>(() =>
  new Date(currentYear.value, currentMonth.value, 1).getDay()
);

// Getting last date of month
const lastDateOfMonth = computed<number>(() =>
  new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
);

// Getting last day of month
const lastDayOfMonth = computed<number>(() =>
  new Date(
    currentYear.value,
    currentMonth.value,
    lastDateOfMonth.value
  ).getDay()
);

// Getting last date of previous month
const lastDateOfPreviousMonth = computed<number>(() =>
  new Date(currentYear.value, currentMonth.value, 0).getDate()
);

const generateDate = (d: Date, date: number, type: "main" | "sub") => {
  const value: IDate = {
    fullDate: d,
    day: d.getDay(),
    year: d.getFullYear(),
    month: d.getMonth(),
    date,
    type,
  };

  return value;
};

// Getting list of date
const dateList = computed<IDate[]>(() => {
  const date: IDate[] = [];

  // creating list of previous month last date
  for (let i = firstDayOfMonth.value; i > 0; i--) {
    const d = new Date(
      currentYear.value,
      currentMonth.value - 1,
      lastDateOfPreviousMonth.value - i + 1
    );

    const value = generateDate(d, lastDateOfPreviousMonth.value - i + 1, "sub");

    date.push(value);
  }

  // creating list of current month date
  for (let i = 1; i <= lastDateOfMonth.value; i++) {
    const d = new Date(currentYear.value, currentMonth.value, i);

    const value = generateDate(d, i, "main");

    date.push(value);
  }

  // creating list of next month first date
  for (let i = lastDayOfMonth.value; i < 6; i++) {
    const d = new Date(
      currentYear.value,
      currentMonth.value + 1,
      i - lastDayOfMonth.value + 1
    );

    const value = generateDate(d, i - lastDayOfMonth.value + 1, "sub");

    date.push(value);
  }

  return date;
});

// Getting today
const isTodayClass = (date: IDate) => {
  if (
    date.date === currentDate.value.getDate() &&
    date.month === currentDate.value.getMonth() &&
    date.year === currentDate.value.getFullYear()
  ) {
    return "day-item--active";
  }
  return "";
};

// Handle switch month - year
const onNavigate = (type: "prev" | "next") => {
  currentMonth.value =
    type === "prev" ? currentMonth.value - 1 : currentMonth.value + 1;
  // if current month is less than 0 or greater than 11
  if (currentMonth.value < 0 || currentMonth.value > 11) {
    // creating a new date of current year & month and pass it as date value
    currentDate.value = new Date(
      currentYear.value,
      currentMonth.value,
      new Date().getDate()
    );
    // updating current year with new date year
    currentYear.value = currentDate.value.getFullYear();
    // updating current month with new date month
    currentMonth.value = currentDate.value.getMonth();
  } else {
    currentDate.value = new Date(); // pass the current date as date value
  }
};

const onSelectDate = (d: IDate) => {
  // if selected month of day is less than or greater than current month
  if (d.month < currentMonth.value || d.month > currentMonth.value) {
    // pass selected date as date value
    currentDate.value = d.fullDate;
    // updating current year with new date year
    currentYear.value = currentDate.value.getFullYear();
    // updating current month with new date month
    currentMonth.value = currentDate.value.getMonth();
  } else currentDate.value = d.fullDate;

  emits("onChange", d.fullDate);
};

const onSelectMonth = (m: number) => (currentMonth.value = m);

const onSelectYear = (y: number) => (currentYear.value = y);

onUpdated(() => {
  if (props.isDropDown && !render.value) render.value = true;
  else if (!props.isDropDown && render.value)
    time = setTimeout(() => (render.value = false), 200);
});

onUnmounted(() => clearTimeout(time));
</script>

<template>
  <div
    v-if="render"
    :class="['group-calendar', isDropDown ? 'group-calendar--active' : '']"
  >
    <!-- Header -->
    <DatePickerCalendarHeader
      :months="months"
      :years="years"
      :currentMonth="currentMonth"
      :currentYear="currentYear"
      @onNavigate="(type) => onNavigate(type)"
      @onSelectMonth="onSelectMonth"
      @onSelectYear="onSelectYear"
    />

    <!-- Day -->
    <DatePickerDayOfWeek :days="days" />

    <!-- Date -->
    <DatePickerDateOfMonth
      :dateList="dateList"
      :isTodayClass="isTodayClass"
      @onSelectDate="onSelectDate"
    />
  </div>
</template>
