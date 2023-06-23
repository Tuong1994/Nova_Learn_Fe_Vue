<script lang="ts" setup>
import { defineComponent, defineProps, computed, ref } from "vue";
import { Langs } from "@/common/lang";
import { IComment } from "@/common/interface/comment";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";
import Paragraph from "../Typography/Paragraph.vue";
import Button from "../Button/Button.vue";
import CommentControl from "./CommentControl.vue";
import CommentUser from "./CommentUser.vue";
import CommentList from "./CommentList.vue";

defineComponent({ name: "NVLCommentItem" });

interface NVLCommentItemProps {
  langs: Langs;
  comment: IComment;
  mainData: IComment[];
  wrapClass?: string;
}

const props = defineProps<NVLCommentItemProps>();

const activeComment = ref({ action: "", commentId: "" });

const nestedComment = computed<IComment[]>(() =>
  props.mainData.filter((c) => c.parentId === props.comment.id)
);

const isReply = computed<boolean>(
  () =>
    activeComment.value.action === "reply" &&
    activeComment.value.commentId === props.comment.id
);

const isEdit = computed<boolean>(
  () =>
    activeComment.value.action === "edit" &&
    activeComment.value.commentId === props.comment.id
);

const onReply = () => {
  activeComment.value.action = "reply";
  activeComment.value.commentId = props.comment.id ?? "";
};

const onEdit = () => {
  activeComment.value.action = "edit";
  activeComment.value.commentId = props.comment.id ?? "";
};

const onCancel = () => {
  activeComment.value.action = "";
  activeComment.value.commentId = "";
};
</script>

<template>
  <li :class="['nvl-comment-item', wrapClass]">
    <div class="item-group">
      <CommentUser :name="comment.customerName" />

      <div>
        <Paragraph v-if="!isEdit" :size="14" wrapClass="group-content">
          {{ comment.commentBody }}
        </Paragraph>

        <CommentControl
          v-if="isEdit"
          :langs="langs"
          :hasTitle="false"
          :editComment="comment.commentBody"
          hasCancel
          @onCancel="onCancel"
        />

        <Row v-if="!isReply && !isEdit" :gutters="[5]">
          <Col>
            <Button size="sm" @onClick="onReply">
              {{ langs?.common.actions.rely }}
            </Button>
          </Col>
          <Col>
            <Button size="sm" @onClick="onEdit">
              {{ langs?.common.actions.edit }}
            </Button>
          </Col>
          <Col>
            <Button size="sm">
              {{ langs?.common.actions.remove }}
            </Button>
          </Col>
        </Row>
      </div>

      <CommentControl
        v-if="isReply"
        :langs="langs"
        :hasTitle="false"
        hasCancel
        @onCancel="onCancel"
      />
    </div>

    <div class="item-child-list">
      <div class="list-line"></div>
      <CommentList
        :langs="langs"
        :comments="nestedComment"
        :mainData="mainData"
      />
    </div>
  </li>
</template>
