<script lang="ts" setup>
import { defineComponent, defineProps, computed } from "vue";
import { Langs } from "@/common/lang";
import { IAccordion } from "@/common/interface/base";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import Accordion from "@/components/Accordion/Accordion.vue";
import Blob from "@/components/Blob/Blob.vue";

defineComponent({ name: "CommitmentQuestion" });

interface CommitmentQuestionProps {
  langs: Langs;
}

const props = defineProps<CommitmentQuestionProps>();

const accordions = computed<IAccordion[]>(() => [
  {
    id: "1",
    title: props.langs?.commitment.question.question_1 ?? "",
    content: props.langs?.commitment.question.answer_1 ?? "",
  },
  {
    id: "2",
    title: props.langs?.commitment.question.question_2 ?? "",
    content: props.langs?.commitment.question.answer_2 ?? "",
  },
]);
</script>

<template>
  <Section wrapClass="commitment-question">
    <Title :level="3">
      {{ langs?.commitment.question.title }}
    </Title>

    <Accordion
      v-for="accordion in accordions"
      :key="accordion.id"
      :accordion="accordion"
      wrapClass="question-item"
      titleClass="item-title"
      contentClass="item-content"
    />
    <Blob
      :size="150"
      :zIndex="-1"
      color="red"
      position="absolute"
      top="10px"
      right="50px"
    />
    <Blob
      :size="100"
      :zIndex="-1"
      color="orange"
      position="absolute"
      bottom="10px"
      left="50px"
    />
    <Blob
      :size="50"
      :zIndex="-1"
      color="blue"
      position="absolute"
      top="20px"
      left="30px"
    />
  </Section>
</template>
