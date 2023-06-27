<script lang="ts" setup>
import { defineComponent, defineProps, withDefaults } from "vue";
import Row from "../Grid/Row.vue";
import Col, { NVLGridColProps } from "../Grid/Col.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "NVLBodyHeader" });

interface NVLBodyHeaderProps {
  wrapClass?: string;
  hasTotal?: boolean;
  total?: number;
  gutters?: [number?, number?];
  leftColSpan?: NVLGridColProps;
  rightColSpan?: NVLGridColProps;
}

const { langs } = useLang();

withDefaults(defineProps<NVLBodyHeaderProps>(), {
  gutters: () => [5],
  leftColSpan: () => ({
    xs: 24,
    md: 16,
  }),
  rightColSpan: () => ({
    xs: 24,
    md: 8,
  }),
});
</script>

<template>
  <Row
    :gutters="gutters"
    justify="spaceBetween"
    align="start"
    :wrapClass="`nvl-body-header ${wrapClass}`"
  >
    <Col
      :xs="leftColSpan.xs"
      :md="leftColSpan.md"
      :lg="leftColSpan.lg"
      :span="leftColSpan.span"
    >
      <div class="header-title">
        <slot name="title"></slot>

        <div v-if="hasTotal" class="title-total">
          {{ langs?.common.components.bodyHeader.subTitle }} ({{ total }})
        </div>
      </div>
    </Col>
    
    <Col
      :xs="rightColSpan.xs"
      :md="rightColSpan.md"
      :lg="rightColSpan.lg"
      :span="rightColSpan.span"
    >
      <div class="header-right">
        <slot name="right"></slot>
      </div>
    </Col>
  </Row>
</template>
