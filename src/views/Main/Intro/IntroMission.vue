<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import IntroImage from "./IntroImage.vue";
import useReveal from "@/common/hooks/useReveal";

defineComponent({ name: "IntroMission" });

interface IntroMissionProps {
  langs: Langs;
}

defineProps<IntroMissionProps>();

useReveal("missionInner");
</script>

<template>
  <Section wrapClass="intro-mission" id="missionInner">
    <Row align="start" justify="spaceBetween" wrapClass="mission-wrap">
      <Col :xs="24" :md="24" :span="8">
        <IntroImage :src="require('../../../assets/images/banner/banner_4.jpg')" />
      </Col>
      <Col :xs="24" :md="24" :span="15">
        <Title :level="3" wrapClass="mission-title">
          {{ langs?.intro.sideNav.mission }}
        </Title>
        <Title :level="5" wrapClass="mission-subtitle">
          {{ langs?.intro.mission.subTitle }}
        </Title>
        <Paragraph align="justify">
          {{ langs?.intro.mission.content }}
        </Paragraph>
      </Col>
    </Row>
  </Section>
</template>
