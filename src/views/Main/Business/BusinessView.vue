<script lang="ts" setup>
import { computed, defineComponent } from "vue";
import { ILinkItem } from "@/common/interface/base";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import LinkItem from "@/components/NavLink/LinkItem.vue";
import LinkContent from "@/components/NavLink/LinkContent.vue";
import BusinessBanner from "./BusinessBanner.vue";
import BusinessSolution from "./BusinessSolution.vue";
import useLang from "@/common/hooks/useLang";
import BusinessEmployee from "./BusinessEmployee.vue";
import useNavLink from "@/common/hooks/useNavLink";
import BusinessTraining from "./BusinessTraining.vue";
import BusinessProcedure from "./BusinessProcedure.vue";
import BusinessContact from "./BusinessContact.vue";
import BusinessQuestion from "./BusinessQuestion.vue";

defineComponent({ name: "BusinessView" });

const { langs } = useLang();

useNavLink();

const links = computed<ILinkItem[]>(() => [
  { id: "employee", title: langs.value?.business.sideNav.employee },
  { id: "training", title: langs.value?.business.sideNav.training },
  { id: "procedure", title: langs.value?.business.sideNav.procedure },
  { id: "contact", title: langs.value?.business.sideNav.contact },
  { id: "question", title: langs.value?.business.sideNav.question },
]);
</script>

<template>
  <div class="business">
    <LinkContent>
      <BusinessBanner :langs="langs" />
    </LinkContent>

    <LinkContent>
      <BusinessSolution :langs="langs" />
    </LinkContent>

    <Section>
      <Row align="start" justify="spaceBetween">
        <Col :xs="0" :md="0" :lg="0" :span="4" wrapClass="business-col">
          <div class="col-side-nav">
            <LinkItem v-for="link in links" :key="link.id" :link="link" />
          </div>
        </Col>

        <Col :xs="24" :md="24" :lg="24" :span="20">
          <LinkContent id="employee">
            <BusinessEmployee :langs="langs" />
          </LinkContent>

          <LinkContent
            wrapClass="background"
            :style="{
              backgroundImage: `url(${require('../../../assets/images/banner/banner_3.jpg')})`,
            }"
          />

          <LinkContent id="training">
            <BusinessTraining :langs="langs" />
          </LinkContent>

          <LinkContent id="procedure">
            <BusinessProcedure :langs="langs" />
          </LinkContent>

          <LinkContent id="contact">
            <BusinessContact :langs="langs" />
          </LinkContent>

          <LinkContent id="question">
            <BusinessQuestion :langs="langs" />
          </LinkContent>
        </Col>
      </Row>
    </Section>
  </div>
</template>
