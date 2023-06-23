<script lang="ts" setup>
import { Langs } from "@/common/lang";
import { defineComponent, defineProps } from "vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import IconCheck from "@/components/Icons/IconCheck.vue";
import useReveal from "@/common/hooks/useReveal";

defineComponent({ name: "IntroMentor" });

interface IntroMentorProps {
  langs: Langs;
}

defineProps<IntroMentorProps>();

useReveal("mentorInner");
</script>

<template>
  <Section wrapClass="intro-mentor" id="mentorInner">
    <Title :level="3" wrapClass="mentor-title">
      {{ langs?.intro.sideNav.mentor }}
    </Title>
    <Paragraph wrapClass="mentor-content">
      <Row>
        <Col :xs="2" :span="1">
          <IconCheck class="content-icon" />
        </Col>
        <Col :xs="22" :span="23">
          {{ langs?.intro.mentor.content_1 }}
        </Col>
      </Row>
    </Paragraph>
    <Paragraph wrapClass="mentor-content">
      <Row>
        <Col :xs="2" :span="1">
          <IconCheck class="content-icon" />
        </Col>
        <Col :xs="22" :span="23">
          {{ langs?.intro.mentor.content_2 }}
        </Col>
      </Row>
    </Paragraph>
    <Paragraph wrapClass="mentor-content">
      <Row>
        <Col :xs="2" :span="1">
          <IconCheck class="content-icon" />
        </Col>
        <Col :xs="22" :span="23">
          {{ langs?.intro.mentor.content_3 }}
        </Col>
      </Row>
    </Paragraph>
    <Paragraph wrapClass="mentor-content">
      <Row>
        <Col :xs="2" :span="1">
          <IconCheck class="content-icon" />
        </Col>
        <Col :xs="22" :span="23">
          {{ langs?.intro.mentor.content_4 }}
        </Col>
      </Row>
    </Paragraph>
  </Section>
</template>
