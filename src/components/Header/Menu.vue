<script lang="ts" setup>
import { defineComponent, computed } from "vue";
import { IMenuItem } from "@/common/interface/base";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";
import IconAngleDown from "../Icons/IconAngleDown.vue";
import HoverRow from "../HoverRow/HoverRow.vue";
import useMenu from "@/common/hooks/useMenu";

defineComponent({ name: "NVLHeaderMenu" });

const { mainMenu } = useMenu();

const filterMenu = computed<IMenuItem[]>(() =>
  mainMenu.value.filter((menu) => menu.type === "main")
);
</script>

<template>
  <nav class="header-menu">
    <Row justify="center" wrapClass="menu-row">
      <Col v-for="menu in filterMenu" :key="menu.id" class="menu-col">
        <div class="col-item">
          <!-- Menu link title -->
          <router-link
            v-if="menu.link !== '#'"
            :to="menu.link ?? '/'"
            class="item-link"
          >
            <span class="link-title">{{ menu.title }}</span>
            <IconAngleDown v-if="menu.typeSubs !== 'none'" class="link-icon" />
          </router-link>

          <!-- Menu default title -->
          <div v-if="menu.link === '#'" class="item-link">
            <span class="link-title">{{ menu.title }}</span>
            <IconAngleDown v-if="menu.typeSubs !== 'none'" class="link-icon" />
          </div>

          <!-- Submenu mega type -->
          <div
            v-if="menu.typeSubs === 'mega'"
            class="col-dropdown col-dropdown--left"
          >
            <Row>
              <Col v-for="group in menu.subs" :key="group.id">
                <div class="dropdown-group">
                  <h5 class="group-title">{{ group.title }}</h5>
                  <div class="group-subs">
                    <HoverRow v-for="sub in group.subs" :key="sub.id">
                      <router-link :to="sub.link ?? '/'">
                        {{ sub.title }}
                      </router-link>
                    </HoverRow>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <!-- Submenu default type -->
          <div v-if="menu.typeSubs === 'default'" class="col-dropdown">
            <HoverRow v-for="sub in menu.subs" :key="sub.id">
              <router-link :to="sub.link ?? '/'">
                {{ sub.title }}
              </router-link>
            </HoverRow>
          </div>
        </div>
      </Col>
    </Row>
  </nav>
</template>
