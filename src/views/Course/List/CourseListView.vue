<script lang="ts" setup>
import { defineComponent } from "vue";
import Section from "@/components/Section/Section.vue";
import BodyHeader from "@/components/BodyHeader/BodyHeader.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Select from "@/components/Fields/Select.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Card from "@/components/Card/Card.vue";
import Image from "@/components/Image/Image.vue";
import Divider from "@/components/Divider/Divider.vue";
import RateStar from "@/components/Rate/RateStar.vue";
import Button from "@/components/Button/Button.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "CourseListView" });

const langs = useLang();
</script>

<template>
  <div class="course-list">
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
      <Row :gutters="[10]">
        <Col v-for="(item, idx) in 10" :key="idx" :span="6">
          <Card
            isHover
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
                  :src="require('../../../assets/images/common/bg-city.jpg')"
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
                  <Paragraph wrapClass="list-card-content"
                    >72 {{ langs?.common.units.sessions }}</Paragraph
                  >
                </Col>
              </Row>

              <router-link to="/course/detail">
                <Button ghost size="sm" wrapClass="list-card-action">
                  {{ langs?.common.actions.seeDetail }}
                </Button>
              </router-link>
            </template>
          </Card>
        </Col>
      </Row>
    </Section>
  </div>
</template>
