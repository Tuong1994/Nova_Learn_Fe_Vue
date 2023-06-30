<script lang="ts" setup>
import { defineComponent, defineProps, withDefaults } from "vue";
import { ILinkItem } from "@/common/interface/base";
import helper from "@/utils/helper";

defineComponent({ name: "NVLLinkItem" });

interface NVLLinkItemProps {
  link: ILinkItem;
  wrapClass?: string;
  smooth?: boolean;
}

const props = withDefaults(defineProps<NVLLinkItemProps>(), {
  smooth: true,
});
</script>

<template>
  <a
    :key="link.id"
    :href="`#${link.id}`"
    :class="['nvl-link-item', wrapClass]"
    @click="(e) => helper.smoothScroll(e, props.smooth)"
  >
    {{ link.title }}
  </a>
</template>
