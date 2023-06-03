<script lang="ts" setup>
import { defineComponent, ref, watchEffect, onUnmounted } from "vue";
import HeaderTop from "./HeaderTop.vue";
import HeaderBottom from "./HeaderBottom.vue";
import SlideMenu from "./SlideMenu.vue";
import useLang from "@/common/hooks/useLang";
import useOverflow from "@/common/hooks/useOverflow";

defineComponent({ name: "NVLHeader" });

const langs = useLang();

const isShowMenu = ref<boolean>(false);

const isHideTop = ref<boolean>(false);

const isLogin = ref<boolean>(false);

useOverflow(isShowMenu);

const onShowMenu = () => (isShowMenu.value = true);

const onCloseMenu = () => (isShowMenu.value = false);

const handleScroll = () => {
  const scrollY = window.scrollY;
  if (scrollY > 20) isHideTop.value = true;
  else if (scrollY === 0) isHideTop.value = false;
};

watchEffect(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
  <header class="nvl-header">
    <!-- Header top -->
    <HeaderTop :isHideTop="isHideTop" :langs="langs" />
    <!-- Header bottom -->
    <HeaderBottom :isLogin="isLogin" :langs="langs" @onShowMenu="onShowMenu" />
    <!-- Slide menu -->
    <SlideMenu
      :isLogin="isLogin"
      :langs="langs"
      :isShowMenu="isShowMenu"
      @onCloseMenu="onCloseMenu"
    />
  </header>
</template>
