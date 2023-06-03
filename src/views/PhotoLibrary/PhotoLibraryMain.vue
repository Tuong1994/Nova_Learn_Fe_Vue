<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "vue";
import { ISlideGalleryImage } from "@/common/interface/base";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import IconSearch from "@/components/Icons/IconSearch.vue";
import Image from "@/components/Image/Image.vue";

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
      <div class="library-image">
        <Image fit="cover" :src="image.src" />
        <div class="image-icon" @click="() => onPreview(idx)">
          <IconSearch class="icon-search" />
        </div>
      </div>
    </Col>
  </Row>
</template>
