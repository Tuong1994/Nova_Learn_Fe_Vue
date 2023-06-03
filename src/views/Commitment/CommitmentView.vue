<script lang="ts" setup>
import { defineComponent } from "vue";
import CommitmentBanner from "./CommitmentBanner.vue";
import CommitmentStatistics from "./CommitmentStatistics.vue";
import CommitmentPhase from "./CommitmentPhase.vue";
import CommitmentQuestion from "./CommitmentQuestion.vue";
import Course from "@/components/Common/Course.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "CommitmentView" });

const langs = useLang();
</script>

<template>
  <div class="commitment">
    <CommitmentBanner :langs="langs" />

    <CommitmentStatistics :langs="langs" />

    <CommitmentPhase :langs="langs" />

    <Course :langs="langs" />

    <CommitmentQuestion :langs="langs" />
  </div>
</template>
