<script lang="ts" setup>
import { defineComponent } from "vue";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Card from "@/components/Card/Card.vue";
import Title from "@/components/Typography/Title.vue";
import Image from "@/components/Image/Image.vue";
import Pagination from "@/components/Pagination/Pagination.vue";

defineComponent({ name: "BlogListView" });
</script>

<template>
  <div class="blog-list">
    <Row justify="spaceBetween">
      <Col
        v-for="(item, idx) in 3"
        :key="idx"
        :xs="24"
        :md="12"
        :lg="12"
        :span="8"
      >
        <router-link to="/blog/detail">
          <Card wrapClass="list-item" bodyClass="item-body">
            <template #body>
              <Title :level="6" theme="light">
                3 Trung Tâm Dạy Lập Trình Uy Tín & 6 Tiêu Chí Lựa Chọn
              </Title>
              <div class="body-image">
                <Image
                  fit="cover"
                  :src="
                    require('../../../assets/images/gallery/gallery_10.jpg')
                  "
                />
              </div>
            </template>
          </Card>
        </router-link>
      </Col>
    </Row>

    <Pagination />
  </div>
</template>
