<script lang="ts" setup>
import { StyleValue, defineComponent, defineProps, withDefaults } from "vue";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";
import IconCustom from "../Icons/IconCustom.vue";

defineComponent({ name: "NVLListItem" });

interface NVLListItemProps {
  wrapClass?: string;
  icon?: string;
  style?: StyleValue;
}

withDefaults(defineProps<NVLListItemProps>(), {
  icon: "check",
});
</script>

<template>
  <li :class="['nvl-list-item', wrapClass]" :style="style">
    <Row :gutters="[8]">
      <Col>
        <IconCustom :icon="icon" />
      </Col>
      <Col :span="22">
        <slot></slot>
      </Col>
    </Row>
  </li>
</template>
