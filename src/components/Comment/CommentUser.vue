<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";
import Avatar from "../Avatar/Avatar.vue";
import Paragraph from "../Typography/Paragraph.vue";

defineComponent({ name: "NVLCommentUser" });

interface NVLCommentUserProps {
  wrapClass?: string;
  name?: string;
}

defineProps<NVLCommentUserProps>();
</script>

<template>
  <Row :wrapClass="`nvl-comment-user ${wrapClass}`">
    <Col>
      <Avatar />
    </Col>
    <Col>
      <Paragraph>
        {{ name }}
      </Paragraph>
    </Col>
  </Row>
</template>
