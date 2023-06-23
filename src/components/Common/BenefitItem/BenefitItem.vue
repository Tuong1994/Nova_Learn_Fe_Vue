<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { IBenefitItem } from "@/common/interface/base";
import Title from "../../Typography/Title.vue";
import Paragraph from "../../Typography/Paragraph.vue";
import IconCustom from "../../Icons/IconCustom.vue";

defineComponent({ name: "NVLCommonBenefitItem" });

interface NVLCommonBenefitItemProps {
  benefit: IBenefitItem;
}

defineProps<NVLCommonBenefitItemProps>();
</script>

<template>
  <div class="nvl-common-benefit-item">
    <div class="item-icon">
      <div class="icon-inner">
        <IconCustom :icon="benefit.icon" />
      </div>
      <div class="icon-line"></div>
    </div>

    <div class="item-content">
      <Title :level="6">{{ benefit.title }}</Title>
      <Paragraph wrapClass="content-text" align="justify">
        {{ benefit.content }}
      </Paragraph>
    </div>
  </div>
</template>
