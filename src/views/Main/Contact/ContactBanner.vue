<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Image from "@/components/Image/Image.vue";

defineComponent({ name: "ContactBanner" });

interface ContactBannerProps {
  langs: Langs;
}

defineProps<ContactBannerProps>();
</script>

<template>
  <Section wrapClass="contact-banner">
    <Row align="center" justify="spaceEvenly" wrapClass="banner-inner">
      <Col :xs="24" :md="24" :lg="10" :span="8">
        <div class="inner-image">
          <Image
            wrapClass="image-view"
            :src="require('../../../assets/images/common/contact.jpg')"
          />
        </div>
      </Col>
      <Col :xs="24" :md="24" :lg="10" :span="12">
        <Title :level="2" theme="light">
          {{ langs?.contact.banner.title }}
        </Title>
        <Paragraph :size="20" theme="light">
          {{ langs?.contact.banner.content }}
        </Paragraph>
      </Col>
    </Row>
  </Section>
</template>
