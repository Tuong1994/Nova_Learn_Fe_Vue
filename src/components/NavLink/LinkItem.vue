<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { ILinkItem } from "@/common/interface/base";

defineComponent({ name: "NVLLinkItem" });

interface NVLLinkItemProps {
  link: ILinkItem;
  wrapClass?: string;
}

defineProps<NVLLinkItemProps>();
</script>

<template>
  <a :key="link.id" :href="`#${link.id}`" :class="['nvl-link-item', wrapClass]">
    {{ link.title }}
  </a>
</template>
