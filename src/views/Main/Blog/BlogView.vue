<script lang="ts" setup>
import { computed, defineComponent, ref } from "vue";
import { IBreadCrumbItem } from "@/common/interface/base";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Title from "@/components/Typography/Title.vue";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb.vue";
import IconAngleDown from "@/components/Icons/IconAngleDown.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "BlogView" });

const { langs } = useLang();

const links = computed(() => [
  { id: "1", title: "Tất cả bài viết", url: "/blog/list" },
  { id: "2", title: "Hướng dẫn học từ ZERO", url: "/blog/list" },
  { id: "3", title: "Bài viết nên đọc", url: "/blog/list" },
  { id: "4", title: "Các hoạt động của Nova Learn", url: "/blog/list" },
  { id: "5", title: "Câu chuyện thành công", url: "/blog/list" },
  { id: "6", title: "Phát triển sự nghiệp", url: "/blog/list" },
]);

const breadcrumbs = computed<IBreadCrumbItem[]>(() => [
  { id: "1", title: "Blog", link: "/blog" },
  { id: "2", title: "Tất cả bài viết", link: "/blog/list" },
]);

const selectedLink = ref({
  active: false,
  name: links.value[0].title,
});

const handleDropdown = () =>
  (selectedLink.value.active = !selectedLink.value.active);

const handleSelected = (name: string) => {
  selectedLink.value.name = name;
  selectedLink.value.active = false;
};
</script>

<template>
  <Section wrapClass="blog">
    <BreadCrumb
      theme="light"
      :items="breadcrumbs"
      :style="{ paddingTop: '0' }"
    />

    <Row :gutters="[5]" align="start" justify="spaceBetween">
      <Col wrapClass="blog-col" :xs="0" :md="0" :lg="0" :span="6">
        <div class="col-side-nav">
          <div class="nav-title">
            <Title :level="6" wrapClass="title-item">
              {{ langs?.blog.sideNav.subTitle }}
            </Title>
          </div>

          <router-link
            v-for="link in links"
            :key="link.id"
            :to="link.url"
            class="nav-item"
          >
            {{ link.title }}
          </router-link>
        </div>
      </Col>

      <Col :xs="24" :md="24" :lg="24" :span="18">
        <!-- Responsive side nav dropdown -->
        <div class="blog-dropdown">
          <div class="dropdown-selected" @click="handleDropdown">
            <span>
              {{ selectedLink.name }}
            </span>
            <IconAngleDown
              :class="[
                'selected-icon',
                selectedLink.active ? 'selected-icon--rotate' : '',
              ]"
            />
          </div>
          <div
            :class="[
              'dropdown-list',
              selectedLink.active ? 'dropdown-list--active' : '',
            ]"
          >
            <router-link
              v-for="link in links"
              :key="link.id"
              :to="link.url"
              class="list-item"
              @click="() => handleSelected(link.title)"
            >
              {{ link.title }}
            </router-link>
          </div>
        </div>
        <router-view></router-view>
      </Col>
    </Row>
  </Section>
</template>
