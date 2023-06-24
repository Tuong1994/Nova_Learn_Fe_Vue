<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits, ref } from "vue";
import { Langs } from "@/common/lang";
import { useStore } from "@/store";
import { ELang } from "@/common/enum/lang";
import IconX from "../Icons/IconX.vue";
import IconAngleDown from "../Icons/IconAngleDown.vue";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";
import Button from "../Button/Button.vue";
import Profile from "../Profile/Profile.vue";
import Search from "./Search.vue";
import Drawer from "../Drawer/Drawer.vue";
import useMenu from "@/common/hooks/useMenu";

defineComponent({ name: "NVLSlideMenu" });

interface SlideMenuProps {
  isShowMenu: boolean;
  langs: Langs;
  isLogin: boolean;
}

const { mainMenu } = useMenu();

const store = useStore();

defineProps<SlideMenuProps>();

const subMenuIdx = ref<number>(-1);

const nestedSubMenuIdx = ref<number>(-1);

const emits = defineEmits(["onCloseMenu"]);

const onCloseMenu = () => emits("onCloseMenu");

const onShowSubMenu = (idx: number) => {
  if (nestedSubMenuIdx.value !== -1) nestedSubMenuIdx.value = -1;
  if (subMenuIdx.value === idx) return (subMenuIdx.value = -1);
  subMenuIdx.value = idx;
};

const onShowNestedSubMenu = (idx: number) => {
  if (nestedSubMenuIdx.value === idx) return (nestedSubMenuIdx.value = -1);
  nestedSubMenuIdx.value = idx;
};
</script>

<template>
  <Drawer
    wrapClass="header-slide-menu"
    :open="isShowMenu"
    @onClose="onCloseMenu"
  >
    <!-- Profile -->
    <Row :style="{ padding: '10px' }" justify="end">
      <Col>
        <Profile :langs="langs" :isLogin="isLogin" />
      </Col>
    </Row>

    <!-- Search -->
    <Row :style="{ padding: '10px' }">
      <Col :xs="24" :md="0" :lg="0">
        <Search :langs="langs" />
      </Col>
    </Row>

    <!-- Menu list -->
    <div class="menu-list">
      <div v-for="(menu, idx) in mainMenu" :key="menu.id" class="list-item">
        <!-- Menu link title -->
        <router-link
          v-if="menu.link !== '#'"
          :to="menu.link ?? '#'"
          class="item-title"
          @click="
            () => {
              if (menu.link === '#') onShowSubMenu(idx);
              else onCloseMenu();
            }
          "
        >
          <span class="title-text">{{ menu.title }}</span>
          <IconAngleDown
            v-if="menu.typeSubs !== 'none'"
            :class="[
              'title-icon',
              subMenuIdx === idx ? 'title-icon--rotate' : '',
            ]"
          />
        </router-link>

        <!-- Menu default title -->
        <div
          v-if="menu.link === '#'"
          class="item-title"
          @click="() => onShowSubMenu(idx)"
        >
          <span class="title-text">{{ menu.title }}</span>
          <IconAngleDown
            v-if="menu.typeSubs !== 'none'"
            :class="[
              'title-icon',
              subMenuIdx === idx ? 'title-icon--rotate' : '',
            ]"
          />
        </div>

        <!-- Nested Submenu -->
        <div
          v-if="menu.typeSubs === 'mega'"
          :class="['item-sub', subMenuIdx === idx ? 'item-sub--active' : '']"
        >
          <div
            v-for="(group, idx) in menu.subs"
            :key="group.id"
            class="sub-group"
          >
            <!-- Nested Submenu title -->
            <div class="group-category" @click="() => onShowNestedSubMenu(idx)">
              <span class="category-name">{{ group.title }}</span>
              <IconAngleDown
                :class="[
                  'category-icon',
                  nestedSubMenuIdx === idx ? 'category-icon--rotate' : '',
                ]"
              />
            </div>

            <!-- Nested Submenu list -->
            <div
              :class="[
                'group-nested-sub',
                nestedSubMenuIdx === idx ? 'group-nested-sub--active' : '',
              ]"
            >
              <router-link
                v-for="sub in group.subs"
                :key="sub.id"
                :to="sub.link ?? '#'"
                class="sub-item-link sub-item-link--padding"
                @click="onCloseMenu"
              >
                {{ sub.title }}
              </router-link>
            </div>
          </div>
        </div>

        <!-- Default Submenu -->
        <div
          v-if="menu.typeSubs === 'default'"
          :class="['item-sub', subMenuIdx === idx ? 'item-sub--active' : '']"
        >
          <router-link
            v-for="sub in menu.subs"
            :key="sub.id"
            :to="sub.link ?? '#'"
            class="sub-item-link"
            @click="onCloseMenu"
          >
            {{ sub.title }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="menu-actions">
      <Button
        :ghost="store.getters.getType === ELang.ENG"
        variant="primary"
        wrapClass="actions-btn"
        size="sm"
        @click="() => store.dispatch('changeLang', ELang.VN)"
      >
        {{ langs?.common.components.header.translate.vn }}
      </Button>
      <Button
        :ghost="store.getters.getType === ELang.VN"
        variant="primary"
        wrapClass="actions-btn"
        size="sm"
        @click="() => store.dispatch('changeLang', ELang.ENG)"
      >
        {{ langs?.common.components.header.translate.eng }}
      </Button>
    </div>
  </Drawer>
</template>
