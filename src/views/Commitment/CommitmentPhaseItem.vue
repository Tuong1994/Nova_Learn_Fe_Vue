<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Image from "@/components/Image/Image.vue";
import List from "@/components/List/List.vue";
import ListItem from "@/components/List/ListItem.vue";

defineComponent({ name: "CommitmentPhaseItem" });

interface CommitmentPhaseItemProps {
  phase: any;
}

defineProps<CommitmentPhaseItemProps>();
</script>

<template>
  <Row align="start" justify="spaceBetween" wrapClass="tab-inner">
    <Col :xs="0" :md="0" :lg="8" :span="6" wrapClass="inner-col">
      <Image fit="cover" wrapClass="col-image" :src="phase.imageUrl" />
    </Col>
    <Col :xs="24" :md="24" :lg="15" :span="17" wrapClass="inner-col">
      <Title :level="6">
        {{ phase.subTitle }}
      </Title>
      <Paragraph align="justify">
        {{ phase.content }}
      </Paragraph>
      <List>
        <ListItem v-for="(list, idx) in phase.list" :key="idx">
          {{ list }}
        </ListItem>
      </List>
    </Col>
  </Row>
</template>
