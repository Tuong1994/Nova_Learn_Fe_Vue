<script lang="ts" setup>
import { computed, defineComponent } from "vue";
import { Columns } from "@/common/interface/table";
import BodyHeader from "@/components/BodyHeader/BodyHeader.vue";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Title from "@/components/Typography/Title.vue";
import Input from "@/components/Fields/Input.vue";
import Table from "@/components/Table/Table.vue";
import Pagination from "@/components/Pagination/Pagination.vue";
import Button from "@/components/Button/Button.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "AdminCategoryListView" });

const { langs } = useLang();

interface IData {
  id: string;
  name: string;
  courses: number;
}

const data = computed<IData[]>(() => [
  { id: "1", name: "From Zero to Hero", courses: 8 },
  { id: "2", name: "BackEnd background", courses: 6 },
]);

const columns = computed<Columns<any>>(() => [
  {
    id: "name",
    title: "Name",
    dataIndex: "name",
  },
  {
    id: "courses",
    title: "Courses",
    dataIndex: "courses",
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
        {{ langs?.admin.category.list.title }}
      </Title>
    </template>
    <template #right>
      <router-link to="/admin/category/form">
        <Button variant="primary">
          {{ langs?.admin.category.list.action }}
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
