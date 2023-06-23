<script lang="ts" setup>
import { computed, defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import { ITabs } from "@/common/interface/base";
import Section from "@/components/Section/Section.vue";
import Tabs from "@/components/Tabs/Tabs.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import CommitmentPhaseItem from "./CommitmentPhaseItem.vue";

defineComponent({ name: "CommitmentPhase" });

interface CommitmentPhaseProps {
  langs: Langs;
}

const props = defineProps<CommitmentPhaseProps>();

const tabs = computed<ITabs[]>(() => [
  {
    id: "phase_1",
    title: props.langs?.commitment.phase.phase_1.title ?? "",
    componentName: "phase_1",
  },
  {
    id: "phase_2",
    title: props.langs?.commitment.phase.phase_2.title ?? "",
    componentName: "phase_2",
  },
  {
    id: "phase_3",
    title: props.langs?.commitment.phase.phase_3.title ?? "",
    componentName: "phase_3",
  },
  {
    id: "phase_4",
    title: props.langs?.commitment.phase.phase_4.title ?? "",
    componentName: "phase_4",
  },
]);

const phaseList = computed(() => [
  {
    title: props.langs?.commitment.phase.phase_1.subTitle,
    content: props.langs?.commitment.phase.phase_1.content,
    imageUrl: require("../../../assets/images/gallery/gallery_1.jpg"),
    list: [
      props.langs?.commitment.phase.phase_1.list_1,
      props.langs?.commitment.phase.phase_1.list_2,
      props.langs?.commitment.phase.phase_1.list_3,
      props.langs?.commitment.phase.phase_1.list_4,
    ],
  },
  {
    title: props.langs?.commitment.phase.phase_2.subTitle,
    content: props.langs?.commitment.phase.phase_2.content,
    imageUrl: require("../../../assets/images/gallery/gallery_2.jpg"),
    list: [
      props.langs?.commitment.phase.phase_2.list_1,
      props.langs?.commitment.phase.phase_2.list_2,
      props.langs?.commitment.phase.phase_2.list_3,
      props.langs?.commitment.phase.phase_2.list_4,
      props.langs?.commitment.phase.phase_2.list_5,
    ],
  },
  {
    title: props.langs?.commitment.phase.phase_3.subTitle,
    content: props.langs?.commitment.phase.phase_3.content,
    imageUrl: require("../../../assets/images/gallery/gallery_3.jpg"),
    list: [
      props.langs?.commitment.phase.phase_3.list_1,
      props.langs?.commitment.phase.phase_3.list_2,
      props.langs?.commitment.phase.phase_3.list_3,
      props.langs?.commitment.phase.phase_3.list_4,
      props.langs?.commitment.phase.phase_3.list_5,
    ],
  },
  {
    title: props.langs?.commitment.phase.phase_4.subTitle,
    content: props.langs?.commitment.phase.phase_4.content,
    imageUrl: require("../../../assets/images/gallery/gallery_4.jpg"),
    list: [
      props.langs?.commitment.phase.phase_4.list_1,
      props.langs?.commitment.phase.phase_4.list_2,
      props.langs?.commitment.phase.phase_4.list_3,
      props.langs?.commitment.phase.phase_4.list_4,
    ],
  },
]);
</script>

<template>
  <Section wrapClass="commitment-phase">
    <Title :level="3" align="center">
      {{ langs?.commitment.phase.title }}
    </Title>
    <Paragraph align="justify" :size="18" :style="{ marginBottom: '20px' }">
      {{ langs?.commitment.phase.content }}
    </Paragraph>

    <Tabs :items="tabs" contentClass="phase-tab">
      <template #tabs-content="com">
        <CommitmentPhaseItem
          v-if="com.tab === 'phase_1'"
          :phase="phaseList[0]"
        />
        <CommitmentPhaseItem
          v-if="com.tab === 'phase_2'"
          :phase="phaseList[1]"
        />
        <CommitmentPhaseItem
          v-if="com.tab === 'phase_3'"
          :phase="phaseList[2]"
        />
        <CommitmentPhaseItem
          v-if="com.tab === 'phase_4'"
          :phase="phaseList[3]"
        />
      </template>
    </Tabs>
  </Section>
</template>
