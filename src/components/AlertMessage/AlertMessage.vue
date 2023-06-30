<script lang="ts" setup>
import {
  computed,
  defineComponent,
  watch,
  ref,
  watchEffect,
  onUnmounted,
} from "vue";
import { useStore } from "@/store";
import { AlertMessage } from "@/common/interface/base";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";
import Paragraph from "../Typography/Paragraph.vue";
import IconCheck from "../Icons/IconCheck.vue";
import IconX from "../Icons/IconX.vue";

defineComponent({ name: "NVLAlertMessage" });

const store = useStore();

let time: any;

const render = ref<boolean>(false);

const trigger = computed<AlertMessage>(() => store.getters.getTrigger);

const iconClass = computed(() => {
  const icons: any = {
    success: "message-icon--success",
    error: "message-icon--error",
  };
  return icons[trigger.value.type];
});

watch(trigger, (newValue) => {
  if (newValue.active)
    setTimeout(
      () =>
        store.dispatch("alert", {
          active: false,
          message: newValue.message,
          type: newValue.type,
        }),
      2000
    );
});

watchEffect(() => {
  if (trigger.value.active && !render.value) render.value = true;
  else if (!trigger.value.active && render.value)
    time = setTimeout(() => (render.value = false), 200);
});

onUnmounted(() => clearTimeout(time));
</script>

<template>
  <div
    v-if="render"
    :class="[
      'nvl-alert-message',
      trigger.active ? 'nvl-alert-message--active' : '',
    ]"
  >
    <Row align="center">
      <Col>
        <div :class="['message-icon', iconClass]">
          <IconCheck v-if="trigger.type === 'success'" :size="10" />
          <IconX v-if="trigger.type === 'error'" :size="10" />
        </div>
      </Col>
      <Col>
        <Paragraph :size="13" wrapClass="message-text">
          {{ trigger.message }}
        </Paragraph>
      </Col>
    </Row>
  </div>
</template>
