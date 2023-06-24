<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits, watch } from "vue";
import IconX from "../Icons/IconX.vue";

defineComponent({ name: "NVLDrawer" });

interface NVLDrawerProps {
  wrapClass?: string;
  open?: boolean;
}

const props = defineProps<NVLDrawerProps>();

const emits = defineEmits(["onClose"]);

const onClose = () => emits("onClose");

watch(props, (newValue) => {
  if (newValue.open) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "unset";
});
</script>

<template>
  <div :class="['nvl-drawer', open ? 'nvl-drawer--active' : '', wrapClass]">
    <div :class="['drawer-inner', open ? 'drawer-inner--active' : '']">
      <!-- Close icon -->
      <div class="inner-action">
        <IconX
          :class="['action-icon', open ? 'action-icon--rotate' : '']"
          @onClick="onClose"
        />
      </div>

      <div class="inner-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
