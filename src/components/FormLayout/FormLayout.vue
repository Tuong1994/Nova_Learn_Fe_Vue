<script lang="ts" setup>
import { defineComponent, defineProps, withDefaults } from "vue";
import { IBreadCrumbItem } from "@/common/interface/base";
import Section from "../Section/Section.vue";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";
import Form from "../Form/Form.vue";
import BodyHeader from "../BodyHeader/BodyHeader.vue";
import BreadCrumb from "../BreadCrumb/BreadCrumb.vue";
import Title from "../Typography/Title.vue";
import Card from "../Card/Card.vue";

defineComponent({ name: "NVLFormLayout" });

interface NVLFormLayoutProps {
  wrapClass?: string;
  breadcrumbs?: IBreadCrumbItem[];
  title?: string;
}

withDefaults(defineProps<NVLFormLayoutProps>(), {
  breadcrumbs: () => [],
});
</script>

<template>
  <Section wrapClass="form-layout">
    <BreadCrumb :items="breadcrumbs" wrapClass="layout-breadcrumb" />

    <Form>
      <BodyHeader wrapClass="layout-header">
        <template #title>
          <Title :level="3">
            {{ title }}
          </Title>
        </template>
        <template #right>
          <slot name="layout-header-action"></slot>
        </template>
      </BodyHeader>

      <Row>
        <Col>
            <Card>
                
            </Card>
        </Col>
      </Row>
    </Form>
  </Section>
</template>
