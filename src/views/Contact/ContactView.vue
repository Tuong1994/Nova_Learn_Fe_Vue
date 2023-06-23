<script lang="ts" setup>
import { defineComponent } from "vue";
import ContactBanner from "./ContactBanner.vue";
import ContactForm from "./ContactForm.vue";
import ContactTransfer from "./ContactTransfer.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "AboutView" });

const { langs } = useLang();
</script>

<template>
  <div class="contact">
    <ContactBanner :langs="langs" />

    <ContactForm :langs="langs" />

    <ContactTransfer :langs="langs" />
  </div>
</template>
