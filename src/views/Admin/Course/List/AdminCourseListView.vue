<script lang="ts" setup>
import { computed, defineComponent } from "vue";
import { Columns } from "@/common/interface/table";
import Section from "@/components/Section/Section.vue";
import BodyHeader from "@/components/BodyHeader/BodyHeader.vue";
import Table from "@/components/Table/Table.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Title from "@/components/Typography/Title.vue";
import Button from "@/components/Button/Button.vue";
import Input from "@/components/Fields/Input/Input.vue";
import Pagination from "@/components/Pagination/Pagination.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "AdminCourseListView" });

const { langs } = useLang();

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
    id: "name",
    title: "Name",
    dataIndex: "name",
    render: (data) => `<strong>${data?.name}</strong>`,
  },
  {
    id: "category",
    title: "Category",
    dataIndex: "category",
    render: (data) => `<strong>${data?.category}</strong>`,
  },
  {
    id: "totalTopic",
    title: "Topics",
    dataIndex: "totalTopic",
  },
]);
</script>

<template>
  <BodyHeader
    hasTotal
    :total="100"
    :leftColSpan="{ xs: 12, md: 12 }"
    :rightColSpan="{ xs: 12, md: 12 }"
  >
    <template #title>
      <Title :level="3">
        {{ langs?.admin.course.list.title }}
      </Title>
    </template>
    <template #right>
      <router-link to="/admin/course/form">
        <Button variant="primary">
          {{ langs?.admin.course.list.action }}
        </Button>
      </router-link>
    </template>
  </BodyHeader>

  <Section>
    <Table :dataSource="data" :columns="columns" hasSelection hasFilter>
      <template #filter>
        <Row :gutters="[10]">
          <Col :span="6">
            <Input />
          </Col>
          <Col :span="6">
            <Input />
          </Col>
          <Col :span="6">
            <Input />
          </Col>
          <Col :span="6">
            <Input />
          </Col>
        </Row>
      </template>
    </Table>

    <Pagination hasContent />
  </Section>
</template>
