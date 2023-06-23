<script lang="ts" setup>
import { computed, defineComponent, defineProps } from "vue";
import { REPLACE_NUM_REGEX } from "@/common/constant/regex";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Card from "@/components/Card/Card.vue";
import Image from "@/components/Image/Image.vue";
import Badge from "@/components/Badge/Badge.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";

defineComponent({ name: "CourseDetailTopic" });

interface CourseDetailTopicProps {
  langs: Langs;
}

defineProps<CourseDetailTopicProps>();

const tags = computed(() => [
  { id: "html", title: "HTML" },
  { id: "css", title: "CSS" },
  { id: "html5", title: "HTML5" },
  { id: "css3", title: "CSS3" },
  { id: "js", title: "Javascript" },
  { id: "ajax", title: "Ajax" },
  { id: "json", title: "JSON" },
  { id: "es6", title: "ES6 Js" },
]);
</script>

<template>
  <Section wrapClass="detail-topic">
    <Title :level="3" align="center" wrapClass="topic-title">
      {{ langs?.course.detail.topic.title.replace(REPLACE_NUM_REGEX, "16") }}
    </Title>
    <Row :gutters="[10]">
      <Col v-for="(item, idx) in 16" :key="idx" :xs="24" :md="12" :lg="8" :span="6">
        <Card isHover wrapClass="topic-card" bodyClass="topic-card-body">
          <template #body>
            <Image
              fit="cover"
              wrapClass="body-image"
              :src="require('../../../assets/images/common/bg-city.jpg')"
            />
            <Paragraph theme="light">
              Chủ đề 1: Định hướng nghề Front End, UI - UX nền tảng
            </Paragraph>
            <Row :gutters="[4]">
              <Col v-for="tag in tags" :key="tag.id">
                <Badge>
                  {{ tag.title }}
                </Badge>
              </Col>
            </Row>
          </template>
        </Card>
      </Col>
    </Row>
  </Section>
</template>
