<script lang="ts" setup>
import { defineComponent, defineProps, withDefaults } from "vue";
import { ILinkItem } from "@/common/interface/base";

defineComponent({ name: "NVLLinkItem" });

interface NVLLinkItemProps {
  link: ILinkItem;
  wrapClass?: string;
  smooth?: boolean;
}

const props = withDefaults(defineProps<NVLLinkItemProps>(), {
  smooth: true,
});

const smoothSroll = (e: MouseEvent) => {
  if (!props.smooth) return;

  e.preventDefault();

  const scrollElId = (e.target as HTMLAnchorElement).href.split("#")[1];

  const scrollEndEl = document.getElementById(scrollElId);

  const easeInCubic = function (t: number) {
    return t * t * t;
  };

  const scrollToEl = (
    startTime: number,
    currentTime: number,
    duration: number,
    scrollEndElTop: number,
    startScrollOffset: number
  ) => {
    const runtime = currentTime - startTime;

    let progress = runtime / duration;

    progress = Math.min(progress, 1);

    const ease = easeInCubic(progress);

    window.scroll(0, startScrollOffset + scrollEndElTop * ease);

    if (runtime < duration) {
      requestAnimationFrame((timestamp) => {
        const currentTime = timestamp || new Date().getTime();

        scrollToEl(
          startTime,
          currentTime,
          duration,
          scrollEndElTop,
          startScrollOffset
        );
      });
    }
  };

  requestAnimationFrame((timestamp) => {
    const currentTime = timestamp || new Date().getTime();

    const duration = 1200;

    const start = currentTime;

    const startScrollOffset = window.scrollY;

    const scrollEndElTop =
      Number(scrollEndEl?.getBoundingClientRect().top) - 50;

    scrollToEl(start, currentTime, duration, scrollEndElTop, startScrollOffset);
  });
};
</script>

<template>
  <a
    :key="link.id"
    :href="`#${link.id}`"
    :class="['nvl-link-item', wrapClass]"
    @click="smoothSroll"
  >
    {{ link.title }}
  </a>
</template>
