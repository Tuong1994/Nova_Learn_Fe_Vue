<script lang="ts" setup>
import { computed, defineComponent } from "vue";
import { Columns } from "@/common/interface/table";
import BodyHeader from "@/components/BodyHeader/BodyHeader.vue";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Title from "@/components/Typography/Title.vue";
import Table from "@/components/Table/Table.vue";
import Input from "@/components/Fields/Input/Input.vue";
import Button from "@/components/Button/Button.vue";
import Pagination from "@/components/Pagination/Pagination.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "AdminTopicListView" });

const { langs } = useLang();

interface IData {
  id: string;
  name: string;
  course: string;
}

const data = computed<IData[]>(() => [
  { id: "1", name: "HTML/CSS", course: "Bootcamp - Front End" },
  { id: "2", name: "Javascript", course: "Bootcamp - Front End" },
  { id: "3", name: "ReactJs", course: "Bootcamp - Front End" },
  { id: "4", name: "OOP - Java", course: "Bootcamp - Back End" },
]);

const columns = computed<Columns<any>>(() => [
  {
    id: "name",
    title: "Name",
    dataIndex: "name",
  },
  {
    id: "course",
    title: "Course",
    dataIndex: "course",
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
        {{ langs?.admin.topic.list.title }}
      </Title>
    </template>
    <template #right>
      <router-link to="/admin/topic/form">
        <Button variant="primary">
          {{ langs?.admin.topic.list.action }}
        </Button>
      </router-link>
    </template>
  </BodyHeader>

  <Section>
    <Table :dataSource="data" :columns="columns" hasFilter hasSelection>
      <template #filter>
        <Row :gutters="[10]">
          <Col :span="8">
            <Input />
          </Col>
          <Col :span="8">
            <Input />
          </Col>
          <Col :span="8">
            <Input />
          </Col>
        </Row>
      </template>
    </Table>

    <Pagination hasContent />
  </Section>
</template>
