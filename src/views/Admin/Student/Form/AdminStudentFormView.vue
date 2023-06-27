<script lang="ts" setup>
import { defineComponent, computed } from "vue";
import FormLayout from "@/components/FormLayout/FormLayout.vue";
import useLang from "@/common/hooks/useLang";
import { IBreadCrumbItem } from "@/common/interface/base";

defineComponent({ name: "AdminStudentFormView" });

const { langs } = useLang();

const breadcrumbs = computed<IBreadCrumbItem[]>(() => [
  {
    id: "1",
    title: langs.value?.admin.student.list.title ?? "",
    link: "/admin/student/list",
  },
  {
    id: "2",
    title: langs.value?.admin.student.form.addTitle ?? "",
    link: "/admin/student/form",
  },
]);
</script>

<template>
  <FormLayout
    :breadcrumbs="breadcrumbs"
    :title="langs?.admin.student.form.addTitle"
  >
  </FormLayout>
</template>
