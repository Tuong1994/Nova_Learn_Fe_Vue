<script lang="ts" setup>
import { defineComponent } from "vue";
import Section from "../Section/Section.vue";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";
import Card from "../Card/Card.vue";
import LoadingSkeleton from "../Loading/LoadingSkeleton.vue";

defineComponent({ name: "NVLFormLayoutLoading" });
</script>

<template>
  <Section>
    <Row
      justify="spaceBetween"
      align="center"
      :style="{ marginBottom: '50px' }"
    >
      <Col :xs="16" :md="20" :lg="20" :span="22">
        <LoadingSkeleton :lineWidth="200" />
      </Col>
      <Col :xs="8" :md="4" :lg="4" :span="2">
        <LoadingSkeleton type="btn" />
      </Col>
    </Row>

    <Row align="start" justify="spaceBetween">
      <Col :xs="24" :md="24" :lg="14" :span="16">
        <Card :style="{ marginBottom: '20px' }">
          <template #header>
            <LoadingSkeleton :lineWidth="200" />
          </template>

          <template #body>
            <LoadingSkeleton type="paragraph" />
          </template>
        </Card>

        <Card>
          <template #header>
            <LoadingSkeleton :lineWidth="200" />
          </template>

          <template #body>
            <LoadingSkeleton type="paragraph" :paragraphLines="7" />
          </template>
        </Card>
      </Col>
      <Col :xs="24" :md="24" :lg="10" :span="8">
        <Card>
          <template #header>
            <LoadingSkeleton :lineWidth="200" />
          </template>

          <template #body>
            <LoadingSkeleton type="paragraph" :paragraphLines="6" />
          </template>
        </Card>
      </Col>
    </Row>
  </Section>
</template>
