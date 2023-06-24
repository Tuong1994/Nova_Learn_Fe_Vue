<script lang="ts" setup>
import Drawer from "@/components/Drawer/Drawer.vue";
import { defineComponent, defineProps, defineEmits } from "vue";

defineComponent({ name: "AdminSlideMenu" });

interface AdminSlideMenuProps {
  isShowMenu: boolean;
}

defineProps<AdminSlideMenuProps>();

const emits = defineEmits(["onCloseMenu"]);

const onCloseMenu = () => emits("onCloseMenu");
</script>

<template>
  <Drawer :open="isShowMenu" @onClose="onCloseMenu"></Drawer>
</template>
