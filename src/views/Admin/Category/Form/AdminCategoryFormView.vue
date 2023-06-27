<script lang="ts" setup>
import { computed, defineComponent } from "vue";
import { IBreadCrumbItem } from "@/common/interface/base";
import FormLayout from "@/components/FormLayout/FormLayout.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "AdminCategoryFormView" });

const { langs } = useLang();

const breadcrumbs = computed<IBreadCrumbItem[]>(() => [
  {
    id: "1",
    title: langs.value?.admin.category.list.title ?? "",
    link: "/admin/category/list",
  },
  {
    id: "2",
    title: langs.value?.admin.category.form.addTitle ?? "",
    link: "/admin/category/form",
  },
]);
</script>

<template>
  <FormLayout
    :breadcrumbs="breadcrumbs"
    :title="langs?.admin.category.form.addTitle"
  >
  </FormLayout>
</template>
