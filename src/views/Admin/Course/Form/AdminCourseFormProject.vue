<script lang="ts" setup>
import { Langs } from "@/common/lang";
import { defineComponent, defineProps } from "vue";
import Card from "@/components/Card/Card.vue";
import Title from "@/components/Typography/Title.vue";
import TextArea from "@/components/Fields/TextArea/TextArea.vue";

defineComponent({ name: "AdminCourseFormProject" });

interface AdminCourseFormProjectProps {
  langs: Langs;
}

defineProps<AdminCourseFormProjectProps>();
</script>

<template>
  <Card>
    <template #header>
      <Title :level="6">
        {{ langs?.admin.course.form.project }}
      </Title>
    </template>
    <template #body>
      <TextArea :rows="5" :label="langs?.common.form.label.projectInfoEng" />

      <TextArea :rows="5" :label="langs?.common.form.label.projectInfoVn" />
    </template>
  </Card>
</template>
