<script lang="ts" setup>
import { defineComponent, defineProps, computed, ref } from "vue";
import { IMenuItem } from "@/common/interface/base";
import { Langs } from "@/common/lang";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";
import Button from "../Button/Button.vue";
import IconAngleDown from "../Icons/IconAngleDown.vue";
import HoverRow from "../HoverRow/HoverRow.vue";
import IconAngleRight from "../Icons/IconAngleRight.vue";
import Divider from "../Divider/Divider.vue";
import useMenu from "@/common/hooks/useMenu";

defineComponent({ name: "NVLHeaderMenu" });

interface NVLHeaderMenuProps {
  langs: Langs;
}

defineProps<NVLHeaderMenuProps>();

const { mainMenu } = useMenu();

const filterMenu = computed<IMenuItem[]>(() =>
  mainMenu.value.filter((menu) => menu.type === "main")
);

const subMenu = ref<any>([]);

const activeId = ref<string>("");

const getSubMenu = (id: string) => {
  filterMenu.value.forEach((menu) => {
    if (menu.typeSubs === "mega") {
      subMenu.value = menu.subs?.filter((subMenu) => subMenu.id === id);
      activeId.value = id;
    }
  });
};
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
            class="col-dropdown col-dropdown--mega"
          >
            <Row align="start">
              <Col :span="8">
                <HoverRow
                  v-for="group in menu.subs"
                  :key="group.id"
                  :isActive="activeId === group.id"
                  @onHover="() => getSubMenu(group.id)"
                >
                  <Row justify="spaceBetween">
                    <Col>
                      <span>{{ group.title }}</span>
                    </Col>
                    <Col>
                      <IconAngleRight />
                    </Col>
                  </Row>
                </HoverRow>
              </Col>
              <Col :span="16" wrapClass="dropdown-sub-group">
                <templat v-for="subGroup in subMenu" :key="subGroup.id">
                  <HoverRow v-for="sub in subGroup.subs" :key="sub.id">
                    <router-link :to="sub.link ?? '/'">
                      {{ sub.title }}
                    </router-link>
                  </HoverRow>
                </templat>
              </Col>
            </Row>

            <Divider />

            <Row justify="end">
              <Col>
                <router-link to="/course/list">
                  <Button variant="primary" size="sm">
                    {{ langs?.common.actions.seeAll }}
                  </Button>
                </router-link>
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
