<script lang="ts" setup>
import {
  defineComponent,
  defineProps,
  withDefaults,
  ref,
  StyleValue,
} from "vue";
import { IAccordion } from "@/common/interface/base";
import IconAngleDown from "../Icons/IconAngleDown.vue";
import IconCustom from "../Icons/IconCustom.vue";
import useClickOutside from "@/common/hooks/useClickOutside";

defineComponent({ name: "NVLAccordion" });

interface NVLAccordionProps {
  accordion?: IAccordion;
  extraIcon?: string;
  wrapClass?: string;
  titleClass?: string;
  contentClass?: string;
  style?: StyleValue;
  titleStyle?: StyleValue;
  contentStyle?: StyleValue;
}

withDefaults(defineProps<NVLAccordionProps>(), {
  accordion: () => ({ id: "1", title: "Title 1", content: "Content" }),
});

const accordionRef = ref<HTMLDivElement | null>(null);

const isActive = useClickOutside(accordionRef);

const onShow = () => (isActive.value = !isActive.value);
</script>

<template>
  <div
    :class="['nvl-accordion', wrapClass]"
    :key="accordion.id"
    :style="style"
    ref="accordionRef"
  >
    <!-- Title -->
    <div
      :class="['accordion-title', titleClass]"
      :style="titleStyle"
      @click="onShow"
    >
      <div class="title-text">
        <IconCustom
          v-if="accordion.titleIcon"
          :icon="accordion.titleIcon"
          class="text-icon"
        />
        <span>{{ accordion.title }}</span>
      </div>
      <IconAngleDown
        v-if="!extraIcon"
        :class="['title-icon', isActive ? 'title-icon--active' : '']"
      />
      <IconCustom v-if="extraIcon" :icon="extraIcon" />
    </div>
    <!-- Content -->
    <div
      :class="[
        'accordion-content',
        isActive ? 'accordion-content--active' : '',
        contentClass,
      ]"
      :style="contentStyle"
    >
      <div class="content-inner">
        {{ accordion.content }}
      </div>
    </div>
  </div>
</template>
