<script lang="ts" setup>
import { computed, defineComponent, defineProps, ref } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Button from "@/components/Button/Button.vue";
import IconAngleDown from "@/components/Icons/IconAngleDown.vue";
import useReveal from "@/common/hooks/useReveal";

defineComponent({ name: "BusinessProcedure" });

interface BusinessProcedureProps {
  langs: Langs;
}

const props = defineProps<BusinessProcedureProps>();

useReveal("procedureInner")

const activeIdx = ref<number>(-1);

const items = computed(() => [
  {
    id: "1",
    title: props.langs?.business.procedure.item_1.title,
    content: props.langs?.business.procedure.item_1.content,
  },
  {
    id: "2",
    title: props.langs?.business.procedure.item_2.title,
    content: props.langs?.business.procedure.item_2.content,
  },
  {
    id: "3",
    title: props.langs?.business.procedure.item_3.title,
    content: props.langs?.business.procedure.item_3.content,
  },
  {
    id: "4",
    title: props.langs?.business.procedure.item_4.title,
    content: props.langs?.business.procedure.item_4.content,
  },
]);

const handleActive = (idx: number) => {
  if (activeIdx.value === idx) return (activeIdx.value = -1);
  activeIdx.value = idx;
};
</script>

<template>
  <Section wrapClass="business-procedure" id="procedureInner">
    <Title :level="3" align="center">
      {{ langs?.business.procedure.title }}
    </Title>
    <Row justify="spaceBetween" :style="{ marginTop: '50px' }">
      <Col :xs="24" :md="24" :span="8">
        <Title :level="4" wrapClass="procedure-title">
          {{ langs?.business.procedure.subTitle }}
        </Title>
        <router-link to="/about/contact">
          <Button variant="primary" size="lg" wrapClass="procedure-action">
            {{ langs?.common.actions.advise }}
          </Button>
        </router-link>
      </Col>

      <Col :xs="24" :md="24" :span="15">
        <div v-for="(item, idx) in items" :key="item.id" class="procedure-item">
          <div class="item-number">
            {{ idx + 1 }}
          </div>
          <div class="item-group">
            <div @click="() => handleActive(idx)">
              <Row
                align="center"
                justify="spaceBetween"
                wrapClass="group-title"
              >
                <Col :span="22">
                  <Paragraph :size="17">
                    {{ item.title }}
                  </Paragraph>
                </Col>
                <Col :span="2">
                  <IconAngleDown :size="17" />
                </Col>
              </Row>
            </div>
            <div
              :class="[
                'group-content',
                activeIdx === idx ? 'group-content--active' : '',
              ]"
            >
              <div class="content-inner">
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Section>
</template>
