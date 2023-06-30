<script lang="ts" setup>
import {
  defineComponent,
  defineProps,
  defineEmits,
  ref,
  onUnmounted,
  watchEffect,
} from "vue";
import useClickOutside from "@/common/hooks/useClickOutside";
import IconAngleDown from "@/components/Icons/IconAngleDown.vue";

defineComponent({ name: "NVLDatePickerYearSelect" });

interface NVLDatePickerYearSelectProps {
  currentYear: number;
  years: number[];
}

defineProps<NVLDatePickerYearSelectProps>();

const emits = defineEmits(["onSelectYear"]);

let time: any;

const render = ref<boolean>(false);

const yearSelectRef = ref<HTMLDivElement | null>(null);

const isDropDown = useClickOutside(yearSelectRef);

const onDropDown = () => (isDropDown.value = !isDropDown.value);

const onSelectYear = (y: number) => emits("onSelectYear", y);

watchEffect(() => {
  if (isDropDown.value && !render.value) render.value = true;
  else if (!isDropDown.value && render.value)
    time = setTimeout(() => (render.value = false), 200);
});

onUnmounted(() => clearTimeout(time));
</script>

<template>
  <div class="header-select" ref="yearSelectRef">
    <div class="select-title" @click="onDropDown">
      <span>{{ currentYear }}</span>
      <IconAngleDown class="title-icon" />
    </div>

    <div
      v-if="render"
      :class="['select-dropdown', isDropDown ? 'select-dropdown--active' : '']"
    >
      <div
        v-for="(year, idx) in years"
        :key="idx"
        class="dropdown-item"
        @click="() => onSelectYear(year)"
      >
        {{ year }}
      </div>
    </div>
  </div>
</template>
