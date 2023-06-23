<script lang="ts" setup>
import { computed, defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Statistics from "@/components/Common/Statistics/Statistics.vue";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";

defineComponent({ name: "CommitmentStatistics" });

interface CommitmentStatisticsProps {
  langs: Langs;
}

const props = defineProps<CommitmentStatisticsProps>();

const rates = computed(() => [
  { id: "1", title: props.langs?.commitment.statistics.item_1, value: 92 },
  { id: "2", title: props.langs?.commitment.statistics.item_2, value: 75 },
  { id: "3", title: props.langs?.commitment.statistics.item_3, value: 91 },
  { id: "4", title: props.langs?.commitment.statistics.item_4, value: 96 },
]);
</script>

<template>
  <Statistics :langs="langs" />
  <Section>
    <Row>
      <Col v-for="rate in rates" :key="rate.id" :xs="24" :span="12">
        <div class="statistics-inner">
          <div
            class="inner-progress"
            :style="{
              background: `conic-gradient(#7462f9 ${
                rate.value * 3.6
              }deg, #ddd 0deg)`,
            }"
          >
            <div class="progress-number">
              <Title :level="1"> {{ rate.value }}% </Title>
            </div>
          </div>

          <Title :level="6" align="center">
            {{ rate.title }}
          </Title>
        </div>
      </Col>
    </Row>
  </Section>
</template>
