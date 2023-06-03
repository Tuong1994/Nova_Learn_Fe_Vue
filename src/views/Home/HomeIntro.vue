<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Button from "@/components/Button/Button.vue";

defineComponent({ name: "HomeIntro" });

interface HomeIntroProps {
  langs: Langs;
}

defineProps<HomeIntroProps>();
</script>

<template>
  <Section wrapClass="home-intro">
    <Title :level="6" theme="light" align="center">
      {{ langs?.home.intro.content }}
    </Title>

    <div class="intro-slogan">
      <div class="slogan-wrap">
        <Title align="center" :level="2" wrapClass="wrap-title">
          {{ langs?.home.slogan.title }}
        </Title>
        <Title align="center" :level="3" wrapClass="wrap-title">
          {{ langs?.home.slogan.content }}
        </Title>
        <Row wrapClass="wrap-link" justify="center">
          <Col :xs="10">
            <router-link to="/">
              <Button wrapClass="link-btn" variant="primary" size="lg">
                {{ langs?.common.actions.courses }}
              </Button>
            </router-link>
          </Col>
          <Col :xs="10">
            <router-link to="/">
              <Button wrapClass="link-btn" variant="primary" size="lg">
                {{ langs?.common.actions.advise }}
              </Button>
            </router-link>
          </Col>
        </Row>
      </div>
    </div>
  </Section>
</template>
