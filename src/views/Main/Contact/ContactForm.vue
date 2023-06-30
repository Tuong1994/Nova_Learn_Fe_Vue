<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Divider from "@/components/Divider/Divider.vue";
import Form from "@/components/Form/Form.vue";
import FormFooter from "@/components/Form/FormFooter.vue";
import Input from "@/components/Fields/Input/Input.vue";
import TextArea from "@/components/Fields/TextArea/TextArea.vue";
import Button from "@/components/Button/Button.vue";
import IconUser from "@/components/Icons/IconUser.vue";
import IconPhone from "@/components/Icons/IconPhone.vue";
import IconEnvelope from "@/components/Icons/IconEnvelope.vue";

defineComponent({ name: "ContactForm" });

interface ContactFormProps {
  langs: Langs;
}

defineProps<ContactFormProps>();
</script>

<template>
  <Section wrapClass="contact-form">
    <Row justify="spaceBetween">
      <Col :xs="24" :md="24" :span="11">
        <Title :level="3">
          {{ langs?.contact.form.title_2 }}
        </Title>

        <div class="form-map">
          <Paragraph wrapClass="map-address">{{
            langs?.common.components.footer.top.addr_1
          }}</Paragraph>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.238686683102!2d106.6872365739452!3d10.793022358889655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528cda317b129%3A0x13f309f45a673cb3!2zMjMtMjUgxJAuIFRy4bqnbiBOaOG6rXQgRHXhuq10LCBQaMaw4budbmcgVMOibiDEkOG7i25oLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1685325427474!5m2!1svi!2s"
            class="map-view"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div class="form-map">
          <Paragraph wrapClass="map-address">{{
            langs?.common.components.footer.top.addr_2
          }}</Paragraph>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2019497230426!2d106.67375716961268!3d10.795839235333323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d677dab3d7%3A0xc3583be4c9df2fde!2zMTAyIE5ndXnhu4VuIMSQw6xuaCBDaMOtbmgsIFBoxrDhu51uZyAxNSwgUGjDuiBOaHXhuq1uLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1685325609961!5m2!1svi!2s"
            class="map-view"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Col>

      <Col :xs="24" :md="24" :span="12">
        <Title :level="3">
          {{ langs?.contact.form.title_1 }}
        </Title>

        <Divider />

        <Form>
          <Input :label="langs?.common.form.label.fullName">
            <template #prefix>
              <IconUser />
            </template>
          </Input>

          <Input :label="langs?.common.form.label.phone">
            <template #prefix>
              <IconPhone />
            </template>
          </Input>

          <Input :label="langs?.common.form.label.email">
            <template #prefix>
              <IconEnvelope />
            </template>
          </Input>

          <TextArea :label="langs?.common.form.label.note" />

          <FormFooter>
            <Button variant="primary" wrapClass="form-action">
              {{ langs?.common.actions.submit }}
            </Button>
          </FormFooter>
        </Form>
      </Col>
    </Row>
  </Section>
</template>
