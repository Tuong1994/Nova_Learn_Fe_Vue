<script lang="ts" setup>
import { StyleValue, defineComponent, defineProps } from "vue";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";
import IconCustom from "../Icons/IconCustom.vue";

defineComponent({ name: "NVLList" });

interface NVLListProps {
  wrapClass?: string;
  title?: string;
  titleIcon?: string;
  titleClass?: string;
  style?: StyleValue;
}

defineProps<NVLListProps>();
</script>

<template>
  <div :class="['nvl-list', wrapClass]" :style="style">
    <Row v-if="title" :class="['list-title', titleClass]" :gutters="[5]">
      <Col v-if="titleIcon">
        <IconCustom :icon="titleIcon" />
      </Col>
      <Col>
        <span>{{ title }}</span>
      </Col>
    </Row>

    <ul>
      <slot></slot>
    </ul>
  </div>
</template>
