<script lang="ts" setup>
import {
  defineComponent,
  defineProps,
  defineEmits,
  withDefaults,
  computed,
  ref,
  onUpdated,
  onUnmounted,
} from "vue";
import Button from "../Button/Button.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "NVLModal" });

interface ButtonProps {
  disabled?: boolean;
  variant?: "primary" | "secondary" | "success" | "danger";
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  ghost?: boolean;
  className?: string;
}

interface NVLModalProps {
  open?: boolean;
  headerClass?: string;
  bodyClass?: string;
  footerClass?: string;
  size?: "sm" | "md" | "lg";
  hasHeader?: boolean;
  hasFooter?: boolean;
  maskClose?: boolean;
  hasOkBtn?: boolean;
  hasCancelBtn?: boolean;
  okText?: string;
  cancelText?: string;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
}

let time: any;

const props = withDefaults(defineProps<NVLModalProps>(), {
  size: "md",
  hasHeader: true,
  hasFooter: true,
  maskClose: true,
  hasOkBtn: true,
  hasCancelBtn: true,
  okButtonProps: () => ({
    variant: "primary",
  }),
});

const { langs } = useLang();

const render = ref<boolean>(false);

const sizeClass = computed(() => {
  const sizes: any = {
    sm: "nvl-modal--sm",
    md: "nvl-modal--md",
    lg: "nvl-modal--lg",
  };
  return sizes[props.size ?? ""];
});

const emits = defineEmits(["onOk", "onCancel"]);

const onOk = () => emits("onOk");

const onCancel = () => props.maskClose && emits("onCancel");

onUpdated(() => {
  if (props.open && !render.value) {
    document.body.style.overflow = "hidden";
    render.value = true;
  } else if (!props.open && render.value) {
    document.body.style.overflow = "unset";
    time = setTimeout(() => {
      render.value = false;
    }, 500);
  }
});

onUnmounted(() => clearTimeout(time));
</script>

<template>
  <div
    v-if="render"
    :class="['nvl-modal-backdrop', open ? 'nvl-modal-backdrop--active' : '']"
    @click="onCancel"
  ></div>

  <div
    v-if="render"
    :class="['nvl-modal', open ? 'nvl-modal--active' : '', sizeClass]"
  >
    <!-- Modal header -->
    <div v-if="hasHeader" :class="['modal-header', headerClass]">
      <slot name="header"></slot>
    </div>
    <!-- Modal body -->
    <div :class="['modal-body', bodyClass]">
      <slot name="body"></slot>
    </div>
    <!-- Modal footer -->
    <div v-if="hasFooter" :class="['modal-footer', footerClass]">
      <Button
        v-if="hasCancelBtn"
        :wrapClass="`footer-action ${cancelButtonProps?.className}`"
        :variant="cancelButtonProps?.variant"
        :disabled="cancelButtonProps?.disabled"
        @onClick="onCancel"
      >
        {{ cancelText ?? langs?.common.actions.cancel }}
      </Button>
      <Button
        v-if="hasOkBtn"
        :wrapClass="`footer-action ${okButtonProps?.className}`"
        :variant="okButtonProps?.variant"
        :disabled="okButtonProps?.disabled"
        @onClick="onOk"
      >
        {{ okText ?? langs?.common.actions.save }}
      </Button>
    </div>
  </div>
</template>
