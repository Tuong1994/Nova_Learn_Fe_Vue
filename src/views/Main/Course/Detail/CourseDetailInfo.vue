<script lang="ts" setup>
import { computed, defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import { REPLACE_COURSE_NAME_REGEX } from "@/common/constant/regex";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import List from "@/components/List/List.vue";
import ListItem from "@/components/List/ListItem.vue";
import Image from "@/components/Image/Image.vue";
import IconCustom from "@/components/Icons/IconCustom.vue";
import useReveal from "@/common/hooks/useReveal";

defineComponent({ name: "CourseDetailInfo" });

interface CourseDetailInfoProps {
  langs: Langs;
}

const props = defineProps<CourseDetailInfoProps>();

useReveal("infoInner")

const items = computed(() => [
  {
    id: "1",
    title: props.langs?.course.detail.info.subTitle_1,
    titleIcon: "chart-line",
    content: props.langs?.course.detail.info.subContent_1,
  },
  {
    id: "2",
    title: props.langs?.course.detail.info.subTitle_2,
    titleIcon: "message",
    content: props.langs?.course.detail.info.subContent_2,
  },
  {
    id: "3",
    title: props.langs?.course.detail.info.subTitle_3,
    titleIcon: "users-viewfinder",
    content: props.langs?.course.detail.info.subContent_3,
  },
  {
    id: "4",
    title: props.langs?.course.detail.info.subTitle_4,
    titleIcon: "route",
    content: props.langs?.course.detail.info.subContent_4,
  },
]);
</script>

<template>
  <div class="detail-info">
    <Section id="infoInner">
      <Row align="start">
        <Col :xs="24" :md="24" :lg="12" :span="14">
          <Title :level="3" transform="uppercase">
            {{ langs?.course.detail.sideNav.info }}
          </Title>
          <List>
            <ListItem>
              {{ langs?.course.detail.info.list_1 }}
            </ListItem>
            <ListItem>
              {{ langs?.course.detail.info.list_2 }}
            </ListItem>
            <ListItem>
              {{ langs?.course.detail.info.list_3 }}
            </ListItem>
          </List>
        </Col>
        <Col :xs="24" :md="24" :lg="12" :span="10">
          <div class="info-image">
            <Image
              fit="cover"
              wrapClass="image-view"
              :src="require('../../../../assets/images/gallery/gallery_5.jpg')"
            />
          </div>
        </Col>
      </Row>

      <Row justify="spaceBetween" wrapClass="info-benefit" :gutters="[5]">
        <Col v-for="item in items" :key="item.id" :xs="24" :md="24" :span="11">
          <Paragraph wrapClass="benefit-title">
            <Row>
              <Col :span="2">
                <IconCustom :icon="item.titleIcon" />
              </Col>
              <Col :span="20">
                {{ item.title }}
              </Col>
            </Row>
          </Paragraph>
          <Paragraph align="justify">
            {{
              item.content?.replace(
                REPLACE_COURSE_NAME_REGEX,
                "BOOTCAMP - LẬP TRÌNH FRONT-END WEBSITE TỪ ZERO ĐẾN CÓ VIỆC"
              )
            }}
          </Paragraph>
        </Col>
      </Row>
    </Section>
  </div>
</template>
