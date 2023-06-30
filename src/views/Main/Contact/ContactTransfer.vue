<script lang="ts" setup>
import { defineComponent, defineProps, computed } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Title from "@/components/Typography/Title.vue";
import Card from "@/components/Card/Card.vue";
import InfoRow from "@/components/InfoRow/InfoRow.vue";

defineComponent({ name: "ContactTransfer" });

interface ContactTransferProps {
  langs: Langs;
}

const props = defineProps<ContactTransferProps>();

const accounts = computed(() => [
  {
    id: "vib",
    title: "VIB - BANK",
    host: "Học viện đào tạo lập trình Nova Learn",
    branch: "HCM - Quận Phú Nhuận",
    accNumber: "0157.244.47",
  },
  {
    id: "vietcom",
    title: "VIETCOMBANK",
    host: "Học viện đào tạo lập trình Nova Learn",
    branch: "HCM - Quận 11",
    accNumber: "111.112.86.86.666",
  },
]);
</script>

<template>
  <Section wrapClass="contact-transfer">
    <Title :level="3">
      {{ langs?.contact.transfer.title }}
    </Title>
    <Row>
      <Col v-for="account in accounts" :key="account.id" :xs="24" :md="24" :span="12">
        <Card isHover wrapClass="transfer-card" headerClass="card-header">
          <template #header>
            <Title :level="6" theme="light" wrapClass="header-title">
              {{ account.title }}
            </Title>
          </template>
          <template #body>
            <InfoRow
              :title="langs?.contact.transfer.accNumber"
              :content="account.accNumber"
            />
            <InfoRow
              :title="langs?.contact.transfer.host"
              :content="account.host"
            />
            <InfoRow
              :title="langs?.contact.transfer.branch"
              :content="account.branch"
            />
          </template>
        </Card>
      </Col>
    </Row>
  </Section>
</template>
