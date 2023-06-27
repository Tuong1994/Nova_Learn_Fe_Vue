<script lang="ts" setup>
import { computed, defineComponent } from "vue";
import { Columns } from "@/common/interface/table";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import List from "@/components/List/List.vue";
import ListItem from "@/components/List/ListItem.vue";
import NoteMessage from "@/components/NoteMessage/NoteMessage.vue";
import Table from "@/components/Table/Table.vue";
import useLang from "@/common/hooks/useLang";

interface TableData {
  id: string;
  host: string;
  branch: string;
  accNumber: string;
}

defineComponent({ name: "DisclaimerView" });

const { langs } = useLang();

const data = computed<TableData[]>(() => [
  {
    id: "vib",
    host: "Học viện đào tạo lập trình Nova Learn",
    branch: "VIB - Quận Phú Nhuận",
    accNumber: "0157.244.47",
  },
  {
    id: "vietcom",
    host: "Học viện đào tạo lập trình Nova Learn",
    branch: "VIETCOMBANK - Quận 11",
    accNumber: "111.112.86.86.666",
  },
]);

const columns = computed<Columns<TableData>>(() => [
  {
    id: "id",
    title: langs.value?.common.table.header.number ?? "",
    dataIndex: "id",
    render: (_, idx) => `<div>${(idx ?? 0) + 1}</div>`,
  },
  {
    id: "host",
    title: langs.value?.common.table.header.host ?? "",
    dataIndex: "host",
  },
  {
    id: "accNumber",
    title: langs.value?.common.table.header.accNumber ?? "",
    dataIndex: "accNumber",
  },
  {
    id: "branch",
    title: langs.value?.common.table.header.bank ?? "",
    dataIndex: "branch",
  },
]);
</script>

<template>
  <Section>
    <Title :level="3" align="center">
      {{ langs?.disclaimer.title }}
    </Title>

    <Paragraph>
      {{ langs?.disclaimer.content_1 }}
    </Paragraph>
    <Paragraph>
      {{ langs?.disclaimer.content_2 }}
    </Paragraph>
    <Paragraph>
      {{ langs?.disclaimer.content_3 }}
    </Paragraph>
    <Paragraph>
      {{ langs?.disclaimer.content_4 }}
    </Paragraph>
    <Paragraph>
      {{ langs?.disclaimer.content_5 }}
    </Paragraph>

    <List>
      <ListItem
        >{{ langs?.disclaimer.email }}: {{ langs?.common.info.email }}</ListItem
      >
      <ListItem>{{ langs?.common.info.hotline }}</ListItem>
    </List>

    <Row>
      <Col :xs="24">
        <Paragraph>
          {{ langs?.disclaimer.account }}
        </Paragraph>
      </Col>
      <Col :xs="24">
        <NoteMessage :message="`(${langs?.disclaimer.note})`" italic />
      </Col>
    </Row>

    <Table :dataSource="data" :columns="columns" />
  </Section>
</template>
