<script lang="ts" setup>
import { computed, defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import IconCustom from "@/components/Icons/IconCustom.vue";
import useReveal from "@/common/hooks/useReveal";

defineComponent({ name: "CourseDetailGoals" });

interface CourseDetailGoalsProps {
  langs: Langs;
}

const props = defineProps<CourseDetailGoalsProps>();

useReveal("goalsInner");

const items = computed(() => [
  {
    id: "1",
    icon: "handshake-simple",
    content: props.langs?.course.detail.goals.content_1,
  },
  {
    id: "2",
    icon: "cloud-arrow-up",
    content: props.langs?.course.detail.goals.content_2,
  },
  {
    id: "3",
    icon: "gears",
    content: props.langs?.course.detail.goals.content_3,
  },
  {
    id: "4",
    icon: "code",
    content: props.langs?.course.detail.goals.content_4,
  },
  {
    id: "5",
    icon: "lightbulb",
    content: props.langs?.course.detail.goals.content_5,
  },
  {
    id: "6",
    icon: "cubes",
    content: props.langs?.course.detail.goals.content_6,
  },
]);
</script>

<template>
  <div class="detail-goals">
    <Section id="goalsInner">
      <Title :level="3" transform="uppercase">
        {{ langs?.course.detail.sideNav.goals }}
      </Title>
      <Row>
        <Col v-for="item in items" :key="item.id" :xs="24" :md="24" :span="12">
          <Row align="center" wrapClass="goals-item">
            <Col :xs="6" :span="4">
              <div class="item-icon">
                <IconCustom :icon="item.icon" />
              </div>
            </Col>
            <Col :xs="16" :span="18">
              <Paragraph wrapClass="item-content">
                {{ item.content }}
              </Paragraph>
            </Col>
          </Row>
        </Col>
      </Row>
    </Section>
  </div>
</template>
