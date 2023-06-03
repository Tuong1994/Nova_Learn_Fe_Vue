<script lang="ts" setup>
import { Langs } from "@/common/lang";
import { defineComponent, defineProps } from "vue";
import Divider from "@/components/Divider/Divider.vue";
import IconPlay from "@/components/Icons/IconPlay.vue";
import Button from "@/components/Button/Button.vue";

defineComponent({ name: "HomeBanner" });

interface HomeBannerProps {
  langs: Langs;
}

defineProps<HomeBannerProps>();
</script>

<template>
  <div class="home-banner">
    <video class="banner-video" autoplay muted loop>
      <source src="../../assets/videos/cybersoft.mp4" type="video/mp4" />
    </video>
    <div class="banner-content">
      <router-link to="/" class="content-action">
        <span class="action-line"></span>
        <span class="action-line"></span>
        <span class="action-line"></span>
        <span class="action-line"></span>
        <IconPlay class="action-icon" />
        <span class="action-line-coords"></span>
        <span class="action-line-coords"></span>
        <span class="action-line-coords"></span>
      </router-link>

      <div class="content-detail">
        <h3 class="detail-title">{{ langs?.home.banner.title }}</h3>
        <p class="detail-text">{{ langs?.home.banner.content }}</p>
        <Divider />
        <router-link to="/">
          <Button variant="primary" size="lg">{{ langs?.home.banner.action }}</Button>
        </router-link>
      </div>
    </div>
  </div>
</template>
