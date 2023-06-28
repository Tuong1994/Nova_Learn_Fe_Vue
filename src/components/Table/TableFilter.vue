<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";
import Select from "../Fields/Select/Select.vue";
import Button from "../Button/Button.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "NVLTableFilter" });

interface NVLTableFilterProps {
  wrapClass?: string;
}

const { langs } = useLang();

defineProps<NVLTableFilterProps>();
</script>

<template>
  <Row wrapClass="table-filter" :gutters="[10]">
    <Col :xs="24" :md="24" :lg="24" :span="18">
      <slot></slot>
    </Col>

    <Col :xs="24" :md="24" :lg="24" :span="6">
      <Row>
        <Col :span="16">
          <Select />
        </Col>
        <Col :span="8">
          <Button variant="primary" wrapClass="filter-action">
            {{ langs?.common.actions.cancel }}
          </Button>
        </Col>
      </Row>
    </Col>
  </Row>
</template>
