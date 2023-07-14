<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Card from "@/components/Card/Card.vue";
import Title from "@/components/Typography/Title.vue";
import Input from "@/components/Fields/Input/Input.vue";

defineComponent({ name: "AdminCourseFormFee" });

interface AdminCourseFormFeeProps {
  langs: Langs;
}

defineProps<AdminCourseFormFeeProps>();
</script>

<template>
  <Card wrapClass="spacing-vertical-bottom">
    <template #header>
      <Title :level="6">
        {{ langs?.admin.course.form.fee }}
      </Title>
    </template>
    <template #body>
      <Input required :label="langs?.common.form.label.amountOfMoney" />
    </template>
  </Card>
</template>
