<script lang="ts" setup>
import { computed, defineComponent, defineProps, ref, watchEffect } from "vue";
import IconCustom from "@/components/Icons/IconCustom.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";

defineComponent({ name: "NVLCommonStatisticsItem" });

interface NVLCommonStatisticsItemProps {
  statistic: any;
  isActive: boolean;
}

const props = defineProps<NVLCommonStatisticsItemProps>();

const speed = computed<number>(() => props.statistic.total > 10 ? 10 : 200);

const startValue = ref<number>(0);

watchEffect(() => {
  if (props.isActive) {
    const progress = setInterval(() => {
      if (props.statistic.total < 1000) startValue.value++;
      else startValue.value = startValue.value + 50;

      if (startValue.value === props.statistic.total) clearInterval(progress);
    }, speed.value);
  }
});
</script>

<template>
  <div :id="`statisticItem`">
    <Row align="center" wrapClass="statistics-item">
      <Col>
        <div class="item-icon">
          <IconCustom :icon="statistic.icon" />
        </div>
      </Col>
      <Col>
        <p class="item-text">{{ startValue }}</p>
        <p class="item-text">{{ statistic.title }}</p>
      </Col>
    </Row>
  </div>
</template>
