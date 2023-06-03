<script lang="ts" setup>
import { defineComponent } from "vue";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";
import Select from "../Fields/Select.vue";
import Button from "../Button/Button.vue";

defineComponent({ name: "NVLTableFilter" });
</script>

<template>
  <div class="table-filter">
    <Row>
      <Col :span="8">
        <slot></slot>
      </Col>
      <Col :span="4">
        <Row>
          <Col :span="8">
            <Select wrapClass="filter-select" size="sm" />
          </Col>
          <Col :span="4">
            <Button variant="primary" size="sm">Filter</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
</template>
