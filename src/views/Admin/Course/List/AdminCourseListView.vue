<script lang="ts" setup>
import { defineComponent } from "vue";
import { Columns } from "@/common/interface/table";
import Section from "@/components/Section/Section.vue";
import BodyHeader from "@/components/BodyHeader/BodyHeader.vue";
import Table from "@/components/TableV2/Table.vue";
import Badge from "@/components/Badge/Badge.vue";

defineComponent({ name: "AdminCourseListView" });

interface IData {
  id: string;
  name: string;
  email: string;
  phone: string;
}

const data: IData[] = [
  { id: "1", name: "User 1", email: "user1@example.com", phone: "0793229970" },
  { id: "2", name: "User 2", email: "user2@example.com", phone: "0793229980" },
];

const columns: Columns<IData> = [
  {
    id: "name",
    title: "Name",
    dataIndex: "name",
    component: Badge,
  },
  {
    id: "email",
    title: "Email",
    dataIndex: "email",
    render: (data) => `<strong>${data?.name}</strong>`,
  },
  {
    id: "phone",
    title: "Phone",
    dataIndex: "phone",
  },
];
</script>

<template>
  <BodyHeader>
    <template #title> Title </template>
  </BodyHeader>
  <Section>
    <Table rowKey="id" :dataSource="data" :columns="columns" />
  </Section>
</template>
