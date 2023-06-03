<script lang="ts" setup>
import { defineComponent, defineProps, computed } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Card from "@/components/Card/Card.vue";
import Title from "@/components/Typography/Title.vue";
import IconAngleRight from "@/components/Icons/IconAngleRight.vue";

defineComponent({ name: "NVLCommonCourse" });

interface NVLCommonCourseProps {
  langs: Langs;
}

const props = defineProps<NVLCommonCourseProps>();

const courses = computed(() => [
  {
    id: "fe",
    name: props.langs?.menu.courses.subs.category_bootCamp.fe,
    type: "bootcamp",
    totalTimes: {
      months: 6,
      sessions: 72,
    },
  },
  {
    id: "be",
    name: props.langs?.menu.courses.subs.category_bootCamp.be,
    type: "bootcamp",
    totalTimes: {
      months: 6,
      sessions: 72,
    },
  },
  {
    id: "fs",
    name: props.langs?.menu.courses.subs.category_bootCamp.fs,
    type: "bootcamp",
    totalTimes: {
      months: 8,
      sessions: 96,
    },
  },
  {
    id: "mobile",
    name: props.langs?.menu.courses.subs.category_bootCamp.mobile,
    type: "bootcamp",
    totalTimes: {
      months: 6,
      sessions: 72,
    },
  },
  {
    id: "cSharp",
    name: props.langs?.menu.courses.subs.category_bootCamp.cSharp,
    type: "bootcamp",
    totalTimes: {
      months: 3,
      sessions: 36,
    },
  },
  {
    id: "java",
    name: props.langs?.menu.courses.subs.category_bootCamp.java,
    type: "bootcamp",
    totalTimes: {
      months: 3,
      sessions: 36,
    },
  },
  {
    id: "data",
    name: props.langs?.menu.courses.subs.category_background.data,
    type: "background",
    totalTimes: {
      months: 3,
      sessions: 36,
    },
  },
  {
    id: "python",
    name: props.langs?.menu.courses.subs.category_background.python,
    type: "background",
    totalTimes: {
      months: 3,
      sessions: 36,
    },
  },
]);

const bootcampCourses = computed(() =>
  courses.value.filter((course) => course.type === "bootcamp")
);

const backgroundCourse = computed(() =>
  courses.value.filter((course) => course.type === "background")
);
</script>

<template>
  <Section wrapClass="nvl-common-course">
    <Title :level="3" theme="light" align="center">
      {{ langs?.common.components.course.title }}
    </Title>
    <Row align="start" justify="spaceBetween">
      <Col :xs="24" :md="24" :span="16">
        <Card
          v-for="course in bootcampCourses"
          :key="course.id"
          isHover
          wrapClass="course-card"
        >
          <template #body>
            <Title :level="6">{{ course.name }}</Title>
            <Row justify="spaceBetween" wrapClass="card-body-content">
              <Col :xs="24" :md="24">
                <div class="content-times">
                  <span class="times-item"
                    >{{ course.totalTimes.months }}
                    {{ langs?.common.units.months }}
                  </span>
                  <span class="times-item"
                    >{{ course.totalTimes.sessions }}
                    {{ langs?.common.units.sessions }}
                  </span>
                </div>
              </Col>
              <Col :xs="24" :md="24">
                <router-link to="/" class="content-action">
                  <span class="action-title">{{
                    langs?.common.actions.seeMore
                  }}</span>
                  <IconAngleRight class="action-icon" />
                </router-link>
              </Col>
            </Row>
          </template>
        </Card>
      </Col>

      <Col :xs="24" :md="24" :span="8">
        <Card
          v-for="course in backgroundCourse"
          :key="course.id"
          wrapClass="course-card"
        >
          <template #body>
            <Row justify="spaceBetween" wrapClass="card-body-content">
              <Col :xs="24" :md="24" :lg="24">
                <Title :level="6">{{ course.name }}</Title>
                <div class="content-times">
                  <span class="times-item"
                    >{{ course.totalTimes.months }}
                    {{ langs?.common.units.months }}
                  </span>
                  <span class="times-item"
                    >{{ course.totalTimes.sessions }}
                    {{ langs?.common.units.sessions }}
                  </span>
                </div>
              </Col>
              <Col :xs="24" :md="24" :lg="24">
                <router-link to="/" class="content-action">
                  <span class="action-title">{{
                    langs?.common.actions.seeMore
                  }}</span>
                  <IconAngleRight class="action-icon" />
                </router-link>
              </Col>
            </Row>
          </template> </Card
      ></Col>
    </Row>
  </Section>
</template>
