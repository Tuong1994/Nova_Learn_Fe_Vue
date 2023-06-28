<script lang="ts" setup>
import { defineComponent } from "vue";
import Card from "@/components/Card/Card.vue";
import Form from "@/components/Form/Form.vue";
import FormFooter from "@/components/Form/FormFooter.vue";
import Input from "@/components/Fields/Input/Input.vue";
import Password from "@/components/Fields/Password/Password.vue";
import Button from "@/components/Button/Button.vue";
import NoteMessage from "@/components/NoteMessage/NoteMessage.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "SignInView" });

const { langs } = useLang();
</script>

<template>
  <div class="sign-in">
    <div class="sign-in-wrap">
      <Card wrapClass="wrap-card" headerClass="wrap-card-header">
        <template #header>
          {{ langs?.auth.signIn.title }}
        </template>
        <template #body>
          <Form>
            <Input :label="langs?.common.form.label.account" />

            <Password :label="langs?.common.form.label.password" />

            <Row justify="center">
              <Col>
                <NoteMessage italic :message="langs?.auth.signIn.note" />
              </Col>

              <Col>|</Col>

              <Col>
                <router-link
                  to="/signUp"
                  :style="{ fontSize: '14px', color: '#549eff' }"
                >
                  {{ langs?.common.actions.signUp }}
                </router-link>
              </Col>
            </Row>

            <FormFooter>
              <Button variant="primary" size="lg" wrapClass="wrap-card-action">
                {{ langs?.common.actions.signIn }}
              </Button>
            </FormFooter>
          </Form>
        </template>
      </Card>
    </div>
  </div>
</template>
