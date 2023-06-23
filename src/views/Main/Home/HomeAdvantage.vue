<script lang="ts" setup>
import { computed, defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import { ISlideItem } from "@/common/interface/base";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Title from "@/components/Typography/Title.vue";
import Section from "@/components/Section/Section.vue";
import SlideHexagon from "@/components/SlideShow/SlideHexagon.vue";

defineComponent({ name: "HomeAdvantage" });

interface HomeAdvantageProps {
  langs: Langs;
}

const props = defineProps<HomeAdvantageProps>();

const slides = computed<ISlideItem[]>(() => [
  {
    id: "system",
    componentName: "system",
    dotTitle: props.langs?.home.advantage.system.subTitle,
    dotIcon: "television"
  },
  {
    id: "support",
    componentName: "support",
    dotTitle: props.langs?.home.advantage.support.subTitle,
    dotIcon: "user"
  },
  {
    id: "project",
    componentName: "project",
    dotTitle: props.langs?.home.advantage.project.subTitle,
    dotIcon: "note-sticky"
  },
  {
    id: "interact",
    componentName: "interact",
    dotTitle: props.langs?.home.advantage.interact.subTitle,
    dotIcon: "message"
  },
  {
    id: "connect",
    componentName: "connect",
    dotTitle: props.langs?.home.advantage.connect.subTitle,
    dotIcon: "handshake"
  },
]);

const slideTitle = (name: string) => {
  const titles: any = {
    system: props.langs?.home.advantage.system.title,
    support: props.langs?.home.advantage.support.title,
    project: props.langs?.home.advantage.project.title,
    interact: props.langs?.home.advantage.interact.title,
    connect: props.langs?.home.advantage.connect.title,
  };
  return titles[name];
};

const slideContent = (name: string) => {
  const contents: any = {
    system: props.langs?.home.advantage.system.content,
    support: props.langs?.home.advantage.support.content,
    project: props.langs?.home.advantage.project.content,
    interact: props.langs?.home.advantage.interact.content,
    connect: props.langs?.home.advantage.connect.content,
  };
  return contents[name];
};
</script>

<template>
  <Section class="home-advantage">
    <Row justify="end">
      <Col>
        <Title :level="1" align="right" wrapClass="advantage-title">{{
          langs?.home.advantage.title
        }}</Title>
        <Title :level="6" align="right" wrapClass="advantage-sub-title">{{
          langs?.home.advantage.subTitle
        }}</Title>
      </Col>
    </Row>

    <SlideHexagon
      :slides="slides"
      infinite
      autoPlay
      hasManualStop
      slideId="advantage"
    >
      <template #slide-inner="item">
        <div class="advantage-slide-item">
          <Title :level="3">
            {{ slideTitle(item.slide) }}
          </Title>
          <div>
            {{ slideContent(item.slide) }}
          </div>
        </div>
      </template>
    </SlideHexagon>
  </Section>
</template>
