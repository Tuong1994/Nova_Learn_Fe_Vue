<script lang="ts" setup>
import { computed, defineComponent } from "vue";
import { ILinkItem } from "@/common/interface/base";
import IntroBanner from "./IntroBanner.vue";
import Section from "@/components/Section/Section.vue";
import IntroAbout from "./IntroAbout.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import IntroVision from "./IntroVision.vue";
import IntroMission from "./IntroMission.vue";
import IntroMentor from "./IntroMentor.vue";
import LinkItem from "@/components/NavLink/LinkItem.vue";
import LinkContent from "@/components/NavLink/LinkContent.vue";
import useLang from "@/common/hooks/useLang";
import useNavLink from "@/common/hooks/useNavLink";

defineComponent({ name: "IntroView" });

useNavLink();

const { langs } = useLang();

const links = computed<ILinkItem[]>(() => [
  { id: "about", title: langs.value?.intro.sideNav.about },
  { id: "vision", title: langs.value?.intro.sideNav.vision },
  { id: "mission", title: langs.value?.intro.sideNav.mission },
  { id: "mentor", title: langs.value?.intro.sideNav.mentor },
]);
</script>

<template>
  <div class="intro">
    <LinkContent>
      <IntroBanner :langs="langs" />
    </LinkContent>

    <Section>
      <Row align="start" justify="spaceBetween">
        <Col :xs="0" :md="0" :lg="0" :span="4" wrapClass="intro-col">
          <div class="col-side-nav">
            <LinkItem v-for="link in links" :key="link.id" :link="link" />
          </div>
        </Col>

        <Col :xs="24" :md="24" :lg="24" :span="20">
          <LinkContent id="about">
            <IntroAbout :langs="langs" />
          </LinkContent>

          <LinkContent id="vision">
            <IntroVision :langs="langs" />
          </LinkContent>

          <LinkContent
            wrapClass="background"
            :style="{
              backgroundImage: `url(${require('../../assets/images/banner/banner_6.jpg')})`,
            }"
          />

          <LinkContent id="mission">
            <IntroMission :langs="langs" />
          </LinkContent>

          <LinkContent id="mentor">
            <IntroMentor :langs="langs" />
          </LinkContent>
        </Col>
      </Row>
    </Section>
  </div>
</template>
