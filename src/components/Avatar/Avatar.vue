<script lang="ts" setup>
import {
  StyleValue,
  defineComponent,
  defineProps,
  computed,
  withDefaults,
  useSlots,
} from "vue";
import IconUser from "../Icons/IconUser.vue";

defineComponent({ name: "NVLAvatar" });

interface NVLAvatarProps {
  badgeCount?: number;
  wrapClass?: string;
  size?: number;
}

const slots = useSlots();

const props = withDefaults(defineProps<NVLAvatarProps>(), {
  size: 35,
});

const style = computed<StyleValue>(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
  borderRadius: `50%`,
}));

const showSlot = () => !!slots.default;
</script>

<template>
  <div :style="style" :class="['nvl-avatar', wrapClass]">
    <div v-if="badgeCount" class="avatar-badge">
      {{ badgeCount }}
    </div>

    <div class="avatar-inner">
      <div v-if="!showSlot()" class="inner-item">
        <IconUser class="item-icon" />
      </div>

      <div v-if="showSlot()" class="inner-item inner-item--background">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
