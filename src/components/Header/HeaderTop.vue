<script lang="ts" setup>
import { defineComponent, defineProps, computed } from "vue";
import { Langs } from "@/common/lang";
import { IMenuItem } from "@/common/interface/base";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";
import useMenu from "@/common/hooks/useMenu";

defineComponent({ name: "NVLHeaderTop" });

interface HeaderTopProps {
  langs: Langs;
  isHideTop: boolean;
}

const { mainMenu } = useMenu();

defineProps<HeaderTopProps>();

const filterMenu = computed<IMenuItem[]>(() =>
  mainMenu.value.filter((menu) => menu.type === "support")
);
</script>

<template>
  <div :class="['header-top', isHideTop ? 'header-top--height' : '']">
    <Row :style="{ height: '100%' }" align="center" justify="end">
      <Col v-for="menu in filterMenu" :key="menu.id" className="top-link">
        <router-link :to="menu.link ?? '/'" class="link-item">{{
          menu.title
        }}</router-link>
      </Col>
      <Col className="top-link">
        <a href="tel:02839753186" class="link-item">
          {{ langs?.common.info.hotline }}
        </a>
      </Col>
    </Row>
  </div>
</template>
