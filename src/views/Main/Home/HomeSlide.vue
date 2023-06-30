<script lang="ts" setup>
import { computed, defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import { ISlideItem } from "@/common/interface/base";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import SlideDefault from "@/components/SlideShow/SlideDefault.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Card from "@/components/Card/Card.vue";

defineComponent({ name: "HomeSlide" });

interface HomeSlideProps {
  langs: Langs;
}

defineProps<HomeSlideProps>();

const slides = computed<ISlideItem[]>(() => [
  { id: "1", componentName: "" },
  { id: "2", componentName: "" },
  { id: "3", componentName: "" },
]);
</script>

<template>
  <Section wrapClass="home-slide">
    <Row align="start">
      <Col :span="10">
        <Paragraph :size="40" theme="light"> NOVA LEARN </Paragraph>
      </Col>
      <Col :span="14">
        <SlideDefault :slides="slides" theme="light">
          <template #slide-inner>
            <Card>
              <template #body>
                <Paragraph :size="40"> content </Paragraph>
              </template>
            </Card>
          </template>
        </SlideDefault>
      </Col>
    </Row>
  </Section>
</template>
