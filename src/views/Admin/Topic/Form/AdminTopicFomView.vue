<script lang="ts" setup>
import { computed, defineComponent } from "vue";
import { IBreadCrumbItem } from "@/common/interface/base";
import FormLayout from "@/components/FormLayout/FormLayout.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "AdminTopFormView" });

const { langs } = useLang();

const breadcrumbs = computed<IBreadCrumbItem[]>(() => [
  {
    id: "1",
    title: langs.value?.admin.topic.list.title ?? "",
    link: "/admin/topic/list",
  },
  {
    id: "2",
    title: langs.value?.admin.topic.form.addTitle ?? "",
    link: "/admin/topic/form",
  },
]);
</script>

<template>
  <FormLayout
    :breadcrumbs="breadcrumbs"
    :title="langs?.admin.topic.form.addTitle"
  ></FormLayout>
</template>
