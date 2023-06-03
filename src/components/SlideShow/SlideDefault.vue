<script lang="ts" setup>
import {
  defineComponent,
  defineProps,
  withDefaults,
  ref,
  computed,
  onUnmounted,
  watchEffect,
} from "vue";
import { ISlideItem } from "@/common/interface/base";
import IconAngleLeft from "../Icons/IconAngleLeft.vue";
import IconAngleRight from "../Icons/IconAngleRight.vue";
import IconCustom from "../Icons/IconCustom.vue";

defineComponent({ name: "NVLSlideDefault" });

interface NVLSlideDefaultProps {
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
  theme?: "dark" | "light";
}

const props = withDefaults(defineProps<NVLSlideDefaultProps>(), {
  slideId: "slide",
  time: 5000,
  theme: "light",
  slides: () => [],
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

const prevBtnDisabled = computed(() => {
  if (props.infinite) return false;
  if (slidePos.value === 0) return true;
  else return false;
});

const nextBtnDisabled = computed(() => {
  if (props.infinite) return false;
  if (slidePos.value === props.slides.length - 1) return true;
  else return false;
});

const tranSlateFullSlide = (pos: number) => {
  const translate = -withSpan.value * pos;
  for (let i = 0; i < props.slides.length; i++) {
    const el = document.getElementById(`${props.slideId}-${i}`);
    if (el) el.style.transform = `translateX(${translate}%)`;
  }
};

const translatePartialSlide = (pos: number) => {
  const currentPos = -slidePos.value * withSpan.value;
  const translate = currentPos + pos;
  for (let i = 0; i < props.slides.length; i++) {
    const el = document.getElementById(`${props.slideId}-${i}`);
    if (el) el.style.transform = `translateX(${translate}%)`;
  }
};

const handlePrevSlide = () => {
  let newPos = slidePos.value;
  if (newPos > 0) newPos -= 1;
  else if (props.infinite) newPos = props.slides.length - 1;
  slidePos.value = newPos;
  tranSlateFullSlide(newPos);
};

const handleNextSlide = () => {
  let newPos = slidePos.value;
  if (newPos < props.slides.length - 1) newPos += 1;
  else if (props.infinite) newPos = 0;
  slidePos.value = newPos;
  tranSlateFullSlide(newPos);
};

const handleManualStop = () => {
  clearInterval(interval);
  if (props.hasManualStop) manualStop.value = false;
};

const onPrev = () => {
  handleManualStop();
  handlePrevSlide();
};

const onNext = () => {
  handleManualStop();
  handleNextSlide();
};

const jumpToSlide = (pos: number) => {
  slidePos.value = pos;
  tranSlateFullSlide(pos);
};

const speedAnimation = (type: "fast" | "slow") => {
  for (
    let i = Math.min(0, slidePos.value - 2);
    i < Math.max(props.slides.length, slidePos.value + 3);
    i++
  ) {
    const el = document.getElementById(`${props.slideId}-${i}`);
    if (el) {
      if (type === "fast") el.classList.add("slide--transition");
      else el.classList.remove("slide--transition");
    }
  }
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
      translatePartialSlide(pos);
      isClickSwiped.value = true;
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
  <div :class="['nvl-slide-default', wrapClass]">
    <!-- Prev slide button -->
    <button
      :class="[
        'slide-default-action',
        prevBtnDisabled ? 'slide-default-action-disabled' : '',
        theme === 'dark' ? 'slide-default-action--white' : '',
      ]"
      :disabled="prevBtnDisabled"
      @click="onPrev"
    >
      <IconCustom
        v-if="prevIconName"
        :icon="prevIconName"
        class="action-icon"
      />
      <IconAngleLeft v-if="!prevIconName" class="action-icon" />
    </button>
    <!-- Next slide button -->
    <button
      :class="[
        'slide-default-action',
        nextBtnDisabled ? 'slide-default-action-disabled' : '',
        theme === 'dark' ? 'slide-default-action--white' : '',
      ]"
      :disabled="nextBtnDisabled"
      @click="onNext"
    >
      <IconCustom
        v-if="nextIconName"
        :icon="nextIconName"
        class="action-icon"
      />
      <IconAngleRight v-if="!nextIconName" class="action-icon" />
    </button>
    <!-- Slide container -->
    <div
      id="container"
      :class="['slide-default-container', containerClass]"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @mousedown="onMouseStart"
      @mousemove="onMouseMove"
      @mouseup="onMouseEnd"
      @mouseleave="onMouseEnd"
    >
      <div
        v-for="(slide, idx) in slides"
        :key="slide.id"
        :id="`${slideId}-${idx}`"
        class="container-slide"
      >
        <slot name="slide-inner" :slide="slide.componentName"></slot>
      </div>
    </div>
    <!-- Dots -->
    <div :class="['slide-default-dots', dotsClass]">
      <div
        v-for="(dot, idx) in slides"
        :key="dot.id"
        :class="[
          'dots-item',
          slidePos === idx ? 'dots-item--active' : '',
          theme === 'dark' ? 'dots-item--white' : '',
        ]"
        @click="() => jumpToSlide(idx)"
      ></div>
    </div>
  </div>
</template>
