<script lang="ts" setup>
import { computed, defineComponent, defineProps, ref } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import StatisticsItem from "./StatisticsItem.vue";
import useScrollToElement from "@/common/hooks/useScrollToElement";
import { is } from "@babel/types";

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

const isActive = ref<boolean>(false);

useScrollToElement("statistics", () => (isActive.value = true), 500);
</script>

<template>
  <Section class="nvl-common-statistics" id="statistics">
    <Title :level="3" align="center">{{
      langs?.common.components.statistics.title
    }}</Title>
    <Row justify="spaceEvenly">
      <Col v-for="statistic in statistics" :key="statistic.id" :xs="24">
        <StatisticsItem :statistic="statistic" :isActive="isActive" />
      </Col>
    </Row>
  </Section>
</template>
