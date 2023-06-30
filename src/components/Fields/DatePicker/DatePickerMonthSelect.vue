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

defineComponent({ name: "NVLDatePickerMonthSelect" });

interface NVLDatePickerMonthSelectProps {
  currentMonth: number;
  months: string[];
}

defineProps<NVLDatePickerMonthSelectProps>();

const emits = defineEmits(["onSelectMonth"]);

let time: any;

const render = ref<boolean>(false);

const monthSelectRef = ref<HTMLDivElement | null>(null);

const isDropDown = useClickOutside(monthSelectRef);

const onDropDown = () => (isDropDown.value = !isDropDown.value);

const onSelectMonth = (m: number) => emits("onSelectMonth", m);

watchEffect(() => {
  if (isDropDown.value && !render.value) render.value = true;
  else if (!isDropDown.value && render.value)
    time = setTimeout(() => (render.value = false), 200);
});

onUnmounted(() => clearTimeout(time));
</script>

<template>
  <div class="header-select" ref="monthSelectRef">
    <div class="select-title" @click="onDropDown">
      <span>{{ months[currentMonth] }}</span>
      <IconAngleDown class="title-icon" />
    </div>

    <div
      v-if="render"
      :class="['select-dropdown', isDropDown ? 'select-dropdown--active' : '']"
    >
      <div
        v-for="(month, idx) in months"
        :key="idx"
        class="dropdown-item"
        @click="() => onSelectMonth(idx)"
      >
        {{ month }}
      </div>
    </div>
  </div>
</template>
