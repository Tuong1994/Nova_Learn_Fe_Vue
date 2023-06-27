<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "NVLBodyHeader" });

interface NVLBodyHeaderProps {
  wrapClass?: string;
  hasTotal?: boolean;
  total?: number;
}

const { langs } = useLang();

defineProps<NVLBodyHeaderProps>();
</script>

<template>
  <Row
    :gutters="[5]"
    justify="spaceBetween"
    align="start"
    :wrapClass="`nvl-body-header ${wrapClass}`"
  >
    <Col :xs="24" :md="16">
      <div class="header-title">
        <slot name="title"></slot>

        <div v-if="hasTotal" class="title-total">
          {{ langs?.common.components.bodyHeader.subTitle }} ({{ total }})
        </div>
      </div>
    </Col>
    <Col :xs="24" :md="8">
      <div class="header-right">
        <slot name="right"></slot>
      </div>
    </Col>
  </Row>
</template>
