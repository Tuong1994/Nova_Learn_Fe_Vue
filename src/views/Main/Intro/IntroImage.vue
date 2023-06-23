<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import Image from "@/components/Image/Image.vue";

defineComponent({ name: "IntroImage" });

interface IntroImageProps {
  src: string;
}

defineProps<IntroImageProps>();
</script>

<template>
  <div class="content-image">
    <Image fit="cover" wrapClass="image-inner" :src="src" />
  </div>
</template>
