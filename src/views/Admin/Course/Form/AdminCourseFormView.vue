<script lang="ts" setup>
import { computed, defineComponent } from "vue";
import { IBreadCrumbItem } from "@/common/interface/base";
import FormLayout from "@/components/FormLayout/FormLayout.vue";
import AdminCourseFormName from "./AdminCourseFormName.vue";
import AdminCourseFormDesc from "./AdminCourseFormDesc.vue";
import AdminCourseFormProject from "./AdminCourseFormProject.vue";
import AdminCourseFormFee from "./AdminCourseFormFee.vue";
import AdminCourseFormDuration from "./AdminCourseFormDuration.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "AdminCourseFormView" });

const { langs } = useLang();

const breadcrumbs = computed<IBreadCrumbItem[]>(() => [
  {
    id: "1",
    title: langs.value?.admin.course.list.title ?? "",
    link: "/admin/course/list",
  },
  {
    id: "1",
    title: langs.value?.admin.course.form.addTitle ?? "",
    link: "/admin/course/form",
  },
]);
</script>

<template>
  <FormLayout
    :breadcrumbs="breadcrumbs"
    :title="langs?.admin.course.form.addTitle"
  >
    <template #left>
      <AdminCourseFormName :langs="langs" />

      <AdminCourseFormDesc :langs="langs" />

      <AdminCourseFormProject :langs="langs" />
    </template>

    <template #right>
      <AdminCourseFormFee :langs="langs" />

      <AdminCourseFormDuration :langs="langs" />
    </template>
  </FormLayout>
</template>
