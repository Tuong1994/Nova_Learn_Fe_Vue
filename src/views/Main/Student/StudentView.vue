<script lang="ts" setup>
import { computed, defineComponent, ref } from "vue";
import { ITabs } from "@/common/interface/base";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Tabs from "@/components/Tabs/Tabs.vue";
import StudentInfo from "./StudentInfo.vue";
import StudentCourse from "./StudentCourse.vue";
import StudentRate from "./StudentRate.vue";
import StudentComment from "./StudentComment.vue";
import StudentFormModal from "./StudentFormModal.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "StudentView" });

const { langs } = useLang();

const isEdit = ref<boolean>(false);

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

const onEdit = () => (isEdit.value = true);

const onCancel = () => (isEdit.value = false);
</script>

<template>
  <Section wrapClass="student">
    <Row align="start">
      <Col :xs="24" :md="24" :lg="10" :span="6">
        <StudentInfo :langs="langs" @onEdit="onEdit" />
      </Col>

      <Col :xs="24" :md="24" :lg="14" :span="18">
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

  <StudentFormModal :langs="langs" :isEdit="isEdit" @onCancel="onCancel" />
</template>
