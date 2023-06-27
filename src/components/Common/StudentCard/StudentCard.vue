<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { IStudentCard } from "@/common/interface/base";
import { Langs } from "@/common/lang";
import Card from "../../Card/Card.vue";
import Row from "../../Grid/Row.vue";
import Col from "../../Grid/Col.vue";
import Title from "../../Typography/Title.vue";
import Image from "../../Image/Image.vue";
import InfoRow from "../../InfoRow/InfoRow.vue";

defineComponent({ name: "NVLCommonStudentCard" });

interface NVLCommonStudentCardProps {
  langs: Langs;
  student: IStudentCard;
}

defineProps<NVLCommonStudentCardProps>();
</script>

<template>
  <Card
    isHover
    wrapClass="nvl-common-student-card"
    bodyClass="nvl-student-card-body"
  >
    <template #body>
      <Row align="start" justify="spaceBetween">
        <Col :xs="24" :span="10">
          <div class="card-image">
            <div class="image-wrap">
              <Image fit="cover" :src="student.imageUrl" />
            </div>
          </div>
        </Col>
        <Col :xs="24" :span="13">
          <Title wrapClass="card-title" theme="light" :level="6">
            {{ student.name }}
          </Title>
          <InfoRow
            theme="light"
            wrapClass="card-info"
            :titleColSpan="{ span: 8 }"
            :contentColSpan="{ span: 16 }"
            :title="langs?.common.components.studentCard.course"
            :content="student.course"
          />
          <InfoRow
            theme="light"
            wrapClass="card-info"
            :titleColSpan="{ span: 8 }"
            :contentColSpan="{ span: 16 }"
            :title="langs?.common.components.studentCard.workAt"
            :content="student.workAt"
          />
          <InfoRow
            theme="light"
            wrapClass="card-info"
            :titleColSpan="{ span: 8 }"
            :contentColSpan="{ span: 16 }"
            :title="langs?.common.components.studentCard.position"
            :content="student.position"
          />
        </Col>
      </Row>
    </template>
  </Card>
</template>
