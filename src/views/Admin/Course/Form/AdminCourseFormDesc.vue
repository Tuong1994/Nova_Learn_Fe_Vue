<script lang="ts" setup>
import { Langs } from "@/common/lang";
import { defineComponent, defineProps } from "vue";
import Card from "@/components/Card/Card.vue";
import Title from "@/components/Typography/Title.vue";
import TextAreaVue from "@/components/Fields/TextArea/TextArea.vue";

defineComponent({ name: "AdminCourseFormDesc" });

interface AdminCourseFormDescProps {
  langs: Langs;
}

defineProps<AdminCourseFormDescProps>();
</script>

<template>
  <Card wrapClass="spacing-vertical-bottom">
    <template #header>
      <Title :level="6">
        {{ langs?.admin.course.form.desc }}
      </Title>
    </template>
    <template #body>
      <TextAreaVue required :rows="5" :label="langs?.common.form.label.descriptEng" />

      <TextAreaVue required :rows="5" :label="langs?.common.form.label.descriptVn" />
    </template>
  </Card>
</template>
