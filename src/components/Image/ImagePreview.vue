<script lang="ts" setup>
import {
  StyleValue,
  defineComponent,
  defineProps,
  defineEmits,
  withDefaults,
  ref,
  computed,
} from "vue";
import IconTrash from "../Icons/IconTrash.vue";
import IconEye from "../Icons/IconEye.vue";
import Modal from "../Modal/Modal.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "NVLImagePreview" });

interface NVLImagePreviewProps {
  fit?: "cover" | "contain" | "fill" | "none";
  style?: StyleValue;
  src?: string;
  alt?: string;
  wrapClass?: string;
  previewWrapClass?: string;
  hasRemove?: boolean;
}

const { langs } = useLang();

const props = withDefaults(defineProps<NVLImagePreviewProps>(), {
  src: require("../../assets/images/logo.png"),
  alt: "logo",
  fit: "cover",
});

const isPreview = ref({
  active: false,
  url: "",
});

const getFitClass = computed(() => {
  const fits: any = {
    none: "image--fit-none",
    contain: "image--fit-contain",
    cover: "image--fit-cover",
    fill: "image--fit-fill",
  };
  return fits[props.fit];
});

const emits = defineEmits(["onRemove"]);

const onPreview = () =>
  (isPreview.value = { active: true, url: props.src ?? "" });

const onCancel = () => (isPreview.value = { active: false, url: "" });

const onRemove = () => {
  if (props.hasRemove) emits("onRemove");
};
</script>

<template>
  <div :class="['nvl-image-preview', wrapClass]" :style="style">
    <div class="preview-inner">
      <img :class="getFitClass" :src="src" :alt="alt" />
      <div class="inner-actions">
        <IconEye class="actions-icon" @onClick="onPreview" />
        <IconTrash v-if="hasRemove" class="actions-icon" @onClick="onRemove" />
      </div>
    </div>
  </div>

  <!-- Modal preview -->
  <Teleport to="#modal-root">
    <Modal :hasOkBtn="false" :open="isPreview.active" @onCancel="onCancel">
      <template #header>
        {{ langs?.common.modal.previewHeader }}
      </template>
      <template #body>
        <img :src="isPreview.url" />
      </template>
    </Modal>
  </Teleport>
</template>
