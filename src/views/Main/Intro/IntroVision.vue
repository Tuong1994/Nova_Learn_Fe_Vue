<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import IntroImage from "./IntroImage.vue";
import useReveal from "@/common/hooks/useReveal";

defineComponent({ name: "IntroVision" });

interface IntroVisionProps {
  langs: Langs;
}

defineProps<IntroVisionProps>();

useReveal("visionInner")
</script>

<template>
  <Section wrapClass="intro-vision" id="visionInner">
    <Row align="start" justify="spaceBetween" wrapClass="vision-wrap">
      <Col :xs="24" :md="24" :span="15">
        <Title :level="3" wrapClass="vision-title">
          {{ langs?.intro.sideNav.vision }}
        </Title>
        <Title :level="5" wrapClass="vision-subtitle">
          {{ langs?.intro.vision.subTitle }}
        </Title>
        <Paragraph align="justify">
          {{ langs?.intro.vision.content }}
        </Paragraph>
      </Col>
      <Col :xs="24" :md="24" :span="8">
        <IntroImage :src="require('../../../assets/images/banner/banner_5.jpg')" />
      </Col>
    </Row>
  </Section>
</template>
