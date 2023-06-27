<script lang="ts" setup>
import { defineComponent, defineProps, computed } from "vue";
import { Langs } from "@/common/lang";
import { Columns } from "@/common/interface/table";
import Table from "@/components/Table/Table.vue";
import Pagination from "@/components/Pagination/Pagination.vue";

defineComponent({ name: "StudentCourse" });

interface StudentCourseProps {
  langs: Langs;
}

defineProps<StudentCourseProps>();

interface IData {
  id: string;
  comment: string;
  course: string;
}

const data = computed<IData[]>(() => [
  {
    id: "1",
    comment:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, officiis? Maxime inventore laudantium autem architecto esse temporibus fugit iusto consectetur! Veniam modi molestias deleniti beatae debitis, itaque nulla assumenda inventore vel dolore sint corporis dicta harum esse doloribus saepe sed maxime, repudiandae, quis delectus doloremque? Dolorem qui libero ad quos!",
    course: "HTML/CSS/Javascript - ReactJs",
  },
  {
    id: "2",
    comment:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, officiis? Maxime inventore laudantium autem architecto esse temporibus fugit iusto consectetur! Veniam modi molestias deleniti beatae debitis, itaque nulla assumenda inventore vel dolore sint corporis dicta harum esse doloribus saepe sed maxime, repudiandae, quis delectus doloremque? Dolorem qui libero ad quos!",
    course: "Java",
  },
]);

const columns = computed<Columns<any>>(() => [
  {
    id: "num",
    title: "No",
    dataIndex: "",
    render: (_, idx) => `${(idx ?? 0) + 1}`,
  },
  {
    id: "comment",
    title: "Comment",
    dataIndex: "comment",
    render: (data) => `<div class="student-table-cell">${data.comment}</div>`,
  },
  {
    id: "course",
    title: "Course",
    dataIndex: "course",
  },
]);
</script>

<template>
  <Table :dataSource="data" :columns="columns" />

  <Pagination hasContent />
</template>
