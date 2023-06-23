<script lang="ts" setup>
import { computed, defineComponent } from "vue";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Table from "@/components/Table/Table.vue";
import TableRow from "@/components/Table/TableRow.vue";
import TableCell from "@/components/Table/TableCell.vue";
import List from "@/components/List/List.vue";
import ListItem from "@/components/List/ListItem.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import NoteMessage from "@/components/NoteMessage/NoteMessage.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "DisclaimerView" });

const { langs } = useLang();

const tabletHeaders = computed(() => [
  langs.value?.common.table.header.number ?? "",
  langs.value?.common.table.header.host ?? "",
  langs.value?.common.table.header.accNumber ?? "",
  langs.value?.common.table.header.bank ?? "",
]);

const tableRows = computed(() => [
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

    <Table :header="tabletHeaders">
      <template #row>
        <TableRow v-for="(row, idx) in tableRows" :key="row.id">
          <template #cell>
            <TableCell>
              {{ idx + 1 }}
            </TableCell>
            <TableCell>
              {{ row.host }}
            </TableCell>
            <TableCell>
              {{ row.accNumber }}
            </TableCell>
            <TableCell>
              {{ row.branch }}
            </TableCell>
          </template>
        </TableRow>
      </template>
    </Table>
  </Section>
</template>
