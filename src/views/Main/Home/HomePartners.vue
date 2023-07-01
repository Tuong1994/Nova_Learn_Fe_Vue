<script lang="ts" setup>
import { computed, defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import { ISlideItem } from "@/common/interface/base";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import SlideDefault from "@/components/SlideShow/SlideDefault.vue";
import Title from "@/components/Typography/Title.vue";
import Card from "@/components/Card/Card.vue";
import Image from "@/components/Image/Image.vue";
import TypingText from "@/components/TypingText/TypingText.vue";

defineComponent({ name: "HomePartners" });

interface HomePartnersProps {
  langs: Langs;
}

defineProps<HomePartnersProps>();

const partners = computed<string[]>(() => [
  "DXC Technology",
  "TMA Solution",
  "PayMe",
  "NashTech",
  "Mona Media",
  "Haravan",
  "Unicloud",
  "VnExpress",
  "HaloSoft",
  "Aegona",
  "GMO-Z",
  "VNPT",
  "FPT Software",
]);

const slides = computed<ISlideItem[]>(() => [
  { id: "1", componentName: "partners_1" },
  { id: "2", componentName: "partners_2" },
  { id: "3", componentName: "partners_3" },
]);

const slideImage = (name: string) => {
  const images: any = {
    partners_1: require("../../../assets/images/partners/partners_1.png"),
    partners_2: require("../../../assets/images/partners/partners_2.png"),
    partners_3: require("../../../assets/images/partners/partners_3.png"),
  };
  return images[name];
};
</script>

<template>
  <Section wrapClass="home-partners">
    <Row align="center">
      <Col :xs="24" :md="24" :span="8">
        <Title :level="2" theme="light">
          {{ langs?.home.parters.title }}
        </Title>

        <TypingText :texts="partners" />
      </Col>

      <Col :xs="24" :md="24" :span="16">
        <SlideDefault
          infinite
          autoPlay
          :slides="slides"
          theme="light"
          dotsClass="partners-navigator"
        >
          <template #slide-inner="item">
            <Card wrapClass="partners-card" bodyClass="card-inner">
              <template #body>
                <Image fit="contain" :src="slideImage(item.slide)" />
              </template>
            </Card>
          </template>
        </SlideDefault>
      </Col>
    </Row>
  </Section>
</template>
