<script lang="ts" setup>
import { computed, defineComponent, defineProps } from "vue";
import { IBreadCrumbItem } from "@/common/interface/base";
import FormLayout from "@/components/FormLayout/FormLayout.vue";
import Button from "@/components/Button/Button.vue";
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
    <template #layout-header-action>
      <Button variant="primary">
        {{ langs?.common.actions.save }}
      </Button>
    </template>
  </FormLayout>
</template>
