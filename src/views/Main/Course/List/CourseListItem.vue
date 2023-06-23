<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Card from "@/components/Card/Card.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Image from "@/components/Image/Image.vue";
import Divider from "@/components/Divider/Divider.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Button from "@/components/Button/Button.vue";
import RateStar from "@/components/Rate/RateStar.vue";

defineComponent({ name: "CourseListItem" });

interface CourseListItemProps {
  langs: Langs;
}

defineProps<CourseListItemProps>();
</script>

<template>
  <Card
    wrapClass="list-card"
    headerClass="list-card-header"
    bodyClass="list-card-body"
  >
    <template #header>
      <Paragraph>
        {{ langs?.menu.courses.subs.category_bootCamp.fe }}
      </Paragraph>
    </template>
    <template #body>
      <div class="list-card-image">
        <Image
          fit="cover"
          wrapClass="image-inner"
          :src="require('../../../../assets/images/common/course_default.svg')"
        />
      </div>

      <Divider :style="{ marginBottom: '10px' }" />

      <RateStar />

      <Row>
        <Col>
          <Paragraph wrapClass="list-card-content">
            6 {{ langs?.common.units.months }}
          </Paragraph>
        </Col>
        <Col wrapClass="list-card-content">|</Col>
        <Col>
          <Paragraph wrapClass="list-card-content">
            72 {{ langs?.common.units.sessions }}
          </Paragraph>
        </Col>
      </Row>

      <router-link to="/course/detail/1">
        <Button ghost size="sm" wrapClass="list-card-action">
          {{ langs?.common.actions.seeDetail }}
        </Button>
      </router-link>
    </template>
  </Card>
</template>
