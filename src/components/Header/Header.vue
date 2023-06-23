<script lang="ts" setup>
import { defineComponent, ref, watchEffect, onUnmounted } from "vue";
import HeaderTop from "./HeaderTop.vue";
import HeaderBottom from "./HeaderBottom.vue";
import SlideMenu from "./SlideMenu.vue";
import useLang from "@/common/hooks/useLang";
import useOverflow from "@/common/hooks/useOverflow";

defineComponent({ name: "NVLHeader" });

const { langs } = useLang();

const isShowMenu = ref<boolean>(false);

const isLogin = ref<boolean>(false);

useOverflow(isShowMenu);

const onShowMenu = () => (isShowMenu.value = true);

const onCloseMenu = () => (isShowMenu.value = false);

const handleScroll = () => {
  const headerTopEl = document.getElementById("headerTop");
  if (headerTopEl) {
    const scrollY = window.scrollY;
    if (scrollY > 20) headerTopEl.classList.add("header-top--height");
    else if (scrollY === 0) headerTopEl.classList.remove("header-top--height");
  }
};

watchEffect(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
  <header class="nvl-header">
    <!-- Header top -->
    <HeaderTop :langs="langs" />
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
