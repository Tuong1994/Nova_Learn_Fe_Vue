<script lang="ts" setup>
import { computed, defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import { IDropdownItem } from "@/common/interface/base";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";
import Button from "../Button/Button.vue";
import Dropdown from "../Dropdown/Dropdown.vue";
import Avatar from "../Avatar/Avatar.vue";
import Image from "../Image/Image.vue";
import Tooltip from "../Tooltip/Tooltip.vue";

defineComponent({ name: "NVLHeaderProfile" });

interface NVLHeaderProfileProps {
  langs: Langs;
  isLogin: boolean;
}

const props = defineProps<NVLHeaderProfileProps>();

const items = computed<IDropdownItem[]>(() => [
  {
    id: "admin",
    title: props.langs?.common.components.header.profile.admin ?? "",
    link: "/admin",
    icon: "gear",
  },
  {
    id: "info",
    title: props.langs?.common.components.header.profile.info ?? "",
    link: "/info",
    icon: "user",
  },
  {
    id: "logout",
    title: props.langs?.common.components.header.profile.logout ?? "",
    icon: "sign-out",
  },
]);
</script>

<template>
  <Row v-if="!isLogin">
    <Col>
      <router-link to="/signIn">
        <Button variant="primary" size="sm">
          {{ langs?.common.components.header.profile.signIn }}
        </Button>
      </router-link>
    </Col>
    <Col>
      <router-link to="/signUp">
        <Button variant="primary" size="sm">
          {{ langs?.common.components.header.profile.signUp }}
        </Button>
      </router-link>
    </Col>
  </Row>
  
  <Dropdown
    v-if="isLogin"
    :items="items"
    trigger="click"
    placement="bottomRight"
  >
    <Tooltip content="User name" placement="left">
      <Avatar>
        <Image />
      </Avatar>
    </Tooltip>
  </Dropdown>
</template>
