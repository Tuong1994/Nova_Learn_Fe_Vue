<script lang="ts" setup>
import { Langs } from "@/common/lang";
import { defineComponent, defineProps } from "vue";
import Section from "../Section/Section.vue";
import Divider from "../Divider/Divider.vue";

defineComponent({ name: "NVLFooterBottom" });

interface NVLFooterBottomProps {
  langs: Langs;
}

defineProps<NVLFooterBottomProps>();
</script>

<template>
  <Section wrapClass="footer-bottom">
    <Divider :style="{ height: '5px' }" />
    <p>{{ langs?.common.components.footer.bottom.certification }}</p>
  </Section>
</template>
