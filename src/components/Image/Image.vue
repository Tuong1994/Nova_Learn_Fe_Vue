<script lang="ts" setup>
import {
  defineComponent,
  defineProps,
  defineEmits,
  withDefaults,
  computed,
  ref,
  StyleValue,
} from "vue";
import vLazyload from "@/common/directives/vLazyload";
import IconEye from "../Icons/IconEye.vue";
import IconTrash from "../Icons/IconTrash.vue";
import Modal from "../Modal/Modal.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "NVLImage" });

interface NVLImageProps {
  src?: string;
  alt?: string;
  size?: "xs" | "sm" | "md" | "lg";
  fit?: "cover" | "contain" | "fill" | "none";
  hasPreview?: boolean;
  hasRemove?: boolean;
  wrapClass?: string;
  previewWrapClass?: string;
  style?: StyleValue;
}

const langs = useLang();

const props = withDefaults(defineProps<NVLImageProps>(), {
  src: require("../../assets/images/logo.png"),
  alt: "logo",
  fit: "none",
  hasPreview: false,
  hasRemove: false,
});

const isRemove = computed<boolean>(() => props.hasPreview && props.hasRemove);

const getSizeClass = computed(() => {
  const sizes: any = {
    xs: "nvl-image-xs",
    sm: "nvl-image-sm",
    md: "nvl-image-md",
    lg: "nvl-image-lg",
  };
  return sizes[props.size ?? ""];
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

const isPreview = ref({
  active: false,
  url: "",
});

const emits = defineEmits(["onRemove"]);

const onPreview = () =>
  (isPreview.value = { active: true, url: props.src ?? "" });

const onCancel = () => (isPreview.value = { active: false, url: "" });

const onRemove = () => {
  if(props.hasRemove) emits("onRemove")
};
</script>

<template>
  <div :class="['nvl-image', getSizeClass, wrapClass]" :style="style">
    <img
      :class="getFitClass"
      v-if="!hasPreview"
      v-lazyload
      :data-src="src"
      :alt="alt"
    />

    <div v-if="hasPreview" :class="['nvl-image-preview', previewWrapClass]">
      <div class="preview-inner">
        <img :class="getFitClass" :src="src" :alt="alt" />
        <div class="inner-actions">
          <IconEye class="actions-icon" @onClick="onPreview" />
          <IconTrash v-if="isRemove" class="actions-icon" @onClick="onRemove" />
        </div>
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
