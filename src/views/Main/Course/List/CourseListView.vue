<script lang="ts" setup>
import { defineComponent } from "vue";
import Section from "@/components/Section/Section.vue";
import BodyHeader from "@/components/BodyHeader/BodyHeader.vue";
import Title from "@/components/Typography/Title.vue";
import Select from "@/components/Fields/Select/Select.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Pagination from "@/components/Pagination/Pagination.vue";
import CourseListItem from "./CourseListItem.vue";
import CourseListIntro from "./CourseListIntro.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "CourseListView" });

const { langs } = useLang();
</script>

<template>
  <div class="course-list">
    <CourseListIntro :langs="langs" />

    <BodyHeader>
      <template #title>
        <Title :level="3">
          {{ langs?.course.list.headerTitle }}
        </Title>
      </template>
      <template #right>
        <Select />
      </template>
    </BodyHeader>

    <Section>
      <Row justify="spaceBetween" :gutters="[10]">
        <Col
          v-for="(item, idx) in 12"
          :key="idx"
          :xs="24"
          :md="12"
          :lg="8"
          :span="6"
          :grow="1"
        >
          <CourseListItem :langs="langs" />
        </Col>
      </Row>

      <Pagination hasContent />
    </Section>
  </div>
</template>
