<script lang="ts" setup>
import {
  defineComponent,
  defineProps,
  withDefaults,
  ref,
  computed,
  watchEffect,
  onUnmounted,
} from "vue";
import { ISlideItem } from "@/common/interface/base";
import IconCustom from "../Icons/IconCustom.vue";
import IconAngleLeft from "../Icons/IconAngleLeft.vue";
import IconAngleRight from "../Icons/IconAngleRight.vue";
import Button from "../Button/Button.vue";

defineComponent({ name: "NVLSlideHexagon" });

interface NVLSlideHexagonProps {
  slideId?: string;
  infinite?: boolean;
  time?: number;
  autoPlay?: boolean;
  hasManualStop?: boolean;
  slides?: ISlideItem[];
  wrapClass?: string;
  containerClass?: string;
  dotsClass?: string;
  prevIconName?: string;
  nextIconName?: string;
}

const props = withDefaults(defineProps<NVLSlideHexagonProps>(), {
  slideId: "slide",
  slides: () => [],
  time: 3000,
});

let interval: any;

const slidePos = ref<number>(0);

const touchStartPos = ref<number>(0);

const touchEndPos = ref<number>(0);

const isTouched = ref<boolean>(false);

const isTouchSwiped = ref<boolean>(false);

const mouseStartPos = ref<number>(0);

const mouseEndPos = ref<number>(0);

const isClicked = ref<boolean>(false);

const isClickSwiped = ref<boolean>(false);

const manualStop = ref<boolean>(props.time !== undefined);

const withSpan = computed(() => 100);

const slideItems = computed(() => {
  if (props.slides.length > 5) {
    return [...props.slides].slice(0, 5);
  } else return props.slides;
});

const prevBtnDisabled = computed(() => {
  if (props.infinite) return false;
  if (slidePos.value === 0) return true;
  else return false;
});

const nextBtnDisabled = computed(() => {
  if (props.infinite) return false;
  if (slidePos.value === slideItems.value.length - 1) return true;
  else return false;
});

const tranSlateFullSlide = (pos: number) => {
  const translate = -withSpan.value * pos;
  for (let i = 0; i < slideItems.value.length; i++) {
    const el = document.getElementById(`${props.slideId}-${i}`);
    if (el) el.style.transform = `translateX(${translate}%)`;
  }
};

const translatePartialSlide = (pos: number) => {
  const currentPos = -slidePos.value * withSpan.value;
  const translate = currentPos + pos;
  for (let i = 0; i < slideItems.value.length; i++) {
    const el = document.getElementById(`${props.slideId}-${i}`);
    if (el) el.style.transform = `translateX(${translate}%)`;
  }
};

const handlePrevSlide = () => {
  let newPos = slidePos.value;
  if (newPos > 0) newPos -= 1;
  else if (props.infinite) newPos = slideItems.value.length - 1;
  slidePos.value = newPos;
  tranSlateFullSlide(newPos);
};

const handleNextSlide = () => {
  let newPos = slidePos.value;
  if (newPos < slideItems.value.length - 1) newPos += 1;
  else if (props.infinite) newPos = 0;
  slidePos.value = newPos;
  tranSlateFullSlide(newPos);
};

const handleManualStop = () => {
  clearInterval(interval);
  if (props.hasManualStop) manualStop.value = false;
};

const jumpToSlide = (pos: number) => {
  slidePos.value = pos;
  tranSlateFullSlide(pos);
};

const speedAnimation = (type: "fast" | "slow") => {
  for (
    let i = Math.min(0, slidePos.value - 2);
    i < Math.max(slideItems.value.length, slidePos.value + 3);
    i++
  ) {
    const el = document.getElementById(`${props.slideId}-${i}`);
    if (el) {
      if (type === "fast") el.classList.add("slide--transition");
      else el.classList.remove("slide--transition");
    }
  }
};

const onPrev = () => {
  handlePrevSlide();
  handleManualStop();
};

const onNext = () => {
  handleNextSlide();
  handleManualStop();
};

const onTouchStart = (e: TouchEvent) => {
  handleManualStop();
  speedAnimation("fast");
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
        withSpan.value;
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
  manualStop.value = true;
  speedAnimation("slow");
};

const onMouseStart = (e: MouseEvent) => {
  e.preventDefault();
  handleManualStop();
  speedAnimation("fast");
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
        withSpan.value;
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
  manualStop.value = true;
  speedAnimation("slow");
};

watchEffect(() => {
  if (props.autoPlay) {
    if (manualStop.value && !isClicked.value && !isTouched.value) {
      interval = setInterval(() => handleNextSlide(), props.time);
    }
  }
});

onUnmounted(() => clearInterval(interval));
</script>

<template>
  <div :class="['nvl-slide-hexagon', wrapClass]">
    <!-- Slide hexagon dots -->
    <div :class="['hexagon-dots', dotsClass]">
      <!-- First dots line -->
      <div class="dots-group">
        <div
          v-for="(dot, idx) in slideItems"
          :key="dot.id"
          :class="['group-item', slidePos === idx ? 'group-item--active' : '']"
          @click="() => jumpToSlide(idx)"
        >
          <IconCustom
            v-if="dot.dotIcon"
            :icon="dot.dotIcon"
            class="item-icon"
          />
          <p class="item-title">{{ dot.dotTitle }}</p>
        </div>
      </div>
    </div>
    <!-- Slide container -->
    <div class="hexagon-slides">
      <!-- Slide -->
      <div
        id="container"
        :class="['slides-container', containerClass]"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
        @mousedown="onMouseStart"
        @mousemove="onMouseMove"
        @mouseup="onMouseEnd"
        @mouseleave="onMouseEnd"
      >
        <div
          v-for="(slide, idx) in slideItems"
          :key="slide.id"
          :id="`${slideId}-${idx}`"
          class="container-item"
        >
          <slot name="slide-inner" :slide="slide.componentName"></slot>
        </div>
      </div>
      <!-- Button -->
      <div class="slides-actions">
        <Button
          wrapClass="actions-btn"
          variant="primary"
          size="lg"
          :disabled="prevBtnDisabled"
          @click="onPrev"
        >
          <IconCustom
            v-if="prevIconName"
            :icon="prevIconName"
            class="btn-icon"
          />
          <IconAngleLeft v-if="!prevIconName" class="btn-icon" />
        </Button>
        <Button
          wrapClass="actions-btn"
          variant="primary"
          size="lg"
          :disabled="nextBtnDisabled"
          @click="onNext"
        >
          <IconCustom
            v-if="nextIconName"
            :icon="nextIconName"
            class="btn-icon"
          />
          <IconAngleRight v-if="!nextIconName" class="btn-icon" />
        </Button>
      </div>
    </div>
  </div>
</template>
