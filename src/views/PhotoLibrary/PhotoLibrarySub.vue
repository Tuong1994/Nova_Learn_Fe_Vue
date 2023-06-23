<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "vue";
import { ISlideGalleryImage } from "@/common/interface/base";
import { Langs } from "@/common/lang";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import List from "@/components/List/List.vue";
import ListItem from "@/components/List/ListItem.vue";
import LibraryImage from "@/components/Common/LibraryImage/LibraryImage.vue";

defineComponent({ name: "PhotoLibrarySub" });

interface PhotoLibrarySubProps {
  langs: Langs;
  images: ISlideGalleryImage[];
}

defineProps<PhotoLibrarySubProps>();

const emits = defineEmits(["onPreview"]);

const onPreview = (idx: number) => emits("onPreview", idx);
</script>

<template>
  <Row align="start" justify="spaceBetween">
    <Col :xs="24" :md="24" :span="8">
      <List>
        <ListItem>
          {{ langs?.photo.list_1 }}
        </ListItem>
        <ListItem>
          {{ langs?.photo.list_2 }}
        </ListItem>
        <ListItem>
          {{ langs?.photo.list_3 }}
        </ListItem>
        <ListItem>
          {{ langs?.photo.list_4 }}
        </ListItem>
      </List>
    </Col>
    <Col :xs="24" :md="24" :span="16">
      <Row>
        <Col
          v-for="(image, idx) in images.slice(13, 25)"
          :key="image.id"
          :xs="24"
          :md="12"
          :span="8"
        >
          <LibraryImage :image="image" :idx="idx" @onPreview="onPreview" />
        </Col>
      </Row>
    </Col>
  </Row>
</template>
