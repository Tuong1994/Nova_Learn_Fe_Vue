<script lang="ts" setup>
import { defineComponent } from "vue";
import HomeBanner from "./HomeBanner.vue";
import HomeStep from "./HomeStep.vue";
import HomeAdvantage from "./HomeAdvantage.vue";
import HomeBenefit from "./HomeBenefit.vue";
import HomeSlogan from "./HomeSlogan.vue";
import HomeTabs from "./HomeTabs.vue";
import HomeStudent from "./HomeStudent.vue";
import HomeIntro from "./HomeIntro.vue";
import HomeBlog from "./HomeBlog.vue";
import Statistics from "@/components/Common/Statistics/Statistics.vue";
import Course from "@/components/Common/Course/Course.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "HomeView" });

const { langs } = useLang();
</script>

<template>
  <div class="home">
    <HomeBanner :langs="langs" />

    <Statistics :langs="langs" />

    <Course :langs="langs" />

    <HomeStep :langs="langs" />

    <HomeAdvantage :langs="langs" />

    <HomeBenefit :langs="langs" />

    <HomeSlogan :langs="langs" />

    <HomeTabs :langs="langs" />

    <HomeStudent :langs="langs" />

    <HomeIntro :langs="langs" />

    <HomeBlog :langs="langs" />
  </div>
</template>
