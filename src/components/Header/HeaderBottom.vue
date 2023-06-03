<script lang="ts" setup>
import { defineComponent, defineEmits, defineProps, ref } from "vue";
import { Langs } from "@/common/lang";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";
import Logo from "../Logo/Logo.vue";
import Menu from "./Menu.vue";
import Search from "./Search.vue";
import Profile from "./Profile.vue";
import Translate from "./Translate.vue";
import IconBars from "../Icons/IconBars.vue";

defineComponent({ name: "NVLHeaderBottom" });

interface HeaderBottomProps {
  langs: Langs;
  isLogin: boolean;
}

defineProps<HeaderBottomProps>();

const emits = defineEmits(["onShowMenu"]);

const onShowMenu = () => emits("onShowMenu");
</script>

<template>
  <div class="header-bottom">
    <Row align="center" justify="spaceBetween">
      <!-- Logo -->
      <Col :xs="22" :md="12" :lg="12" :span="isLogin ? 7 : 5">
        <Logo theme="dark" />
      </Col>

      <!-- Menu -->
      <Col :xs="0" :md="0" :lg="0" :span="10">
        <Menu />
      </Col>

      <!-- Search -->
      <Col :xs="0" :md="10" :lg="10" :span="4">
        <Search :langs="langs" />
      </Col>

      <Col :xs="0" :md="0" :lg="0" :span="1">
        <Translate :langs="langs" />
      </Col>

      <!-- Profile -->
      <Col :xs="0" :md="0" :lg="0">
        <Profile :isLogin="isLogin" :langs="langs" />
      </Col>

      <!-- Responsive button -->
      <Col :xs="2" :md="2" :lg="2" :span="0">
        <IconBars class="bottom-btn" @onClick="onShowMenu" />
      </Col>
    </Row>
  </div>
</template>
