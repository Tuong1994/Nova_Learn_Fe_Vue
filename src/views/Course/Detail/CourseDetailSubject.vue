<script lang="ts" setup>
import { computed, defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Image from "@/components/Image/Image.vue";
import useReveal from "@/common/hooks/useReveal";

defineComponent({ name: "CourseDetailSubject" });

interface CourseDetailSubjectProps {
  langs: Langs;
}

const props = defineProps<CourseDetailSubjectProps>();

useReveal("subjectInner");

const items = computed(() => [
  {
    id: "1",
    title: props.langs?.course.detail.subject.title_1,
    content: props.langs?.course.detail.subject.content_1,
    imgSrc: require("../../../assets/images/subject/subject_1.jpg"),
  },
  {
    id: "2",
    title: props.langs?.course.detail.subject.title_2,
    content: props.langs?.course.detail.subject.content_2,
    imgSrc: require("../../../assets/images/subject/subject_2.jpg"),
  },
  {
    id: "3",
    title: props.langs?.course.detail.subject.title_3,
    content: props.langs?.course.detail.subject.content_3,
    imgSrc: require("../../../assets/images/subject/subject_3.jpg"),
  },
  {
    id: "4",
    title: props.langs?.course.detail.subject.title_4,
    content: props.langs?.course.detail.subject.content_4,
    imgSrc: require("../../../assets/images/subject/subject_4.jpg"),
  },
]);
</script>

<template>
  <Section wrapClass="detail-subject" id="subjectInner">
    <Title :level="3" align="center" transform="uppercase">
      {{ langs?.course.detail.sideNav.subject }}
    </Title>
    <Row>
      <Col
        v-for="item in items"
        :key="item.id"
        :xs="24"
        :md="24"
        :lg="24"
        :span="12"
      >
        <Row :gutters="[5]" align="center" class="subject-item">
          <Col :xs="0" :span="12">
            <Image fit="cover" wrapClass="item-image" :src="item.imgSrc" />
          </Col>
          <Col :xs="24" :span="11" wrapClass="item-content">
            <Title :level="6" theme="light">
              {{ item.title }}
            </Title>
            <Paragraph theme="light">
              {{ item.content }}
            </Paragraph>
          </Col>
        </Row>
      </Col>
    </Row>
  </Section>
</template>
