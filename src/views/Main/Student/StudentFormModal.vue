<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits, ref } from "vue";
import { Langs } from "@/common/lang";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Modal from "@/components/Modal/Modal.vue";
import Form from "@/components/Form/Form.vue";
import Divider from "@/components/Divider/Divider.vue";
import SingleUpload from "@/components/Fields/Upload/SingleUpload.vue";
import Input from "@/components/Fields/Input/Input.vue";
import Select from "@/components/Fields/Select/Select.vue";
import Button from "@/components/Button/Button.vue";
import IconUser from "@/components/Icons/IconUser.vue";
import IconVenusMars from "@/components/Icons/IconVenusMars.vue";
import IconCalendar from "@/components/Icons/IconCalendar.vue";
import IconPhone from "@/components/Icons/IconPhone.vue";
import IconEnvelope from "@/components/Icons/IconEnvelope.vue";
import IconLocationDot from "@/components/Icons/IconLocationDot.vue";
import ChangePassModal from "@/components/ChangePassModal/ChangePassModal.vue";
import DatePicker from "@/components/Fields/DatePicker/DatePicker.vue";

defineComponent({ name: "StudentFormModal" });

interface StudentFormModalProps {
  langs: Langs;
  isEdit: boolean;
}

defineProps<StudentFormModalProps>();

const emits = defineEmits(["onCancel"]);

const isChangePass = ref<boolean>(false);

const onCancel = () => emits("onCancel");

const onChangePass = () => (isChangePass.value = true);

const onCancelChange = () => (isChangePass.value = false);

const options = [
  { label: "User 1", value: 1 },
  { label: "User 2", value: 2 },
];
</script>

<template>
  <Form>
    <Modal
      size="lg"
      backdropClass="student-form-modal-backdrop"
      modalClass="student-form-modal"
      :open="isEdit"
      @onCancel="onCancel"
    >
      <template #header>
        {{ langs?.student.modal.title }}
      </template>
      <template #body>
        <!-- Account / Password -->
        <Row align="start">
          <Col :xs="24" :span="6">
            <SingleUpload />
          </Col>

          <Col :xs="24" :span="18">
            <Input :label="langs?.common.form.label.account">
              <template #prefix>
                <IconUser />
              </template>
            </Input>

            <Button ghost variant="danger" @onClick="onChangePass">
              {{ langs?.common.actions.password }}
            </Button>
          </Col>
        </Row>

        <!-- Personal infomation -->
        <Divider contentPlacement="left">
          <template #content>
            {{ langs?.student.modal.subTitle_1 }}
          </template>
        </Divider>

        <Row>
          <!-- First name -->
          <Col :xs="24" :span="12">
            <Input :label="langs?.common.form.label.firstName">
              <template #prefix>
                <IconUser />
              </template>
            </Input>
          </Col>

          <!-- Last name -->
          <Col :xs="24" :span="12">
            <Input :label="langs?.common.form.label.lastName">
              <template #prefix>
                <IconUser />
              </template>
            </Input>
          </Col>
        </Row>

        <Row>
          <!-- Gender -->
          <Col :xs="24" :span="12">
            <Select :label="langs?.common.form.label.gender" :options="options">
              <template #prefix>
                <IconVenusMars />
              </template>
            </Select>
          </Col>

          <!-- Birthday -->
          <Col :xs="24" :span="12">
            <DatePicker :label="langs?.common.form.label.birthday" />
          </Col>
        </Row>

        <!-- Contact infomation -->
        <Divider contentPlacement="left">
          <template #content>
            {{ langs?.student.modal.subTitle_2 }}
          </template>
        </Divider>

        <Row>
          <!-- Phone -->
          <Col :xs="24" :span="12">
            <Input :label="langs?.common.form.label.phone">
              <template #prefix>
                <IconPhone />
              </template>
            </Input>
          </Col>

          <!-- Email -->
          <Col :xs="24" :span="12">
            <Input :label="langs?.common.form.label.email">
              <template #prefix>
                <IconEnvelope />
              </template>
            </Input>
          </Col>
        </Row>

        <Row>
          <!-- City -->
          <Col :xs="24" :span="12">
            <Select :label="langs?.common.form.label.city">
              <template #prefix>
                <IconLocationDot />
              </template>
            </Select>
          </Col>

          <!-- District -->
          <Col :xs="24" :span="12">
            <Select :label="langs?.common.form.label.district">
              <template #prefix>
                <IconLocationDot />
              </template>
            </Select>
          </Col>
        </Row>

        <Row>
          <!-- Ward -->
          <Col :xs="24" :span="12">
            <Select :label="langs?.common.form.label.ward">
              <template #prefix>
                <IconLocationDot />
              </template>
            </Select>
          </Col>

          <!-- Address -->
          <Col :xs="24" :span="12">
            <Input :label="langs?.common.form.label.address">
              <template #prefix>
                <IconLocationDot />
              </template>
            </Input>
          </Col>
        </Row>
      </template>
    </Modal>
  </Form>

  <ChangePassModal :open="isChangePass" @onCancel="onCancelChange" />
</template>
