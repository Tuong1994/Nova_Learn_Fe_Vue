<script lang="ts" setup>
import { defineComponent, defineProps, computed } from "vue";
import { Langs } from "@/common/lang";
import Table from "@/components/Table/Table.vue";
import Pagination from "@/components/Pagination/Pagination.vue";
import { Columns } from "@/common/interface/table";

defineComponent({ name: "StudentCourse" });

interface StudentCourseProps {
  langs: Langs;
}

defineProps<StudentCourseProps>();

interface IData {
  id: string;
  name: string;
  category: string;
  totalTopic: number;
}

const data = computed<IData[]>(() => [
  {
    id: "1",
    name: "HTML/CSS/Javascript - ReactJs",
    category: "Bootcamp - Front End",
    totalTopic: 16,
  },
  { id: "2", name: "Java", category: "Bootcamp - Back End", totalTopic: 16 },
]);

const columns = computed<Columns<any>>(() => [
  {
    id: "num",
    title: "No.",
    dataIndex: "",
    render: (_, idx) => `${(idx ?? 0) + 1}`,
  },
  {
    id: "name",
    title: "Name",
    dataIndex: "name",
  },
  {
    id: "category",
    title: "Category",
    dataIndex: "category",
  },
  {
    id: "totalTopic",
    title: "Topics",
    dataIndex: "totalTopic",
  },
]);
</script>

<template>
  <Table :dataSource="data" :columns="columns" />

  <Pagination hasContent />
</template>
