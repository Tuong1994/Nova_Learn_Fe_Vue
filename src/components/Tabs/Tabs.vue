<script lang="ts" setup>
import { ITabs } from "@/common/interface/base";
import { defineComponent, defineProps, withDefaults, computed, ref } from "vue";
import IconCustom from "../Icons/IconCustom.vue";

defineComponent({ name: "NVLTabs" });

interface NVLTabsProps {
  items?: ITabs[];
  wrapClass?: string;
  titleClass?: string;
  contentClass?: string;
}

const props = withDefaults(defineProps<NVLTabsProps>(), {
  items: () => [],
});

const activeTabs = ref({
  idx: 0,
  componentName: props.items[0]?.componentName ?? "",
});

const width = computed<number>(() =>
  props.items.length ? 100 / props.items.length : 0
);

const onChangeTab = (idx: number, name: string) => {
  activeTabs.value.idx = idx;
  activeTabs.value.componentName = name;
};
</script>

<template>
  <div :class="['nvl-tabs', wrapClass]">
    <!-- Tabs title -->
    <div :class="['tabs-title', titleClass]">
      <div
        v-for="(tab, idx) in items"
        :key="tab.id"
        :style="{ width: `${width}%` }"
        :class="[
          'title-item',
          activeTabs.idx === idx ? 'title-item--active' : '',
        ]"
        @click="() => onChangeTab(idx, tab.componentName)"
      >
        <IconCustom
          v-if="tab.titleIcon"
          :icon="tab.titleIcon"
          class="item-icon"
        />
        <span class="item-text">{{ tab.title }}</span>
      </div>
    </div>
    <!-- Tabs content -->
    <div :class="['tabs-content', contentClass]">
      <slot name="tabs-content" :tab="activeTabs.componentName"></slot>
    </div>
  </div>
</template>
