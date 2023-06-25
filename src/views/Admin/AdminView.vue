<script lang="ts" setup>
import { defineComponent, defineProps, ref } from "vue";
import AdminSideNav from "./Layout/AdminSideNav.vue";
import AdminHeader from "./Layout/AdminHeader.vue";
import AdminSlideMenu from "./Layout/AdminSlideMenu.vue";
import useMenu from "@/common/hooks/useMenu";

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
    </div>

    <div
      :class="[
        'admin-layout-col-right',
        isShrink ? 'admin-layout-col-right--width' : '',
      ]"
    >
      <!-- Responsive menu -->
      <AdminSlideMenu
        :adminMenu="adminMenu"
        :isShowMenu="isShowMenu"
        @onCloseMenu="onCloseMenu"
      />

      <AdminHeader :isLogin="isLogin" @onShowMenu="onShowMenu" />

      <router-view />
    </div>   
  </div>
</template>
