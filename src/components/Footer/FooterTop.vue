<script lang="ts" setup>
import { Langs } from "@/common/lang";
import { defineComponent, defineProps } from "vue";
import Form from "../Form/Form.vue";
import FormFooter from "../Form/FormFooter.vue";
import Input from "../Fields/Input.vue";
import Button from "../Button/Button.vue";
import Section from "../Section/Section.vue";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";
import Divider from "../Divider/Divider.vue";

defineComponent({ name: "NVLFooter" });

interface NVLFooterTop {
  langs: Langs;
}

defineProps<NVLFooterTop>();
</script>

<template>
  <Section wrapClass="footer-top">
    <Row>
      <!-- Form -->
      <Col :xs="24" :md="10" :lg="10" :span="8">
        <Form wrapClass="top-form">
          <h3 class="form-title">
            {{ langs?.common.components.footer.top.formTitle }}
          </h3>
          <Input
            :label="langs?.common.form.label.phone"
            labelClass="form-label"
          />
          <Input
            :label="langs?.common.form.label.email"
            labelClass="form-label"
          />
          <FormFooter>
            <Button :style="{ width: '100%' }" variant="primary" type="submit">
              {{ langs?.common.actions.signUp }}
            </Button>
          </FormFooter>
        </Form>
      </Col>
      <!-- Branches -->
      <Col :xs="24" :md="14" :lg="14" :span="16">
        <div class="top-address">
          <h3 class="address-title">
            {{ langs?.common.components.footer.top.branch_1 }}
          </h3>
          <ul>
            <li class="address-list">
              {{ langs?.common.components.footer.top.addr_1 }}
            </li>
            <li class="address-list">
              {{ langs?.common.info.hotline }}
            </li>
          </ul>
        </div>

        <Divider wrapClass="top-divider" />

        <div class="top-address">
          <h3 class="address-title">
            {{ langs?.common.components.footer.top.branch_2 }}
          </h3>
          <ul>
            <li class="address-list">
              {{ langs?.common.components.footer.top.addr_2 }}
            </li>
            <li class="address-list">{{}}</li>
          </ul>
        </div>
      </Col>
    </Row>
  </Section>
</template>
