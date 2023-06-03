<script lang="ts" setup>
import {
  defineComponent,
  defineProps,
  defineEmits,
  withDefaults,
  computed,
  ref,
  onUpdated,
  onUnmounted,
} from "vue";
import { ISlideGalleryImage } from "@/common/interface/base";
import Row from "../Grid/Row.vue";
import Col from "../Grid/Col.vue";
import Image from "../Image/Image.vue";
import IconAngleLeft from "../Icons/IconAngleLeft.vue";
import IconAngleRight from "../Icons/IconAngleRight.vue";
import IconX from "../Icons/IconX.vue";
import IconList from "../Icons/IconList.vue";

defineComponent({ name: "NVLSlideGallery" });

interface NVLSlideGalleryProps {
  open?: boolean;
  pos?: number;
  items: ISlideGalleryImage[];
  slideId?: string;
}

const props = withDefaults(defineProps<NVLSlideGalleryProps>(), {
  slideId: "gallery",
  pos: 0,
  items: () => [],
});

let time: any;

const slidePos = ref<number>(props.pos);

const touchStartPos = ref<number>(0);

const touchEndPos = ref<number>(0);

const isTouched = ref<boolean>(false);

const isTouchSwiped = ref<boolean>(false);

const mouseStartPos = ref<number>(0);

const mouseEndPos = ref<number>(0);

const isClicked = ref<boolean>(false);

const isClickSwiped = ref<boolean>(false);

const isShowList = ref<boolean>(false);

const isRender = ref<boolean>(false);

const widthSpan = computed<number>(() => 100);

const images = computed(() => props.items);

const emits = defineEmits(["onClose"]);

const tranSlateFullSlide = (pos: number) => {
  const translate = -pos * widthSpan.value;
  for (let i = 0; i < images.value.length; i++) {
    const el = document.getElementById(`${props.slideId}-${i}`);
    if (el) el.style.transform = `translateX(${translate}%)`;
  }
};

const translatePartialSlide = (pos: number) => {
  const currentPos = -slidePos.value * widthSpan.value;
  const translate = currentPos + pos;
  for (let i = 0; i < images.value.length; i++) {
    const el = document.getElementById(`${props.slideId}-${i}`);
    if (el) el.style.transform = `translateX(${translate}%)`;
  }
};

const handlePrevSlide = () => {
  let newPos = slidePos.value;
  if (newPos > 0) newPos -= 1;
  slidePos.value = newPos;
  tranSlateFullSlide(newPos);
};

const handleNextSlide = () => {
  let newPos = slidePos.value;
  if (newPos < images.value.length - 1) newPos += 1;
  slidePos.value = newPos;
  tranSlateFullSlide(newPos);
};

const jumpToSlide = (pos: number) => {
  slidePos.value = pos;
  tranSlateFullSlide(pos);
};

const onPrev = () => {
  handlePrevSlide();
};

const onNext = () => {
  handleNextSlide();
};

const onTouchStart = (e: TouchEvent) => {
  touchStartPos.value = e.targetTouches[0].clientX;
  touchEndPos.value = e.targetTouches[0].clientX;
  isTouched.value = true;
};

const onTouchMove = (e: TouchEvent) => {
  if (isTouched.value) {
    touchEndPos.value = e.targetTouches[0].clientX;
    const containerWidth = document.getElementById("container")?.offsetWidth;
    if (containerWidth) {
      const pos =
        ((touchEndPos.value - touchStartPos.value) / containerWidth) *
        widthSpan.value;
      isTouchSwiped.value = true;
      translatePartialSlide(pos);
    }
  }
};

const onTouchEnd = () => {
  if (isTouchSwiped.value) {
    if (touchEndPos.value - touchStartPos.value > 75) handlePrevSlide();
    else if (touchEndPos.value - touchStartPos.value < -75) handleNextSlide();
    else jumpToSlide(slidePos.value);
  }
  isTouched.value = false;
  isTouchSwiped.value = false;
};

const onMouseStart = (e: MouseEvent) => {
  e.preventDefault();
  mouseStartPos.value = e.clientX;
  mouseEndPos.value = e.clientX;
  isClicked.value = true;
};

const onMouseMove = (e: MouseEvent) => {
  e.preventDefault();
  if (isClicked.value) {
    mouseEndPos.value = e.clientX;
    const containerWidth = document.getElementById("container")?.offsetWidth;
    if (containerWidth) {
      const pos =
        ((mouseEndPos.value - mouseStartPos.value) / containerWidth) *
        widthSpan.value;
      isClickSwiped.value = true;
      translatePartialSlide(pos);
    }
  }
};

const onMouseEnd = () => {
  if (isClickSwiped.value) {
    if (mouseEndPos.value - mouseStartPos.value > 100) handlePrevSlide();
    else if (mouseEndPos.value - mouseStartPos.value < -100) handleNextSlide();
    else jumpToSlide(slidePos.value);
  }
  isClicked.value = false;
  isClickSwiped.value = false;
};

const onShowList = () => (isShowList.value = !isShowList.value);

const onClose = () => {
  if (isShowList.value) onShowList();
  emits("onClose");
};

onUpdated(() => {
  if (props.open && !isRender.value) {
    isRender.value = true;
    document.body.style.overflow = "hidden";
  } else if (!props.open && isRender.value) {
    time = setTimeout(() => (isRender.value = false), 500);
    document.body.style.overflow = "unset";
  }
});

onUnmounted(() => clearTimeout(time));
</script>

<template>
  <div
    v-if="isRender"
    :class="['nvl-slide-gallery', open ? 'nvl-slide-gallery--active' : '']"
  >
    <Row align="start" justify="spaceBetween" :style="{ height: '100%' }">
      <Col
        :xs="isShowList ? 16 : 24"
        :span="isShowList ? 18 : 24"
        wrapClass="gallery-view-col"
      >
        <div class="gallery-view">
          <div class="view-header">
            <Row justify="spaceBetween">
              <Col :xs="18" :span="22">
                {{ slidePos + 1 }}/{{ images.length }}
              </Col>
              <Col :xs="2" :span="1">
                <IconList class="header-icon" @onClick="onShowList" />
              </Col>
              <Col :xs="2" :span="1">
                <IconX class="header-icon" @onClick="onClose" />
              </Col>
            </Row>
          </div>

          <div
            class="view-container"
            id="container"
            @touchstart="onTouchStart"
            @touchmove="onTouchMove"
            @touchend="onTouchEnd"
            @mousedown="onMouseStart"
            @mousemove="onMouseMove"
            @mouseup="onMouseEnd"
            @mouseleave="onMouseEnd"
          >
            <button class="container-action" @click="onPrev">
              <IconAngleLeft />
            </button>

            <button class="container-action" @click="onNext">
              <IconAngleRight />
            </button>
            <div
              v-for="(image, idx) in images"
              :key="image.id"
              :id="`${slideId}-${idx}`"
              class="container-item"
            >
              <Image :src="image.src" fit="cover" wrapClass="item-image" />
            </div>
          </div>
        </div>
      </Col>

      <Col
        :xs="isShowList ? 8 : 0"
        :span="isShowList ? 6 : 0"
        wrapClass="gallery-list"
      >
        <Row>
          <Col
            v-for="(image, idx) in images"
            :key="image.id"
            :xs="24"
            :span="12"
          >
            <div
              :class="[
                'list-image',
                slidePos === idx ? 'list-image--active' : '',
              ]"
              @click="() => jumpToSlide(idx)"
            >
              <Image :src="image.src" fit="cover" />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
</template>
