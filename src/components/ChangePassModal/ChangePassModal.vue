<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "vue";
import Form from "../Form/Form.vue";
import Password from "../Fields/Password/Password.vue";
import Modal from "../Modal/Modal.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "NVLChangePassModal" });

interface NVLChangePassModalProps {
  open?: boolean;
}

defineProps<NVLChangePassModalProps>();

const emits = defineEmits(["onCancel"]);

const { langs } = useLang();

const onCancel = () => emits('onCancel')
</script>

<template>
  <Form>
    <Modal :open="open" @onCancel="onCancel">
      <template #header>
        {{ langs?.common.components.changePass.title }}
      </template>
      <template #body>
        <Password :label="langs?.common.form.label.oldPassword" />

        <Password :label="langs?.common.form.label.newPassword" />
      </template>
    </Modal>
  </Form>
</template>
;
