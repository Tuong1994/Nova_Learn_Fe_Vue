<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Card from "@/components/Card/Card.vue";
import Title from "@/components/Typography/Title.vue";
import Input from "@/components/Fields/Input/Input.vue";

defineComponent({ name: "AdminCourseFormName" });

interface AdminCourseFormName {
  langs: Langs;
}

defineProps<AdminCourseFormName>();
</script>

<template>
  <Card wrapClass="spacing-vertical-bottom">
    <template #header>
      <Title :level="6">
        {{ langs?.admin.course.form.name }}
      </Title>
    </template>
    <template #body>
      <Input required :label="langs?.common.form.label.nameEng" />

      <Input required :label="langs?.common.form.label.nameEng" />
    </template>
  </Card>
</template>
