<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Image from "@/components/Image/Image.vue";

defineComponent({ name: "IntroAbout" });

interface IntroAboutProps {
  langs: Langs;
}

defineProps<IntroAboutProps>();
</script>

<template>
  <Section wrapClass="intro-about">
    <Row align="start" justify="spaceBetween">
      <Col :xs="24" :md="24" :span="15">
        <Title :level="3" wrapClass="about-title">
          {{ langs?.intro.about.title }}
        </Title>
        <Paragraph align="justify">
          {{ langs?.intro.about.content_1 }}
        </Paragraph>
        <Paragraph align="justify">
          {{ langs?.intro.about.content_2 }}
        </Paragraph>
        <Paragraph align="justify">
          {{ langs?.intro.about.content_3 }}
        </Paragraph>
        <Paragraph align="justify">
          {{ langs?.intro.about.content_4 }}
        </Paragraph>
      </Col>
      
      <Col :xs="0" :md="0" :span="8">
        <div class="about-image">
          <div class="image-wrap">
            <Image
              fit="cover"
              wrapClass="wrap-inner"
              :src="require('../../assets/images/common/avatar.jpg')"
            />
          </div>
        </div>
        <div class="about-info">
          <Title :level="5" align="center" wrapClass="info-title">
            {{ langs?.common.info.founder.name }}
          </Title>
          <Title :level="6" align="center" wrapClass="info-title">
            {{ langs?.common.info.founder.position }}
          </Title>
        </div>
      </Col>
    </Row>

    <div class="about-sub-content">
      <Title :level="5">
        {{ langs?.intro.about.subTitle }}
      </Title>
      <Paragraph>
        {{ langs?.intro.about.subContent }}
      </Paragraph>
    </div>
  </Section>
</template>
