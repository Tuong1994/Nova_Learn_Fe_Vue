<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import IconPeopleGroup from "@/components/Icons/IconPeopleGroup.vue";
import IconRoad from "@/components/Icons/IconRoad.vue";
import IconFaceSmile from "@/components/Icons/IconFaceSmile.vue";
import IconBuilding from "@/components/Icons/IconBuilding.vue";
import useReveal from "@/common/hooks/useReveal";

defineComponent({ name: "BusinessEmployee" });

interface BusinessEmployeeProps {
  langs: Langs;
}

defineProps<BusinessEmployeeProps>();

useReveal("employeeInner");
</script>

<template>
  <div class="business-employee">
    <Section id="employeeInner">
      <Title :level="3" align="center">
        {{ langs?.business.employee.title }}
      </Title>
      <div class="employee-group">
        <div class="group-item">
          <IconRoad :size="16" class="item-icon" />
          <Paragraph :size="13" align="center">
            {{ langs?.business.employee.content_1 }}
          </Paragraph>
        </div>
        <div class="group-item">
          <IconFaceSmile :size="16" class="item-icon" />
          <Paragraph :size="13" align="center">
            {{ langs?.business.employee.content_2 }}
          </Paragraph>
        </div>
        <div class="group-item">
          <IconPeopleGroup :size="16" class="item-icon" />
          <Paragraph :size="13" align="center">
            {{ langs?.business.employee.content_3 }}
          </Paragraph>
        </div>

        <div class="group-icon">
          <IconBuilding :size="50" />
        </div>
      </div>
    </Section>
  </div>
</template>
