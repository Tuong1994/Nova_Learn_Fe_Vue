<script lang="ts" setup>
import { computed, defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import { IBenefitItem } from "@/common/interface/base";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import BenefitItem from "@/components/Common/BenefitItem/BenefitItem.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import useReveal from "@/common/hooks/useReveal";

defineComponent({ name: "CourseDetailBenefit" });

interface CourseDetailBenefitProps {
  langs: Langs;
}

const props = defineProps<CourseDetailBenefitProps>();

useReveal("benefitInner");

const items = computed<IBenefitItem[]>(() => [
  {
    id: "1",
    title: props.langs?.course.detail.benefit.item_1.title,
    content: props.langs?.course.detail.benefit.item_1.content,
    icon: "graduation-cap",
  },
  {
    id: "2",
    title: props.langs?.course.detail.benefit.item_2.title,
    content: props.langs?.course.detail.benefit.item_2.content,
    icon: "handshake-simple",
  },
  {
    id: "3",
    title: props.langs?.course.detail.benefit.item_3.title,
    content: props.langs?.course.detail.benefit.item_3.content,
    icon: "user",
  },
  {
    id: "4",
    title: props.langs?.course.detail.benefit.item_4.title,
    content: props.langs?.course.detail.benefit.item_4.content,
    icon: "fire-flame-curved",
  },
  {
    id: "5",
    title: props.langs?.course.detail.benefit.item_5.title,
    content: props.langs?.course.detail.benefit.item_5.content,
    icon: "apple-whole",
  },
  {
    id: "6",
    title: props.langs?.course.detail.benefit.item_6.title,
    content: props.langs?.course.detail.benefit.item_6.content,
    icon: "hard-drive",
  },
  {
    id: "7",
    title: props.langs?.course.detail.benefit.item_7.title,
    content: props.langs?.course.detail.benefit.item_7.content,
    icon: "bookmark",
  },
  {
    id: "8",
    title: props.langs?.course.detail.benefit.item_8.title,
    content: props.langs?.course.detail.benefit.item_8.content,
    icon: "droplet",
  },
  {
    id: "9",
    title: props.langs?.course.detail.benefit.item_9.title,
    content: props.langs?.course.detail.benefit.item_9.content,
    icon: "campground",
  },
  {
    id: "10",
    title: props.langs?.course.detail.benefit.item_10.title,
    content: props.langs?.course.detail.benefit.item_10.content,
    icon: "hand-holding-dollar",
  },
]);
</script>

<template>
  <div class="detail-benefit">
    <Section id="benefitInner">
      <Title :level="3" transform="uppercase">
        {{ langs?.course.detail.sideNav.benefit }}
      </Title>
      <Row :gutters="[10]">
        <Col
          :xs="24"
          :md="24"
          :lg="12"
          :span="12"
          v-for="item in items"
          :key="item.id"
        >
          <BenefitItem :benefit="item" />
        </Col>
      </Row>
    </Section>
  </div>
</template>
