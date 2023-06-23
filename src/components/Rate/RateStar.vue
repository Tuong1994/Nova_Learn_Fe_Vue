<script lang="ts" setup>
import { defineComponent, defineProps, withDefaults } from "vue";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";
import IconStar from "../Icons/IconStar.vue";
import Paragraph from "../Typography/Paragraph.vue";

defineComponent({ name: "NVLRateStar" });

interface NVLRateStarProps {
  point?: number;
}

const props = withDefaults(defineProps<NVLRateStarProps>(), {
  point: 4,
});

const getActiveClass = (idx: number) => {
  if (idx <= props.point) return "star-icon--active";
  return "";
};
</script>

<template>
  <Row wrapClass="nvl-rate-star">
    <Col>
      <Paragraph wrapClass="star-point">
        <span>{{ point }}</span>
        <span>/</span>
        <span>5</span>
      </Paragraph>
    </Col>
    <Col>
      <Row :gutters="[5]">
        <Col v-for="(item, idx) in 5" :key="idx">
          <IconStar :class="['star-icon', getActiveClass(idx + 1)]" />
        </Col>
      </Row>
    </Col>
    <Col>
      <Paragraph wrapClass="star-rater"> (100) </Paragraph>
    </Col>
  </Row>
</template>
