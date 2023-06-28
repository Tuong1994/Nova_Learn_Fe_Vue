<script lang="ts" setup>
import {
  defineComponent,
  defineProps,
  defineEmits,
  withDefaults,
  ref,
} from "vue";
import { Langs } from "@/common/lang";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";
import TextArea from "../Fields/TextArea/TextArea.vue";
import Form from "../Form/Form.vue";
import Button from "../Button/Button.vue";
import FormFooter from "../Form/FormFooter.vue";
import CommentUser from "./CommentUser.vue";

defineComponent({ name: "NVLCommentControl" });

interface NVLCommentControlProps {
  langs: Langs;
  isEdit?: boolean;
  hasTitle?: boolean;
  hasCancel?: boolean;
  editComment?: string;
  wrapClass?: string;
}

const props = withDefaults(defineProps<NVLCommentControlProps>(), {
  hasTitle: true,
  editComment: "",
});

const formData = ref({
  commentBody: props.editComment,
});

const emits = defineEmits(["onCancel", "onSubmit"]);

const onCancel = () => emits("onCancel");

const onSubmit = () => emits("onSubmit", formData);
</script>

<template>
  <div :class="['nvl-comment-control', wrapClass]">
    <CommentUser v-if="hasTitle" />

    <Form :formData="formData" @onSubmit="onSubmit">
      <TextArea v-model="formData.commentBody" :rows="4" />

      <FormFooter>
        <Row justify="end">
          <Col v-if="hasCancel">
            <Button @onClick="onCancel">
              {{ langs?.common.actions.cancel }}
            </Button>
          </Col>
          <Col>
            <Button
              variant="primary"
              type="submit"
              :disabled="!formData.commentBody"
            >
              {{
                !isEdit
                  ? langs?.common.actions.post
                  : langs?.common.actions.edit
              }}
            </Button>
          </Col>
        </Row>
      </FormFooter>
    </Form>
  </div>
</template>
