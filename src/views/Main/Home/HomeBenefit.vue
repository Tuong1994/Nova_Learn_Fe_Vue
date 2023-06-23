<script lang="ts" setup>
import { defineComponent, defineProps, computed, ref } from "vue";
import { IBenefitItem } from "@/common/interface/base";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import BenefitItem from "@/components/Common/BenefitItem/BenefitItem.vue";

defineComponent({ name: "HomeBenefit" });

interface HomeBenefitProps {
  langs: Langs;
}

const props = defineProps<HomeBenefitProps>();

const items = computed<IBenefitItem[]>(() => [
  {
    id: "1",
    title: props.langs?.home.benefit.benefit_1.title,
    content: props.langs?.home.benefit.benefit_1.content,
    icon: "check-double",
  },
  {
    id: "2",
    title: props.langs?.home.benefit.benefit_2.title,
    content: props.langs?.home.benefit.benefit_2.content,
    icon: "horse-head",
  },
  {
    id: "3",
    title: props.langs?.home.benefit.benefit_3.title,
    content: props.langs?.home.benefit.benefit_3.content,
    icon: "fire-flame-curved",
  },
  {
    id: "4",
    title: props.langs?.home.benefit.benefit_4.title,
    content: props.langs?.home.benefit.benefit_4.content,
    icon: "people-group",
  },
  {
    id: "5",
    title: props.langs?.home.benefit.benefit_5.title,
    content: props.langs?.home.benefit.benefit_5.content,
    icon: "qrcode",
  },
  {
    id: "6",
    title: props.langs?.home.benefit.benefit_6.title,
    content: props.langs?.home.benefit.benefit_6.content,
    icon: "hand-holding-dollar",
  },
]);
</script>

<template>
  <Section
    wrapClass="home-benefit"
    :style="{
      backgroundImage: `url(${require('../../../assets/images/common/bg-city.jpg')})`,
    }"
  >
    <Title :level="3" wrapClass="benefit-title">
      {{ langs?.home.benefit.title }}
    </Title>
    <Row justify="spaceEvenly">
      <Col
        v-for="item in items"
        :key="item.id"
        :xs="24"
        :md="24"
        :lg="12"
        :span="7"
      >
        <BenefitItem :benefit="item" />
      </Col>
    </Row>
  </Section>
</template>
