<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Button from "@/components/Button/Button.vue";
import Image from "@/components/Image/Image.vue";

defineComponent({ name: "IntroBanner" });

interface IntroBannerProps {
  langs: Langs;
}

defineProps<IntroBannerProps>();
</script>

<template>
  <Section wrapClass="intro-banner">
    <Row align="center" justify="spaceEvenly" wrapClass="banner-wrap">
      <Col :xs="24" :md="24" :span="12">
        <Title :level="1" theme="light">
          {{ langs?.intro.banner.title }}
        </Title>
        <Paragraph theme="light" align="justify">
          {{ langs?.intro.banner.content }}
        </Paragraph>
        <router-link to="/course/list">
          <Button variant="primary" wrapClass="banner-action" size="lg">
            {{ langs?.intro.banner.actions }}
          </Button>
        </router-link>
      </Col>
      <Col :xs="24" :md="24" :lg="10" :span="8">
        <div class="banner-image">
          <Image
            wrapClass="image-inner"
            :src="require('../../../assets/images/banner/banner_3.jpg')"
          />
        </div>
      </Col>
    </Row>
  </Section>
</template>
