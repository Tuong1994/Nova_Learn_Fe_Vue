<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";

defineComponent({ name: "NVLBodyHeader" });

interface NVLBodyHeaderProps {
  wrapClass?: string;
}

defineProps<NVLBodyHeaderProps>();
</script>

<template>
  <Row
    :gutters="[5]"
    justify="spaceBetween"
    align="center"
    :wrapClass="`nvl-body-header ${wrapClass}`"
  >
    <Col :xs="24" :md="16">
      <div class="header-title">
        <slot name="title"></slot>
      </div>
    </Col>
    <Col :xs="24" :md="8">
      <div class="header-right">
        <slot name="right"></slot>
      </div>
    </Col>
  </Row>
</template>
