<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Image from "@/components/Image/Image.vue";
import Title from "@/components/Typography/Title.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Button from "@/components/Button/Button.vue";

defineComponent({ name: "HomeSlogan" });

interface HomeSloganProps {
  langs: Langs;
}

defineProps<HomeSloganProps>();
</script>

<template>
  <Section wrapClass="home-slogan">
    <div class="slogan-image">
      <Image
        fit="cover"
        :src="require('../../../assets/images/banner/banner_1.jpg')"
      />
    </div>
    <Title :level="1" theme="light" align="center">
      {{ langs?.home.slogan.title }}
    </Title>
    <Title :level="3" theme="light" align="center">
      {{ langs?.home.slogan.content }}
    </Title>
    <Row justify="center">
      <Col :xs="24">
        <router-link to="/course/list">
          <Button wrapClass="slogan-action" variant="primary" size="lg">
            {{ langs?.common.actions.courses }}
          </Button>
        </router-link>
      </Col>
      <Col :xs="24">
        <router-link to="/about/contact">
          <Button wrapClass="slogan-action" variant="primary" size="lg">
            {{ langs?.common.actions.advise }}
          </Button>
        </router-link>
      </Col>
    </Row>
  </Section>
</template>
