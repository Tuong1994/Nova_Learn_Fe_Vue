<script lang="ts" setup>
import {
  StyleValue,
  computed,
  defineComponent,
  defineProps,
  withDefaults,
} from "vue";
import IconCustom from "../Icons/IconCustom.vue";
import Row from "../Grid/Row.vue";
import Col, { NVLGridColProps } from "../Grid/Col.vue";

defineComponent({ name: "NVLInfoRow" });

interface NVLInfoRowProps {
  title?: string;
  content?: string;
  icon?: string;
  wrapClass?: string;
  titleClass?: string;
  contentClass?: string;
  style?: StyleValue;
  titleColSpan?: NVLGridColProps;
  contentColSpan?: NVLGridColProps;
  gutters?: [number?, number?];
  theme?: "dark" | "light";
}

const props = withDefaults(defineProps<NVLInfoRowProps>(), {
  theme: "dark",
  gutters: () => [5],
  titleColSpan: () => ({ span: 12 }),
  contentColSpan: () => ({ span: 12 }),
});

const getThemeClass = computed(() => {
  const themes: any = {
    dark: "nvl-info-row--dark",
    light: "nvl-info-row--light",
  };
  return themes[props.theme];
});
</script>

<template>
  <div :class="['nvl-info-row', getThemeClass, wrapClass]" :style="style">
    <Row :gutters="gutters">
      <Col
        :xs="titleColSpan.xs"
        :md="titleColSpan.md"
        :lg="titleColSpan.lg"
        :span="titleColSpan.span"
      >
        <IconCustom v-if="icon" :icon="icon" />
        <span v-if="title" :class="['row-title', titleClass]">{{ title }}</span>
      </Col>
      
      <Col
        v-if="content"
        :xs="contentColSpan.xs"
        :md="contentColSpan.md"
        :lg="contentColSpan.lg"
        :span="contentColSpan.span"
      >
        <span :class="['row-content', contentClass]"> {{ content }}</span>
      </Col>
    </Row>
  </div>
</template>
