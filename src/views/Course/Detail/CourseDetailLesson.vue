<script lang="ts" setup>
import { computed, defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import Card from "@/components/Card/Card.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import CourseDetailLessonItem from "./CourseDetailLessonItem.vue";

defineComponent({ name: "CourseDetailLesson" });

interface CourseDetailLessonProps {
  langs: Langs;
}

defineProps<CourseDetailLessonProps>();

const lessons = computed(() => [
  {
    id: "lesson_1",
    title: "Phần 1",
    lessonTitle:
      "TUYỆT CHIÊU UI-UX & BÍ QUYẾT TẠO GIAO DIỆN LÔI KÉO NGƯỜI DÙNG",
    imgSrc: require("../../../assets/images/lesson/lesson_1.png"),
  },
  {
    id: "lesson_2",
    title: "Phần 2",
    lessonTitle:
      "TUYỆT CHIÊU UI-UX & BÍ QUYẾT TẠO GIAO DIỆN LÔI KÉO NGƯỜI DÙNG",
    imgSrc: require("../../../assets/images/lesson/lesson_1.png"),
  },
  {
    id: "lesson_3",
    title: "Phần 3",
    lessonTitle:
      "TUYỆT CHIÊU UI-UX & BÍ QUYẾT TẠO GIAO DIỆN LÔI KÉO NGƯỜI DÙNG",
    imgSrc: require("../../../assets/images/lesson/lesson_1.png"),
  },
  {
    id: "lesson_4",
    title: "Phần 4",
    lessonTitle:
      "TUYỆT CHIÊU UI-UX & BÍ QUYẾT TẠO GIAO DIỆN LÔI KÉO NGƯỜI DÙNG",
    imgSrc: require("../../../assets/images/lesson/lesson_1.png"),
  },
  {
    id: "lesson_5",
    title: "Phần 5",
    lessonTitle:
      "TUYỆT CHIÊU UI-UX & BÍ QUYẾT TẠO GIAO DIỆN LÔI KÉO NGƯỜI DÙNG",
    imgSrc: require("../../../assets/images/lesson/lesson_1.png"),
  },
  {
    id: "lesson_6",
    title: "Phần 6",
    lessonTitle:
      "TUYỆT CHIÊU UI-UX & BÍ QUYẾT TẠO GIAO DIỆN LÔI KÉO NGƯỜI DÙNG",
    imgSrc: require("../../../assets/images/lesson/lesson_1.png"),
  },
  {
    id: "lesson_7",
    title: "Phần 7",
    lessonTitle:
      "TUYỆT CHIÊU UI-UX & BÍ QUYẾT TẠO GIAO DIỆN LÔI KÉO NGƯỜI DÙNG",
    imgSrc: require("../../../assets/images/lesson/lesson_1.png"),
  },
  {
    id: "lesson_8",
    title: "Phần 8",
    lessonTitle:
      "TUYỆT CHIÊU UI-UX & BÍ QUYẾT TẠO GIAO DIỆN LÔI KÉO NGƯỜI DÙNG",
    imgSrc: require("../../../assets/images/lesson/lesson_1.png"),
  },
  {
    id: "lesson_9",
    title: "Phần 9",
    lessonTitle:
      "TUYỆT CHIÊU UI-UX & BÍ QUYẾT TẠO GIAO DIỆN LÔI KÉO NGƯỜI DÙNG",
    imgSrc: require("../../../assets/images/lesson/lesson_1.png"),
  },
  {
    id: "lesson_10",
    title: "Phần 10",
    lessonTitle:
      "TUYỆT CHIÊU UI-UX & BÍ QUYẾT TẠO GIAO DIỆN LÔI KÉO NGƯỜI DÙNG",
    imgSrc: require("../../../assets/images/lesson/lesson_1.png"),
  },
  {
    id: "lesson_11",
    title: "Phần 11",
    lessonTitle:
      "TUYỆT CHIÊU UI-UX & BÍ QUYẾT TẠO GIAO DIỆN LÔI KÉO NGƯỜI DÙNG",
    imgSrc: require("../../../assets/images/lesson/lesson_1.png"),
  },
  {
    id: "lesson_12",
    title: "Phần 12",
    lessonTitle:
      "TUYỆT CHIÊU UI-UX & BÍ QUYẾT TẠO GIAO DIỆN LÔI KÉO NGƯỜI DÙNG",
    imgSrc: require("../../../assets/images/lesson/lesson_1.png"),
  },
  {
    id: "lesson_13",
    title: "Phần 13",
    lessonTitle:
      "TUYỆT CHIÊU UI-UX & BÍ QUYẾT TẠO GIAO DIỆN LÔI KÉO NGƯỜI DÙNG",
    imgSrc: require("../../../assets/images/lesson/lesson_1.png"),
  },
  {
    id: "lesson_14",
    title: "Phần 14",
    lessonTitle:
      "TUYỆT CHIÊU UI-UX & BÍ QUYẾT TẠO GIAO DIỆN LÔI KÉO NGƯỜI DÙNG",
    imgSrc: require("../../../assets/images/lesson/lesson_1.png"),
  },
  {
    id: "lesson_15",
    title: "Phần 15",
    lessonTitle:
      "TUYỆT CHIÊU UI-UX & BÍ QUYẾT TẠO GIAO DIỆN LÔI KÉO NGƯỜI DÙNG",
    imgSrc: require("../../../assets/images/lesson/lesson_1.png"),
  },
  {
    id: "lesson_16",
    title: "Phần 16",
    lessonTitle:
      "TUYỆT CHIÊU UI-UX & BÍ QUYẾT TẠO GIAO DIỆN LÔI KÉO NGƯỜI DÙNG",
    imgSrc: require("../../../assets/images/lesson/lesson_1.png"),
  },
]);
</script>

<template>
  <Section wrapClass="detail-lesson">
    <Title :level="3" align="center" transform="uppercase">
      {{ langs?.course.detail.sideNav.lesson }}
    </Title>
    <div class="lesson-inner">
      <Card bodyClass="inner-card">
        <template #body>
          <Paragraph theme="light" transform="uppercase" align="center">
            {{ langs?.course.detail.lesson.content_1 }}
          </Paragraph>
          <Paragraph theme="light" transform="uppercase" align="center">
            {{ langs?.course.detail.lesson.content_2 }}
            BOOTCAMP FRONT END DEV (48 BUỔI ~ 6 THÁNG)
          </Paragraph>
        </template>
      </Card>

      <CourseDetailLessonItem />

      <CourseDetailLessonItem
        v-for="lesson in lessons"
        :key="lesson.id"
        :title="lesson.title"
        :imgSrc="lesson.imgSrc"
        :revealId="lesson.id"
      >
        <Paragraph :size="18">
          {{ lesson.lessonTitle }}
        </Paragraph>
      </CourseDetailLessonItem>

      <Card bodyClass="inner-card">
        <template #body>
          <Paragraph theme="light" transform="uppercase" align="center">
            {{ langs?.course.detail.lesson.content_3 }}
          </Paragraph>
        </template>
      </Card>
    </div>
  </Section>
</template>
