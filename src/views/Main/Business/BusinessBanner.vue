<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Image from "@/components/Image/Image.vue";
import Button from "@/components/Button/Button.vue";

defineComponent({ name: "BusinessBanner" });

interface BusinessBannerProps {
  langs: Langs;
}

defineProps<BusinessBannerProps>();
</script>

<template>
  <Section wrapClass="business-banner">
    <Row align="start" justify="spaceBetween">
      <Col :xs="24" :md="24" :lg="10" :span="12">
        <Title :level="1">
          {{ langs?.business.banner.title }}
        </Title>
        <Paragraph :size="20">
          {{ langs?.business.banner.content }}
        </Paragraph>
        <Button variant="primary" size="lg" wrapClass="banner-action">
          {{ langs?.business.banner.actions }}
        </Button>
      </Col>
      <Col :xs="0" :md="0" :lg="13" :span="12">
        <div class="banner-image">
          <div class="image-content">
            <Paragraph
              :size="14"
              align="center"
              theme="light"
              wrapClass="content-text"
            >
              {{ langs?.business.banner.subContent }}
            </Paragraph>
          </div>

          <Image
            fit="cover"
            wrapClass="image-view"
            :src="require('../../../assets/images/gallery/gallery_3.jpg')"
          />

          <Row wrapClass="image-dots">
            <Col v-for="(item, idx) in 64" :key="idx">
              <div class="dots-item"></div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </Section>
</template>
