<script lang="ts" setup>
import { Langs } from "@/common/lang";
import { defineComponent, defineProps } from "vue";
import Card from "@/components/Card/Card.vue";
import Title from "@/components/Typography/Title.vue";
import Input from "@/components/Fields/Input/Input.vue";

defineComponent({ name: "AdminCourseFormDuration" });

interface AdminCourseFormDurationProps {
  langs: Langs;
}

defineProps<AdminCourseFormDurationProps>();
</script>

<template>
  <Card wrapClass="spacing-vertical-bottom">
    <template #header>
      <Title :level="6">
        {{ langs?.admin.course.form.duration }}
      </Title>
    </template>
    <template #body>
      <Input :label="langs?.common.form.label.months" />

      <Input :label="langs?.common.form.label.weeks" />

      <Input :label="langs?.common.form.label.sessions" />
    </template>
  </Card>
</template>
