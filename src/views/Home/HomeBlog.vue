<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";

defineComponent({ name: "HomeBlog" });

interface HomeBlogProps {
  langs: Langs;
}

defineProps<HomeBlogProps>();
</script>

<template>
  <Section wrapClass="home-blog">
    
  </Section>
</template>
