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
import Button from "../Button/Button.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "NVLFormLayout" });

interface NVLFormLayoutProps {
  wrapClass?: string;
  breadcrumbs?: IBreadCrumbItem[];
  title?: string;
}

withDefaults(defineProps<NVLFormLayoutProps>(), {
  breadcrumbs: () => [],
});

const { langs } = useLang();
</script>

<template>
  <Section wrapClass="form-layout">
    <BreadCrumb :items="breadcrumbs" wrapClass="layout-breadcrumb" />

    <Form>
      <BodyHeader
        wrapClass="layout-header"
        :leftColProps="{ xs: 18, md: 18 }"
        :rightColProps="{ xs: 6, md: 6 }"
      >
        <template #title>
          <Title :level="3">
            {{ title }}
          </Title>
        </template>
        <template #right>
          <Button variant="primary" wrapClass="header-action">
            {{ langs?.common.actions.save}}
          </Button>
        </template>
      </BodyHeader>

      <Row>
        <Col :xs="24" :md="24" :lg="14" :span="16">
          <slot name="left"></slot>
        </Col>
        <Col :xs="24" :md="24" :lg="10" :span="8">
          <slot name="right"></slot>
        </Col>
      </Row>
    </Form>
  </Section>
</template>
