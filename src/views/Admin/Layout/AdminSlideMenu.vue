<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "vue";
import { IMenuItem } from "@/common/interface/base";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import IconCustom from "@/components/Icons/IconCustom.vue";
import Drawer from "@/components/Drawer/Drawer.vue";

defineComponent({ name: "AdminSlideMenu" });

interface AdminSlideMenuProps {
  isShowMenu: boolean;
  adminMenu: IMenuItem[];
}

defineProps<AdminSlideMenuProps>();

const emits = defineEmits(["onCloseMenu"]);

const onCloseMenu = () => emits("onCloseMenu");
</script>

<template>
  <Drawer
    :open="isShowMenu"
    @onClose="onCloseMenu"
    wrapClass="admin-slide-menu"
  >
    <router-link
      v-for="menu in adminMenu"
      :key="menu.id"
      :to="menu.link ?? '/admin/course/list'"
      class="menu-item"
    >
      <Row>
        <Col>
          <IconCustom :icon="menu.icon" />
        </Col>
        <Col>
          {{ menu.title }}
        </Col>
      </Row>
    </router-link>
  </Drawer>
</template>
