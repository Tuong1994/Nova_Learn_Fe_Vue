<script lang="ts" setup>
import { computed, defineComponent } from "vue";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Tabs from "@/components/Tabs/Tabs.vue";
import StudentInfo from "./StudentInfo.vue";
import useLang from "@/common/hooks/useLang";
import { ITabs } from "@/common/interface/base";
import StudentCourse from "./StudentCourse.vue";
import StudentRate from "./StudentRate.vue";
import StudentComment from "./StudentComment.vue";

defineComponent({ name: "StudentView" });

const { langs } = useLang();

const tabs = computed<ITabs[]>(() => [
  {
    id: "course",
    title: langs.value?.student.tabs.course.title ?? "",
    componentName: "course",
  },
  {
    id: "rate",
    title: langs.value?.student.tabs.rate.title ?? "",
    componentName: "rate",
  },
  {
    id: "comment",
    title: langs.value?.student.tabs.comment.title ?? "",
    componentName: "comment",
  },
]);
</script>

<template>
  <Section wrapClass="student">
    <Row align="start">
      <Col :xs="24" :span="6">
        <StudentInfo :langs="langs" />
      </Col>

      <Col :xs="24" :span="18">
        <Tabs :items="tabs">
          <template #tabs-content="com">
            <StudentCourse v-if="com.tab === 'course'" :langs="langs" />

            <StudentRate v-if="com.tab === 'rate'" :langs="langs" />

            <StudentComment v-if="com.tab === 'comment'" :langs="langs" />
          </template>
        </Tabs>
      </Col>
    </Row>
  </Section>
</template>
