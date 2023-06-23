<script lang="ts" setup>
import { computed, defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import { IAccordion } from "@/common/interface/base";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import Accordion from "@/components/Accordion/Accordion.vue";
import useReveal from "@/common/hooks/useReveal";

defineComponent({ name: "BusinessQuestion" });

interface BusinessQuestionProps {
  langs: Langs;
}

useReveal("questionInner");

const props = defineProps<BusinessQuestionProps>();

const accordions = computed<IAccordion[]>(() => [
  {
    id: "1",
    title: props.langs?.business.question.question_1 ?? "",
    content: props.langs?.business.question.answer_1 ?? "",
  },
  {
    id: "2",
    title: props.langs?.business.question.question_2 ?? "",
    content: props.langs?.business.question.answer_2 ?? "",
  },
]);
</script>

<template>
  <Section wrapClass="business-question" id="questionInner">
    <Title :level="3">
      {{ langs?.business.question.title }}
    </Title>

    <Accordion
      v-for="accordion in accordions"
      :key="accordion.id"
      :accordion="accordion"
      wrapClass="question-item"
      titleClass="item-title"
      contentClass="item-content"
    />
  </Section>
</template>
