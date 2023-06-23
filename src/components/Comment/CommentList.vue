<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import { IComment } from "@/common/interface/comment";
import CommentItem from "./CommentItem.vue";

defineComponent({ name: "NVLCommentList" });

interface NVLCommentListProps {
  langs: Langs;
  mainData: IComment[];
  comments: IComment[];
  wrapClass?: string;
}

defineProps<NVLCommentListProps>();
</script>

<template>
  <ul :class="['nvl-comment-list', wrapClass]">
    <CommentItem
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
      :mainData="mainData"
      :langs="langs"
    />
  </ul>
</template>
