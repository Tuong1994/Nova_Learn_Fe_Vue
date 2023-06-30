<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Button from "@/components/Button/Button.vue";
import helper from "@/utils/helper";

defineComponent({ name: "CommitmentBanner" });

interface CommitmentBannerProps {
  langs: Langs;
}

defineProps<CommitmentBannerProps>();
</script>

<template>
  <Section
    wrapClass="commitment-banner"
    :style="{
      backgroundImage: `url(${require('../../../assets/images/banner/banner_7.jpg')})`,
    }"
  >
    <div class="banner-content">
      <Title :level="2" theme="light">
        {{ langs?.commitment.banner.title }}
      </Title>

      <Paragraph :size="18" theme="light">
        {{ langs?.commitment.banner.content }}
      </Paragraph>

      <Button wrapClass="content-action" variant="primary" size="lg">
        <a href="#phase" class="action-link" @click="(e) => helper.smoothScroll(e, true)">
          {{ langs?.commitment.banner.action }}
        </a>
      </Button>
    </div>
  </Section>
</template>
