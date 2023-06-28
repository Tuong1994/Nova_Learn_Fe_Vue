<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "vue";
import { Langs } from "@/common/lang";
import Card from "@/components/Card/Card.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Avatar from "@/components/Avatar/Avatar.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Divider from "@/components/Divider/Divider.vue";
import InfoRow from "@/components/InfoRow/InfoRow.vue";
import IconPen from "@/components/Icons/IconPen.vue";

defineComponent({ name: "StudentInfo" });

interface StudentInfoProps {
  langs: Langs;
}

defineProps<StudentInfoProps>();

const emits = defineEmits(["onEdit"]);

const onEdit = () => emits("onEdit");
</script>

<template>
  <Card bodyClass="student-info">
    <template #body>
      <Row align="center" justify="spaceBetween">
        <Col :span="6">
          <Avatar :size="65" />
        </Col>
        <Col :span="18">
          <Paragraph :size="16" theme="light">
            {{ langs?.student.info.greeting }}, Student name
          </Paragraph>
        </Col>
      </Row>

      <Divider />

      <Row wrapClass="info-edit-icon" justify="end">
        <Col>
          <IconPen @onClick="onEdit" />
        </Col>
      </Row>

      <InfoRow
        icon="user"
        content="Nhâm Bổn Tường"
        theme="light"
        :titleColSpan="{ span: 5 }"
        :contentColSpan="{ span: 19 }"
      />

      <InfoRow
        icon="phone"
        content="0793229970"
        theme="light"
        :titleColSpan="{ span: 5 }"
        :contentColSpan="{ span: 19 }"
      />

      <InfoRow
        icon="envelope"
        content="tuong@example.com"
        theme="light"
        :titleColSpan="{ span: 5 }"
        :contentColSpan="{ span: 19 }"
      />

      <InfoRow
        icon="venus-mars"
        content="Nam"
        theme="light"
        :titleColSpan="{ span: 5 }"
        :contentColSpan="{ span: 19 }"
      />

      <InfoRow
        icon="calendar"
        content="28/11/1994"
        theme="light"
        :titleColSpan="{ span: 5 }"
        :contentColSpan="{ span: 19 }"
      />

      <InfoRow
        icon="location-dot"
        content="79/24/13 Âu Cơ Phường 14 Quận 11 TP Hồ Chí Minh"
        theme="light"
        :titleColSpan="{ span: 5 }"
        :contentColSpan="{ span: 19 }"
      />
    </template>
  </Card>
</template>
