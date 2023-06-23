<script lang="ts" setup>
import { computed, defineComponent, defineProps, ref } from "vue";
import { Langs } from "@/common/lang";
import { ISlideGalleryImage } from "@/common/interface/base";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import LibraryImage from "@/components/Common/LibraryImage/LibraryImage.vue";
import SlideGallery from "@/components/SlideShow/SlideGallery.vue";
import useReveal from "@/common/hooks/useReveal";

defineComponent({ name: "CourseDetailPhoto" });

interface CourseDetailPhotoProps {
  langs: Langs;
}

useReveal("photoInner");

defineProps<CourseDetailPhotoProps>();

const isPreview = ref({
  active: false,
  idx: 0,
});

const images = computed<ISlideGalleryImage[]>(() => [
  { id: "1", src: require("../../../../assets/images/gallery/gallery_5.jpg") },
  { id: "2", src: require("../../../../assets/images/gallery/gallery_6.jpg") },
  { id: "3", src: require("../../../../assets/images/gallery/gallery_7.jpg") },
  { id: "4", src: require("../../../../assets/images/gallery/gallery_8.jpg") },
  { id: "5", src: require("../../../../assets/images/gallery/gallery_9.jpg") },
  { id: "6", src: require("../../../../assets/images/gallery/gallery_10.jpg") },
  { id: "7", src: require("../../../../assets/images/gallery/gallery_11.jpg") },
  { id: "8", src: require("../../../../assets/images/gallery/gallery_12.jpg") },
  { id: "9", src: require("../../../../assets/images/gallery/gallery_13.jpg") },
  { id: "10", src: require("../../../../assets/images/gallery/gallery_14.jpg") },
  { id: "11", src: require("../../../../assets/images/gallery/gallery_15.jpg") },
  { id: "12", src: require("../../../../assets/images/gallery/gallery_16.jpg") },
  { id: "13", src: require("../../../../assets/images/gallery/gallery_17.jpg") },
  { id: "14", src: require("../../../../assets/images/gallery/gallery_18.jpg") },
  { id: "15", src: require("../../../../assets/images/gallery/gallery_19.jpg") },
  { id: "16", src: require("../../../../assets/images/gallery/gallery_20.jpg") },
  { id: "17", src: require("../../../../assets/images/gallery/gallery_21.jpg") },
  { id: "18", src: require("../../../../assets/images/gallery/gallery_22.jpg") },
  { id: "19", src: require("../../../../assets/images/gallery/gallery_23.jpg") },
  { id: "20", src: require("../../../../assets/images/gallery/gallery_24.jpg") },
  { id: "21", src: require("../../../../assets/images/gallery/gallery_25.jpg") },
]);

const onPreview = (idx: number) => {
  isPreview.value = { active: true, idx };
};

const onClose = () => {
  isPreview.value = { active: false, idx: 0 };
};
</script>

<template>
  <Section id="photoInner">
    <Title :level="3" transform="uppercase">
      {{ langs?.course.detail.sideNav.photo }}
    </Title>
    <Paragraph :size="18">
      {{ langs?.course.detail.photo.content }}
    </Paragraph>

    <Row :style="{ marginTop: '50px' }">
      <Col
        v-for="(image, idx) in images.slice(0, 9)"
        :key="image.id"
        :xs="24"
        :md="12"
        :span="8"
        :grow="1"
      >
        <LibraryImage :image="image" :idx="idx" @onPreview="onPreview" />
      </Col>
    </Row>
  </Section>

  <SlideGallery :items="images" :open="isPreview.active" @onClose="onClose" />
</template>
