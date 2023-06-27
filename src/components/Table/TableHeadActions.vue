<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "vue";
import useLang from "@/common/hooks/useLang";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";
import Button from "../Button/Button.vue";

defineComponent({ name: "NVLTableHeadActions" });

interface NVLTableHeadActionsProps {
  tHeadColSpan: number;
}

const { langs } = useLang();

defineProps<NVLTableHeadActionsProps>();

const emits = defineEmits(["onRemove", "onCancel"]);

const onRemove = () => emits("onRemove");

const onCancel = () => emits("onCancel");
</script>

<template>
  <th :colspan="tHeadColSpan">
    <Row justify="start">
      <Col>
        <Button
          ghost
          variant="danger"
          size="sm"
          wrapClass="table-head-action"
          @onClick="onRemove"
        >
          {{ langs?.common.actions.remove }}
        </Button>
      </Col>
      <Col>
        <Button
          variant="primary"
          size="sm"
          wrapClass="table-head-action"
          @onClick="onCancel"
        >
          {{ langs?.common.actions.cancel }}
        </Button>
      </Col>
    </Row>
  </th>
</template>
