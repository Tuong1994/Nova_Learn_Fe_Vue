<script lang="ts" setup>
import { defineComponent, defineProps, ref } from "vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import AdminSideNav from "./Layout/AdminSideNav.vue";
import AdminHeader from "./Layout/AdminHeader.vue";
import useMenu from "@/common/hooks/useMenu";
import SingleUpload from "@/components/Fields/SingleUpload.vue";
import AdminSlideMenu from "./Layout/AdminSlideMenu.vue";

defineComponent({ name: "AdminView" });

interface AdminViewProps {
  isLogin: boolean;
}

defineProps<AdminViewProps>();

const { adminMenu } = useMenu();

const isShrink = ref<boolean>(false);

const isShowMenu = ref<boolean>(false);

const onShrink = () => (isShrink.value = !isShrink.value);

const onShowMenu = () => (isShowMenu.value = true);

const onCloseMenu = () => (isShowMenu.value = false);
</script>

<template>
  <div class="admin-layout">
    <div
      :class="[
        'admin-layout-col-left',
        isShrink ? 'admin-layout-col-left--width' : '',
      ]"
    >
      <AdminSideNav
        :adminMenu="adminMenu"
        :isShrink="isShrink"
        @onShrink="onShrink"
      />

      <AdminSlideMenu :isShowMenu="isShowMenu" @onCloseMenu="onCloseMenu" />
    </div>

    <div
      :class="[
        'admin-layout-col-right',
        isShrink ? 'admin-layout-col-right--width' : '',
      ]"
    >
      <AdminHeader :isLogin="isLogin" @onShowMenu="onShowMenu" />
    </div>
  </div>
</template>
