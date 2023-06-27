<script lang="ts" setup>
import { defineComponent, defineProps, computed } from "vue";
import { Langs } from "@/common/lang";
import { Columns } from "@/common/interface/table";
import Table from "@/components/Table/Table.vue";
import Pagination from "@/components/Pagination/Pagination.vue";
import RateStar from "@/components/Rate/RateStar.vue";

defineComponent({ name: "StudentRate" });

interface StudentRateProps {
  langs: Langs;
}

defineProps<StudentRateProps>();

interface IData {
  id: string;
  point: number;
  course: string;
}

const data = computed<IData[]>(() => [
  {
    id: "1",
    point: 4,
    course: "HTML/CSS/Javascript - ReactJs",
  },
  { id: "2", point: 3, course: "Java" },
]);

const columns = computed<Columns<any>>(() => [
  {
    id: "num",
    title: "No",
    dataIndex: "",
    render: (_, idx) => `${(idx ?? 0) + 1}`,
  },
  {
    id: "point",
    title: "Point",
    dataIndex: "point",
    component: (data) => ({
      node: RateStar,
      props: {
        point: data.point,
        justify: "center",
        showPoint: false,
        showRater: false,
      },
    }),
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
