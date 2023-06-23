<script lang="ts" setup>
import { computed, defineComponent, defineProps } from "vue";
import { IComment } from "@/common/interface/comment";
import CommentControl from "./CommentControl.vue";
import CommentList from "./CommentList.vue";
import Divider from "../Divider/Divider.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "NVLComment" });

const { langs } = useLang();

interface NVLCommentProps {
  wrapClass?: string;
}

defineProps<NVLCommentProps>();

const comments = computed<IComment[]>(() => [
  {
    id: "1",
    commentBody:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, aspernatur sint, cupiditate, ad repudiandae dolorem nesciunt corrupti quis blanditiis voluptatum ullam nulla modi tempore quasi dolore pariatur autem. Cumque laboriosam mollitia natus, quo autem velit doloremque omnis at necessitatibus ut, esse repudiandae iure ullam accusamus officia illo, consectetur itaque ipsam.",
    parentId: "",
    productId: "",
    productName: "",
    customerId: "",
    customerName: "Jack",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    commentBody:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, aspernatur sint, cupiditate, ad repudiandae dolorem nesciunt corrupti quis blanditiis voluptatum ullam nulla modi tempore quasi dolore pariatur autem. Cumque laboriosam mollitia natus",
    parentId: "1",
    productId: "",
    productName: "",
    customerId: "",
    customerName: "Will",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    commentBody:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, aspernatur sint, cupiditate, ad repudiandae dolorem nesciunt corrupti quis blanditiis voluptatum ullam nulla modi tempore quasi dolore pariatur autem.",
    parentId: "2",
    productId: "",
    productName: "",
    customerId: "",
    customerName: "Jason",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]);

const rootComment = computed<IComment[]>(() =>
  comments.value.filter((comment) => !comment.parentId)
);
</script>

<template>
  <div :class="['nvl-comment', wrapClass]">
    <CommentControl :langs="langs" />

    <Divider />

    <CommentList :langs="langs" :comments="rootComment" :mainData="comments" />
  </div>
</template>
