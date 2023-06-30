<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Card from "@/components/Card/Card.vue";
import Form from "@/components/Form/Form.vue";
import FormFooter from "@/components/Form/FormFooter.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Input from "@/components/Fields/Input/Input.vue";
import TextArea from "@/components/Fields/TextArea/TextArea.vue";
import Button from "@/components/Button/Button.vue";
import Divider from "@/components/Divider/Divider.vue";
import IconUser from "@/components/Icons/IconUser.vue";
import IconBuilding from "@/components/Icons/IconBuilding.vue";
import IconEnvelope from "@/components/Icons/IconEnvelope.vue";
import IconPhone from "@/components/Icons/IconPhone.vue";
import useReveal from "@/common/hooks/useReveal";

defineComponent({ name: "BusinessContact" });

interface BusinessContactProps {
  langs: Langs;
}

defineProps<BusinessContactProps>();

useReveal("contactInner");
</script>

<template>
  <div id="contact" class="business-contact">
    <Section id="contactInner">
      <Row justify="spaceBetween">
        <Col :xs="24" :md="8" :span="10">
          <Title :level="3" theme="light">
            {{ langs?.business.contact.title }}
          </Title>

          <Divider />

          <Paragraph theme="light">
            {{ langs?.business.contact.content }}
          </Paragraph>
        </Col>

        <Col :xs="24" :md="14" :span="12">
          <Card wrapClass="contact-form">
            <template #header>
              <Title :level="4" align="center" transform="uppercase">
                {{ langs?.business.contact.formTitle }}
              </Title>
            </template>
            <template #body>
              <Form>
                <Input :label="langs?.common.form.label.representative">
                  <template #prefix>
                    <IconUser />
                  </template>
                </Input>

                <Input :label="langs?.common.form.label.company">
                  <template #prefix>
                    <IconBuilding />
                  </template>
                </Input>

                <Input :label="langs?.common.form.label.email">
                  <template #prefix>
                    <IconEnvelope />
                  </template>
                </Input>

                <Input :label="langs?.common.form.label.phone">
                  <template #prefix>
                    <IconPhone />
                  </template>
                </Input>

                <TextArea
                  :label="langs?.common.form.label.note"
                  :placeholder="langs?.common.form.placeholder.advise"
                />

                <FormFooter>
                  <Button variant="primary" size="lg" wrapClass="form-action">
                    {{ langs?.common.actions.submit }}
                  </Button>
                </FormFooter>
              </Form>
            </template>
          </Card>
        </Col>
      </Row>
    </Section>
  </div>
</template>
