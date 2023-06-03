<script lang="ts" setup>
import {
  defineComponent,
  defineProps,
  withDefaults,
  ref,
  computed,
  StyleValue,
} from "vue";
import { IDropdownItem } from "@/common/interface/base";
import IconCustom from "../Icons/IconCustom.vue";
import useClickOutside from "@/common/hooks/useClickOutside";

defineComponent({ name: "NVLDropdown" });

interface NVLDropdownProps {
  wrapClass?: string;
  dropdownClass?: string;
  items?: IDropdownItem[];
  style?: StyleValue;
  dropDownStyle?: StyleValue;
  theme?: "dark" | "light";
  trigger?: "click" | "hover";
  placement?: "bottomLeft" | "bottomRight";
}

const props = withDefaults(defineProps<NVLDropdownProps>(), {
  theme: "light",
  placement: "bottomLeft",
  trigger: "hover",
});

const placementClass = computed(() => {
  const placements: any = {
    bottomLeft: "dropdown-wrap--bottom-left",
    bottomRight: "dropdown-wrap--bottom-right",
  };
  return placements[props.placement];
});

const dropDownRef = ref<HTMLDivElement | null>(null);

const isDropdown = useClickOutside(dropDownRef);

const onDropdown = () => (isDropdown.value = !isDropdown.value);

const onClick = (item: IDropdownItem) => {
  onDropdown();
  item.onClick && item.onClick();
};
</script>

<template>
  <div
    :class="[
      'nvl-dropdown',
      trigger === 'hover' ? 'nvl-dropdown--hover' : '',
      wrapClass,
    ]"
    ref="dropDownRef"
    :style="style"
  >
    <!-- Title -->
    <div
      class="dropdown-title"
      @click="() => trigger === 'click' && onDropdown()"
    >
      <slot></slot>
    </div>
    <!-- Dropdown -->
    <div
      :class="[
        'dropdown-wrap',
        placementClass,
        theme === 'dark' ? 'dropdown-wrap--dark' : 'dropdown-wrap--light',
        isDropdown ? 'dropdown-wrap--active' : '',
        dropdownClass,
      ]"
      :style="dropDownStyle"
    >
      <div
        v-for="item in items"
        :key="item.id"
        :class="['wrap-item', item.active ? 'wrap-item--active' : '']"
        @click="() => onClick(item)"
      >
        <!-- Default item -->
        <div v-if="!item.link" class="item-inner">
          <IconCustom v-if="item.icon" class="inner-icon" :icon="item.icon" />
          <span class="inner-title">{{ item.title }}</span>
        </div>

        <!-- Router link item -->
        <router-link
          v-if="item.link"
          :to="item.link"
          class="item-inner item-link"
        >
          <IconCustom v-if="item.icon" class="inner-icon" :icon="item.icon" />
          <span class="inner-title">{{ item.title }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
