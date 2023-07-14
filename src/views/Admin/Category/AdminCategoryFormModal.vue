<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "vue";
import { Langs } from "@/common/lang";
import Modal from "@/components/Modal/Modal.vue";
import Form from "@/components/Form/Form.vue";
import Input from "@/components/Fields/Input/Input.vue";
import ParagraphVue from "@/components/Typography/Paragraph.vue";

defineComponent({ name: "AdminCategoryFormModal" });

interface AdminCategoryFormModalProps {
  open: boolean;
  langs: Langs;
}

defineProps<AdminCategoryFormModalProps>();

const emits = defineEmits(["onCancel", "onSubmit"]);

const onSubmit = () => emits("onSubmit");

const onCancel = () => emits("onCancel");
</script>

<template>
  <Form @onSubmit="onSubmit">
    <Modal :open="open" @onCancel="onCancel">
      <template #header>
        <ParagraphVue :size="18">
          {{ langs?.admin.category.form.addTitle }}
        </ParagraphVue>
      </template>

      <template #body>
        <Input :label="langs?.common.form.label.nameEng" />

        <Input :label="langs?.common.form.label.nameVn" />
      </template>
    </Modal>
  </Form>
</template>
