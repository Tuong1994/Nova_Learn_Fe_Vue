<script lang="ts" setup>
import { computed, defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Card from "@/components/Card/Card.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Image from "@/components/Image/Image.vue";
import List from "@/components/List/List.vue";
import ListItem from "@/components/List/ListItem.vue";
import useReveal from "@/common/hooks/useReveal";

defineComponent({ name: "CourseDetailDegrees" });

interface CourseDetailDegreesProps {
  langs: Langs;
}

useReveal("degreesInner")

const props = defineProps<CourseDetailDegreesProps>();

const items = computed(() => [
  {
    id: "1",
    title: props.langs?.course.detail.degrees.list_1.title,
    lists: [
      { id: "1", content: props.langs?.course.detail.degrees.list_1.item_1 },
      { id: "2", content: props.langs?.course.detail.degrees.list_1.item_2 },
      { id: "3", content: props.langs?.course.detail.degrees.list_1.item_3 },
      { id: "4", content: props.langs?.course.detail.degrees.list_1.item_4 },
    ],
  },
  {
    id: "2",
    title: props.langs?.course.detail.degrees.list_2.title,
    lists: [
      { id: "1", content: props.langs?.course.detail.degrees.list_2.item_1 },
      { id: "2", content: props.langs?.course.detail.degrees.list_2.item_2 },
      { id: "3", content: props.langs?.course.detail.degrees.list_2.item_3 },
      { id: "4", content: props.langs?.course.detail.degrees.list_2.item_4 },
    ],
  },
  {
    id: "3",
    title: props.langs?.course.detail.degrees.list_3.title,
    lists: [
      { id: "1", content: props.langs?.course.detail.degrees.list_3.item_1 },
      { id: "2", content: props.langs?.course.detail.degrees.list_3.item_2 },
      { id: "3", content: props.langs?.course.detail.degrees.list_3.item_3 },
      { id: "4", content: props.langs?.course.detail.degrees.list_3.item_4 },
    ],
  },
  {
    id: "4",
    title: props.langs?.course.detail.degrees.list_4.title,
    lists: [
      { id: "1", content: props.langs?.course.detail.degrees.list_4.item_1 },
      { id: "2", content: props.langs?.course.detail.degrees.list_4.item_2 },
      { id: "3", content: props.langs?.course.detail.degrees.list_4.item_3 },
      { id: "4", content: props.langs?.course.detail.degrees.list_4.item_4 },
    ],
  },
]);
</script>

<template>
  <Section id="degreesInner" wrapClass="detail-degrees">
    <Title :level="3" align="center" transform="uppercase">
      {{ langs?.course.detail.sideNav.degrees }}
    </Title>
    <Paragraph :size="18" align="center">
      {{ langs?.course.detail.degrees.content }}
    </Paragraph>

    <Row align="center" :style="{ margin: '50px 0' }">
      <Col :xs="24" :md="24" :span="12">
        <List wrapClass="degrees-sub-content">
          <ListItem icon="graduation-cap">
            <Paragraph :size="18">
              {{ langs?.course.detail.degrees.subContent_1 }}
            </Paragraph>
          </ListItem>
          <ListItem icon="handshake-simple">
            <Paragraph :size="18">
              {{ langs?.course.detail.degrees.subContent_2 }}
            </Paragraph>
          </ListItem>
          <ListItem icon="people-group">
            <Paragraph :size="18">
              {{ langs?.course.detail.degrees.subContent_3 }}
            </Paragraph>
          </ListItem>
        </List>
      </Col>
      <Col :xs="24" :md="24" :span="12">
        <div class="degrees-image">
          <Image
            wrapClass="image-view"
            :src="require('../../../assets/images/common/degrees.jpg')"
          />
        </div>
      </Col>
    </Row>

    <Row :gutters="[10]" justify="spaceBetween" wrapClass="degrees-list">
      <Col
        v-for="(item, idx) in items"
        :key="item.id"
        :xs="24"
        :md="24"
        :span="idx === 1 || idx === 2 ? 14 : 10"
        :grow="1"
      >
        <Card bodyClass="list-item">
          <template #body>
            <List :title="item.title">
              <ListItem v-for="list in item.lists" :key="list.id">
                {{ list.content }}
              </ListItem>
            </List>
          </template>
        </Card>
      </Col>
    </Row>
  </Section>
</template>
