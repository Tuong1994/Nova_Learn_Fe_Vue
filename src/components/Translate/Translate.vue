<script lang="ts" setup>
import { defineComponent, defineProps, computed } from "vue";
import { Langs } from "@/common/lang";
import { useStore } from "@/store";
import { ELang } from "@/common/enum/lang";
import { IDropdownItem } from "@/common/interface/base";
import Dropdown from "../Dropdown/Dropdown.vue";
import IconGlobe from "../Icons/IconGlobe.vue";

defineComponent({ name: "NVLHeaderTranslate" });

interface NVLHeaderTranslateProps {
  langs: Langs;
}

const props = defineProps<NVLHeaderTranslateProps>();

const store = useStore();

const items = computed<IDropdownItem[]>(() => [
  {
    id: "1",
    title: props.langs?.common.components.header.translate.eng ?? "",
    icon: "flag",
    active: store.getters.getType === ELang.ENG,
    onClick: () => store.dispatch("changeLang", ELang.ENG),
  },
  {
    id: "2",
    title: props.langs?.common.components.header.translate.vn ?? "",
    icon: "flag",
    active: store.getters.getType === ELang.VN,
    onClick: () => store.dispatch("changeLang", ELang.VN),
  },
]);
</script>

<template>
  <Dropdown wrapClass="header-translate" trigger="click" :items="items" placement="bottomRight">
    <IconGlobe />
  </Dropdown>
</template>
