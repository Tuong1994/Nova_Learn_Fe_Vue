<script lang="ts" setup>
import { computed, defineComponent, defineProps, defineEmits } from "vue";
import { IMenuItem } from "@/common/interface/base";
import { useRouter } from "vue-router";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Tooltip from "@/components/Tooltip/Tooltip.vue";
import HoverRow from "@/components/HoverRow/HoverRow.vue";
import Logo from "@/components/Logo/Logo.vue";
import Divider from "@/components/Divider/Divider.vue";
import Button from "@/components/Button/Button.vue";
import IconAngleLeft from "@/components/Icons/IconAngleLeft.vue";
import IconCustom from "@/components/Icons/IconCustom.vue";

defineComponent({ name: "AdminSideNav" });

interface AdminSideNavProps {
  adminMenu: IMenuItem[];
  isShrink: boolean;
}

const props = defineProps<AdminSideNavProps>();

const emits = defineEmits(["onShrink"]);

const router = useRouter();

const isActive = computed<boolean>(() => {
  let active = false;

  props.adminMenu.forEach((menu) => {
    const currentPath = router.currentRoute.value.fullPath;

    const [firstPart, secondPart] = currentPath
      .split("/")
      .filter((item) => item);

    const path = `/${firstPart}/${secondPart}`;
  });

  return active;
});

const onShrink = () => emits("onShrink");
</script>

<template>
  <div class="admin-side-nav">
    <div class="side-nav-logo">
      <Logo theme="dark" :isShort="isShrink" />

      <Divider />
    </div>

    <div class="side-nav-menu">
      <HoverRow
        v-for="menu in adminMenu"
        :key="menu.id"
        :isActive="isActive"
        theme="light"
      >
        <router-link :to="menu.link ?? '/admin/course/list'" class="menu-item">
          <Row align="center">
            <Col>
              <Tooltip
                :content="menu.title"
                placement="right"
                :showContent="isShrink"
              >
                <IconCustom :icon="menu.icon" />
              </Tooltip>
            </Col>
            <Col
              :wrapClass="`item-title ${isShrink ? 'item-title--hide' : ''}`"
            >
              {{ menu.title }}
            </Col>
          </Row>
        </router-link>
      </HoverRow>
    </div>

    <div class="side-nav-action">
      <Button variant="primary" wrapClass="action-btn" @onClick="onShrink">
        <IconAngleLeft
          :size="20"
          :class="['action-icon', isShrink ? 'action-icon--transform' : '']"
        />
      </Button>
    </div>
  </div>
</template>
