<script lang="ts" setup>
import { defineComponent } from "vue";
import { Columns } from "@/common/interface/table";
import Section from "@/components/Section/Section.vue";
import BodyHeader from "@/components/BodyHeader/BodyHeader.vue";
import Table from "@/components/Table/Table.vue";
import Avatar from "@/components/Avatar/Avatar.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Title from "@/components/Typography/Title.vue";
import Button from "@/components/Button/Button.vue";
import Input from "@/components/Fields/Input.vue";
import Pagination from "@/components/Pagination/Pagination.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "AdminCourseListView" });

const { langs } = useLang();

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
    component: Avatar,
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
  <BodyHeader hasTotal :total="100">
    <template #title>
      <Title :level="3">
        {{ langs?.admin.course.list.title }}
      </Title>
    </template>
    <template #right>
      <router-link to="/admin/course/form">
        <Button variant="primary" size="lg">
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
