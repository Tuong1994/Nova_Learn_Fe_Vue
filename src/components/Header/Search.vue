<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Input from "../Fields/Input.vue";
import IconSearch from "../Icons/IconSearch.vue";

defineComponent({ name: "NVLHeaderSearch" });

interface NVLHeaderSearchProps {
    langs: Langs;
}

defineProps<NVLHeaderSearchProps>();
</script>

<template>
  <Input
    size="sm"
    wrapClass="header-search"
    :placeholder="langs?.common.form.placeholder.search"
  >
    <template #suffix>
      <IconSearch />
    </template>
  </Input>
</template>
