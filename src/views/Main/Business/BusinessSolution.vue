<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Title from "@/components/Typography/Title.vue";
import List from "@/components/List/List.vue";
import ListItem from "@/components/List/ListItem.vue";
import Image from "@/components/Image/Image.vue";

defineComponent({ name: "BusinessSolution" });

interface BusinessSolutionProps {
  langs: Langs;
}

defineProps<BusinessSolutionProps>();
</script>

<template>
  <Section wrapClass="business-solution">
    <Row align="start">
      <Col :xs="24" :md="24" :lg="24" :span="10">
        <Title :level="3">
          {{ langs?.business.solution.title }}
        </Title>
        <List :title="langs?.business.solution.subTitle">
          <ListItem>
            {{ langs?.business.solution.list_1 }}
          </ListItem>
          <ListItem>
            {{ langs?.business.solution.list_2 }}
          </ListItem>
          <ListItem>
            {{ langs?.business.solution.list_3 }}
          </ListItem>
          <ListItem>
            {{ langs?.business.solution.list_4 }}
          </ListItem>
          <ListItem>
            {{ langs?.business.solution.list_5 }}
          </ListItem>
          <ListItem>
            {{ langs?.business.solution.list_6 }}
          </ListItem>
        </List>
      </Col>
      <Col :xs="24" :md="24" :lg="24" :span="14">
        <div class="solution-image">
          <Image
            fit="cover"
            :src="require('../../../assets/images/banner/banner_8.jpg')"
          />
        </div>
      </Col>
    </Row>
  </Section>
</template>
