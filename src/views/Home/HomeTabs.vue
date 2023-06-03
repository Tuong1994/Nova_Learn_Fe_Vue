<script lang="ts" setup>
import { computed, defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import { ITabs } from "@/common/interface/base";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Image from "@/components/Image/Image.vue";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import Tabs from "@/components/Tabs/Tabs.vue";
import Avatar from "@/components/Avatar/Avatar.vue";
import Button from "@/components/Button/Button.vue";

defineComponent({ name: "HomeTabs" });

interface HomeTabsProps {
  langs: Langs;
}

const props = defineProps<HomeTabsProps>();

const tabs = computed<ITabs[]>(() => [
  {
    id: "1",
    title: props.langs?.home.tabs.title_1 ?? "",
    componentName: "tab_1",
  },
  {
    id: "1",
    title: props.langs?.home.tabs.title_2 ?? "",
    componentName: "tab_2",
  },
]);
</script>

<template>
  <Section class="home-tabs">
    <Tabs :items="tabs">
      <template #tabs-content="item">
        <div v-if="item.tab === 'tab_1'" class="tabs-item">
          <Title :level="4">
            {{ langs?.home.tabs.subTitle_1 }}
          </Title>
          <p class="item-text">{{ langs?.home.tabs.content_1 }}</p>
          <router-link to="/">
            <Button wrapClass="item-action" variant="primary">
              {{ langs?.common.actions.courses }}
            </Button>
          </router-link>
        </div>

        <div v-if="item.tab === 'tab_2'" class="tabs-item">
          <Row align="center">
            <Col :xs="24" :span="12">
              <p class="item-content">{{ langs?.home.tabs.content_2 }}</p>
              <Row align="center">
                <Col>
                  <Avatar :size="60">
                    <Image
                      fit="contain"
                      :src="require('../../assets/images/common/avatar.jpg')"
                    />
                  </Avatar>
                </Col>
                <Col>
                  <div class="item-info">
                    <p>{{ langs?.common.info.founder.name }}</p>
                    <p>{{ langs?.common.info.founder.position }}</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col :xs="24" :span="12">
              <div class="item-image">
                <Image
                  fit="contain"
                  :src="require('../../assets/images/banner/banner_2.png')"
                />
              </div>
            </Col>
          </Row>
        </div>
      </template>
    </Tabs>
  </Section>
</template>
