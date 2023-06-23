<script lang="ts" setup>
import { defineComponent, defineProps, useSlots } from "vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Image from "@/components/Image/Image.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import useReveal from "@/common/hooks/useReveal";

defineComponent({ name: "CourseDetailLessonItem" });

interface CourseDetailLessonItemProps {
  title?: string;
  imgSrc?: string;
  revealId?: string;
}

const props = defineProps<CourseDetailLessonItemProps>();

useReveal(props.revealId ?? "");

const slots = useSlots();

const showContent = () => !!slots.default;
</script>

<template>
  <div class="lesson-item" :id="revealId">
    <Row v-if="title" :gutters="[0]" justify="center" wrapClass="item-group">
      <Col :xs="24" :md="24">
        <Paragraph align="center" theme="light" wrapClass="group-title">
          {{ title }}
        </Paragraph>
      </Col>
    </Row>

    <Row :gutters="[0]" align="center" justify="center" wrapClass="item-group">
      <Col :xs="24" :md="24" :span="12" wrapClass="group-col">
        <div v-if="showContent()" class="col-inner col-content">
          <slot></slot>
        </div>
      </Col>
      <Col :xs="0" :md="0" :span="12" wrapClass="group-col">
        <div v-if="imgSrc" class="col-inner col-image">
          <div class="image-wrap">
            <Image fit="cover" wrapClass="wrap-view" :src="imgSrc" />
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>
