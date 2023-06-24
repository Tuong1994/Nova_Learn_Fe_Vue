<script lang="ts" setup>
import {
  defineComponent,
  defineProps,
  defineEmits,
  withDefaults,
  computed,
  ref,
} from "vue";
import Modal from "../Modal/Modal.vue";
import Card from "../Card/Card.vue";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";
import Form from "../Form/Form.vue";
import InputCom from "../Fields/Input.vue";
import TextArea from "../Fields/TextArea.vue";
import IconStar from "../Icons/IconStar.vue";
import Tooltip from "../Tooltip/Tooltip.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "NVLRateModal" });

interface NVLRateModalProps {
  open?: boolean;
  headerTitle?: string;
  wrapClass?: string;
}

const { langs } = useLang();

withDefaults(defineProps<NVLRateModalProps>(), {});

const emits = defineEmits(["onCancel"]);

const point = ref<number>(0);

const hoverIdx = ref<number>(0);

const items = computed(() => [
  {
    id: "1",
    title: langs.value?.common.components.rate.modal.point_1,
    point: 1,
  },
  {
    id: "2",
    title: langs.value?.common.components.rate.modal.point_2,
    point: 2,
  },
  {
    id: "3",
    title: langs.value?.common.components.rate.modal.point_3,
    point: 3,
  },
  {
    id: "4",
    title: langs.value?.common.components.rate.modal.point_4,
    point: 4,
  },
  {
    id: "5",
    title: langs.value?.common.components.rate.modal.point_5,
    point: 5,
  },
]);

const activeClass = (p: number) => {
  if (p <= (hoverIdx.value || point.value)) return "icon--active";
  return "icon--unactive";
};

const handleChange = (e: Event) => {
  if (!(e.target as HTMLInputElement).checked) {
    hoverIdx.value = 0;
    point.value = 0;
  }
};

const onCancel = () => emits("onCancel");
</script>

<template>
  <Form>
    <Modal
      :open="open"
      :wrapClass="`nvl-rate-modal ${wrapClass}`"
      @onCancel="onCancel"
    >
      <template #header>
        {{ headerTitle ?? langs?.common.components.rate.modal.headerTitle }}
      </template>
      <template #body>
        <Card wrapClass="modal-card">
          <template #body>
            <Row justify="center">
              <Col v-for="item in items" :key="item.id">
                <Tooltip :showArrow="false" :content="item.title">
                  <label>
                    <input
                      type="checkbox"
                      class="card-control"
                      @click="() => (point = item.point)"
                      @input="handleChange"
                    />
                    <div
                      class="card-icon"
                      @mouseenter="() => (hoverIdx = item.point)"
                      @mouseleave="() => (hoverIdx = 0)"
                    >
                      <IconStar :size="20" :class="activeClass(item.point)" />
                    </div>
                  </label>
                </Tooltip>
              </Col>
            </Row>
          </template>
        </Card>

        <InputCom :label="langs?.common.form.label.fullName" />

        <InputCom :label="langs?.common.form.label.phone" />

        <InputCom :label="langs?.common.form.label.email" />

        <TextArea :label="langs?.common.form.label.note" />
      </template>
    </Modal>
  </Form>
</template>
