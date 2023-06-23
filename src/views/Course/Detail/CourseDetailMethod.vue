<script lang="ts" setup>
import { computed, defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import IconCustom from "@/components/Icons/IconCustom.vue";
import useReveal from "@/common/hooks/useReveal";

defineComponent({ name: "CourseDetailMethod" });

interface CourseDetailMethodProps {
  langs: Langs;
}

const props = defineProps<CourseDetailMethodProps>();

useReveal("methodInner")

const methods = computed(() => [
  {
    id: "first",
    title: props.langs?.course.detail.method.value.item_1,
    icon: "person-chalkboard",
  },
  {
    id: "second",
    title: props.langs?.course.detail.method.value.item_2,
    icon: "laptop-code",
  },
  {
    id: "third",
    title: props.langs?.course.detail.method.value.item_3,
    icon: "message",
  },
]);
</script>

<template>
  <Section id="methodInner" wrapClass="detail-method">
    <Title :level="3" align="center" transform="uppercase">
      {{ langs?.course.detail.sideNav.method }}
    </Title>
    <Paragraph align="center" :size="18" wrapClass="method-content">
      {{ langs?.course.detail.method.content }}
    </Paragraph>

    <div class="method-wrap">
      <Title :level="5" theme="light" align="center" transform="uppercase">
        {{ langs?.course.detail.method.value.title }}
      </Title>
      <Row justify="center">
        <Col
          v-for="(method, idx) in methods"
          :key="method.id"
          :xs="24"
          :md="24"
          :lg="12"
          :span="8"
        >
          <div :class="`wrap-item wrap-item-${method.id}`">
            <div class="item-outter"></div>
            <div class="item-inner">
              <Row justify="center" align="center">
                <Col>
                  <IconCustom
                    :icon="method.icon"
                    :size="50"
                    class="inner-icon"
                  />
                </Col>

                <Col>
                  <Row align="center">
                    <Col :span="7">
                      <Paragraph :size="40">0{{ idx + 1 }}</Paragraph>
                    </Col>
                    <Col :span="17">
                      <Paragraph :size="16">
                        {{ method.title }}
                      </Paragraph>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </Section>
</template>
