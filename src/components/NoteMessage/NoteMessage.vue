<script lang="ts" setup>
import { defineComponent, defineProps, withDefaults, computed } from "vue";

defineComponent({ name: "NVLNoteMessage" });

interface NVLNoteMessageProps {
  message?: string;
  type?: "info" | "error";
  italic?: boolean;
}

const props = withDefaults(defineProps<NVLNoteMessageProps>(), {
  message: "Message",
  type: "info",
});

const typeClass = computed(() => {
  const types: any = {
    info: "note-message-info",
    error: "note-message-error",
  };
  return types[props.type];
});
</script>

<template>
  <p :class="['note-message', italic ? 'note-message--italic' : '', typeClass]">
    {{ message }}
  </p>
</template>
