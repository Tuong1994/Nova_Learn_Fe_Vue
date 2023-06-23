<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "vue";
import { ISlideGalleryImage } from "@/common/interface/base";
import Image from "../../Image/Image.vue";
import IconSearch from "../../Icons/IconSearch.vue";

defineComponent({ name: "NVLCommonLibraryImage" });

interface NVLCommonLibraryImageProps {
    image: ISlideGalleryImage
    idx: number;
}

const props = defineProps<NVLCommonLibraryImageProps>();

const emits = defineEmits(['onPreview']);

const onPreview = () => emits("onPreview", props.idx)
</script>

<template>
  <div class="nvl-common-library-image">
    <Image fit="cover" :src="image.src" />
    <div class="image-icon" @click="onPreview">
      <IconSearch class="icon-search" />
    </div>
  </div>
</template>
