<script lang="ts" setup>
import { defineComponent } from "vue";
import Card from "@/components/Card/Card.vue";
import Form from "@/components/Form/Form.vue";
import FormFooter from "@/components/Form/FormFooter.vue";
import Input from "@/components/Fields/Input.vue";
import Password from "@/components/Fields/Password.vue";
import Button from "@/components/Button/Button.vue";
import NoteMessage from "@/components/NoteMessage/NoteMessage.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "SignUpView" });

const { langs } = useLang();
</script>

<template>
  <div class="sign-up">
    <div class="sign-up-wrap">
      <Card wrapClass="wrap-card" headerClass="wrap-card-header">
        <template #header>
          {{ langs?.auth.signUp.title }}
        </template>
        <template #body>
          <Form>
            <Input :label="langs?.common.form.label.account" />

            <Password :label="langs?.common.form.label.password" />

            <Input :label="langs?.common.form.label.phone" />

            <Input :label="langs?.common.form.label.email" />

            <Row justify="center">
              <Col>
                <NoteMessage italic :message="langs?.auth.signUp.note" />
              </Col>

              <Col>|</Col>

              <Col>
                <router-link
                  to="/signIn"
                  :style="{ fontSize: '14px', color: '#549eff' }"
                >
                  {{ langs?.common.actions.signIn }}
                </router-link>
              </Col>
            </Row>

            <FormFooter>
              <Button variant="primary" size="lg" wrapClass="wrap-card-action">
                {{ langs?.common.actions.signUp }}
              </Button>
            </FormFooter>
          </Form>
        </template>
      </Card>
    </div>
  </div>
</template>
