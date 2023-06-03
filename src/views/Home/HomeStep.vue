<script lang="ts" setup>
import { computed, defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Button from "@/components/Button/Button.vue";

defineComponent({ name: "HomeStep" });

interface HomeStepProps {
  langs: Langs;
}

const props = defineProps<HomeStepProps>();

const steps = computed(() => [
  { id: "1", content: props.langs?.home.step.step_1 },
  { id: "2", content: props.langs?.home.step.step_2 },
  { id: "3", content: props.langs?.home.step.step_3 },
]);
</script>

<template>
  <Section wrapClass="home-step">
    <Row justify="spaceBetween">
      <Col :xs="24" :span="8">
        <Title :level="3">{{ langs?.home.step.title }}</Title>
        <router-link to="/">
          <Button wrapClass="step-action" variant="primary" size="lg">{{
            langs?.common.actions.advise
          }}</Button>
        </router-link>
      </Col>
      <Col :xs="24" :span="14">
        <div class="step-wrap">
          <div v-for="(step, idx) in steps" :key="step.id" class="step-item">
            <div class="item-number">{{ idx + 1 }}</div>
            <div class="item-content">{{ step.content }}</div>
          </div>
        </div>
      </Col>
    </Row>
  </Section>
</template>
