<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "vue";
import { ISlideGalleryImage } from "@/common/interface/base";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import LibraryImage from "@/components/Common/LibraryImage/LibraryImage.vue";

defineComponent({ name: "PhotoLibraryMain" });

interface PhotoLibraryMainProps {
  images: ISlideGalleryImage[];
}

defineProps<PhotoLibraryMainProps>();

const emits = defineEmits(["onPreview"]);

const onPreview = (idx: number) => emits("onPreview", idx);
</script>

<template>
  <Row>
    <Col
      v-for="(image, idx) in images.slice(4, 13)"
      :key="image.id"
      :xs="24"
      :md="12"
      :span="8"
    >
      <LibraryImage :image="image" :idx="idx" @onPreview="onPreview" />
    </Col>
  </Row>
</template>
