<script lang="ts" setup>
import { Langs } from "@/common/lang";
import { computed, defineComponent, defineProps } from "vue";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import IconCustom from "@/components/Icons/IconCustom.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";

defineComponent({ name: "NVLCommonStatistics" });

interface NVLCommonStatisticsProps {
  langs: Langs;
}

const props = defineProps<NVLCommonStatisticsProps>();

const statistics = computed(() => [
  {
    id: "branch",
    title: props.langs?.common.components.statistics.branch,
    total: 2,
    icon: "building",
  },
  {
    id: "student",
    title: props.langs?.common.components.statistics.student,
    total: 5000,
    icon: "user-graduate",
  },
  {
    id: "partner",
    title: props.langs?.common.components.statistics.partner,
    total: 120,
    icon: "handshake",
  },
]);
</script>

<template>
  <Section class="nvl-common-statistics">
    <Title :level="3" align="center">{{ langs?.common.components.statistics.title }}</Title>
    <Row justify="spaceEvenly">
      <Col v-for="staticstic in statistics" :key="staticstic.id" :xs="24">
        <Row align="center" wrapClass="statistics-item">
          <Col>
            <div class="item-icon">
              <IconCustom :icon="staticstic.icon" />
            </div>
          </Col>
          <Col>
            <p class="item-text">{{ staticstic.total }}</p>
            <p class="item-text">{{ staticstic.title }}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  </Section>
</template>
