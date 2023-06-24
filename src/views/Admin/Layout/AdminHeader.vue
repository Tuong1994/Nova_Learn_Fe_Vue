<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Translate from "@/components/Translate/Translate.vue";
import Profile from "@/components/Profile/Profile.vue";
import IconBars from "@/components/Icons/IconBars.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "AdminHeader" });

interface AdminHeaderProps {
  isLogin: boolean;
}

const { langs } = useLang();

defineProps<AdminHeaderProps>();

const emits = defineEmits(["onShowMenu"])

const onShowMenu = () => emits("onShowMenu");

</script>

<template>
  <Row wrapClass="admin-header" align="center" justify="spaceBetween">
    <Col :xs="2" :md="2" :lg="0" :span="0">
      <IconBars @onClick="onShowMenu" />
    </Col>
    <Col :xs="20" :md="20" :lg="24" :span="24">
      <Row align="center" justify="end">
        <Col>
          <Translate :langs="langs" />
        </Col>
        <Col>
          <Profile :isLogin="isLogin" :langs="langs" />
        </Col>
      </Row>
    </Col>
  </Row>
</template>
