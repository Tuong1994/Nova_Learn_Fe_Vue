<script lang="ts" setup>
import { computed, defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Image from "@/components/Image/Image.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";

defineComponent({ name: "CourseListIntro" });

interface CourseListIntroProps {
  langs: Langs;
}

defineProps<CourseListIntroProps>();

const icons = computed(() => [
  { id: "1", src: require("../../../../assets/images/icon/react-icon.png") },
  { id: "2", src: require("../../../../assets/images/icon/js-icon.png") },
  { id: "3", src: require("../../../../assets/images/icon/java-icon.svg") },
  { id: "4", src: require("../../../../assets/images/icon/angular-icon.svg") },
  { id: "5", src: require("../../../../assets/images/icon/html5-icon.svg") },
  { id: "6", src: require("../../../../assets/images/icon/css3-icon.svg") },
  { id: "7", src: require("../../../../assets/images/icon/js-icon.svg") },
  { id: "8", src: require("../../../../assets/images/icon/docker-icon.svg") },
  { id: "9", src: require("../../../../assets/images/icon/cloud-icon.svg") },
  { id: "10", src: require("../../../../assets/images/icon/data-icon.svg") },
  { id: "11", src: require("../../../../assets/images/icon/redux-icon.png") },
  { id: "12", src: require("../../../../assets/images/icon/flutter-icon.png") },
]);
</script>

<template>
  <Section wrapClass="list-intro">
    <Row justify="spaceBetween">
      <Col :xs="24" :md="13" :span="15">
        <Title :level="3" theme="light">
          {{ langs?.course.list.intro.title }}
        </Title>
        <Paragraph theme="light">
          {{ langs?.course.list.intro.content }}
        </Paragraph>
      </Col>
      <Col :xs="24" :md="10" :span="8">
        <Row justify="center">
          <Col v-for="icon in icons" :key="icon.id" :span="5">
            <Image fit="contain" :src="icon.src" wrapClass="intro-image" />
          </Col>
        </Row>
      </Col>
    </Row>
  </Section>
</template>
