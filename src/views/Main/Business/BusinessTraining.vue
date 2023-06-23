<script lang="ts" setup>
import { computed, defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Card from "@/components/Card/Card.vue";
import useReveal from "@/common/hooks/useReveal";

defineComponent({ name: "BusinessTraining" });

interface BusinessTrainingProps {
  langs: Langs;
}

const props = defineProps<BusinessTrainingProps>();

useReveal("trainingInner");

const items = computed(() => [
  { id: "1", content: props.langs?.business.training.item_1, value: 40 },
  { id: "2", content: props.langs?.business.training.item_2, value: 200 },
  { id: "3", content: props.langs?.business.training.item_3, value: 66 },
]);
</script>

<template>
  <div class="business-training">
    <Section id="trainingInner">
      <Row justify="center">
        <Col v-for="item in items" :key="item.id" :xs="24" :md="12" :span="8">
          <Card bodyClass="training-item">
            <template #body>
              <Title :level="1" wrapClass="item-title">
                {{ item.value }}%
              </Title>
              <Paragraph>
                {{ item.content }}
              </Paragraph>
            </template>
          </Card>
        </Col>
      </Row>
    </Section>
  </div>
</template>
