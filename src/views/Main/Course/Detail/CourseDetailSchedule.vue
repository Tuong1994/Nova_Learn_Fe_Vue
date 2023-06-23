<script lang="ts" setup>
import { defineComponent, defineProps, ref } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Card from "@/components/Card/Card.vue";
import Form from "@/components/Form/Form.vue";
import FormFooter from "@/components/Form/FormFooter.vue";
import Input from "@/components/Fields/Input.vue";
import Button from "@/components/Button/Button.vue";
import Divider from "@/components/Divider/Divider.vue";
import helper from "@/utils/helper";
import IconUser from "@/components/Icons/IconUser.vue";
import IconPhone from "@/components/Icons/IconPhone.vue";
import IconEnvelope from "@/components/Icons/IconEnvelope.vue";
import Radio from "@/components/Fields/Radio.vue";
import InfoRow from "@/components/InfoRow/InfoRow.vue";
import useReveal from "@/common/hooks/useReveal";

defineComponent({ name: "CourseDetailSchedule" });

interface CourseDetailScheduleProps {
  langs: Langs;
  type: number;
}

useReveal("scheduleInner");

defineProps<CourseDetailScheduleProps>();

const radioVal = ref(0);
</script>

<template>
  <Section id="scheduleInner" wrapClass="detail-schedule">
    <Title :level="3" transform="uppercase">
      {{ langs?.course.detail.sideNav.schedule }}
    </Title>
    <!-- Info -->
    <Row>
      <Col :grow="1" :span="12">
        <Card bodyClass="schedule-info">
          <template #body>
            <Title :level="5">
              {{ langs?.course.detail.schedule.feeTitle }}
            </Title>
            <Paragraph :size="20" wrapClass="info-price">
              {{ helper.fomatMoney(27000000, type) }}
            </Paragraph>
          </template>
        </Card>
      </Col>
      <Col :grow="1" :span="12">
        <Card bodyClass="schedule-info">
          <template #body>
            <Title :level="5">
              {{ langs?.course.detail.schedule.durationTitle }}
            </Title>
            <Paragraph :size="20">
              6 {{ langs?.common.units.months }} (72
              {{ langs?.common.units.sessions }})
            </Paragraph>
          </template>
        </Card>
      </Col>
    </Row>

    <Divider />

    <Row>
      <!-- Opening time -->
      <Col :grow="1" :span="12">
        <Card>
          <template #header>
            <Title :level="5" align="center" transform="uppercase">
              {{ langs?.course.detail.schedule.scheduleTitle }}
            </Title>
          </template>
          <template #body>
            <Title :level="5">
              {{ langs?.course.detail.schedule.branch_1 }}
            </Title>

            <div class="schedule-detail">
              <Paragraph :size="18" wrapClass="detail-name">
                Bootcamp 53
              </Paragraph>

              <InfoRow
                :title="langs?.common.form.label.startDate"
                content="15/06/2023"
              />
              <InfoRow
                :title="langs?.common.form.label.time"
                content="Tối (18h30 - 21h30)"
              />
              <InfoRow
                :title="langs?.common.form.label.address"
                :content="langs?.common.components.footer.top.addr_1"
              />

              <Divider />
            </div>

            <Title :level="5">
              {{ langs?.course.detail.schedule.branch_2 }}
            </Title>

            <div class="schedule-detail">
              <Paragraph :size="18" wrapClass="detail-name">
                Bootcamp 53
              </Paragraph>

              <InfoRow
                :title="langs?.common.form.label.startDate"
                content="15/06/2023"
              />
              <InfoRow
                :title="langs?.common.form.label.time"
                content="Tối (18h30 - 21h30)"
              />
              <InfoRow
                :title="langs?.common.form.label.address"
                :content="langs?.common.components.footer.top.addr_2"
              />

              <Divider />
            </div>
          </template>
        </Card>
      </Col>

      <!-- Register form -->
      <Col :grow="1" :span="12">
        <Card>
          <template #header>
            <Title :level="5" align="center" transform="uppercase">
              {{ langs?.course.detail.schedule.formTitle }}
            </Title>
          </template>
          <template #body>
            <Form>
              <Input :label="langs?.common.form.label.fullName">
                <template #suffix>
                  <IconUser />
                </template>
              </Input>

              <Input :label="langs?.common.form.label.phone">
                <template #suffix>
                  <IconPhone />
                </template>
              </Input>

              <Input :label="langs?.common.form.label.email">
                <template #suffix>
                  <IconEnvelope />
                </template>
              </Input>

              <Divider contentPlacement="left">
                <template #content>
                  {{ langs?.course.detail.schedule.location }}
                </template>
              </Divider>

              <Radio
                name="location"
                :value="1"
                :label="langs?.common.components.footer.top.addr_1"
                v-model="radioVal"
              />

              <Radio
                name="location"
                :value="2"
                :label="langs?.common.components.footer.top.addr_2"
                v-model="radioVal"
              />

              <FormFooter>
                <Button variant="primary" size="lg" wrapClass="schedule-action">
                  {{ langs?.common.actions.submit }}
                </Button>
              </FormFooter>
            </Form>
          </template>
        </Card>
      </Col>
    </Row>
  </Section>
</template>
