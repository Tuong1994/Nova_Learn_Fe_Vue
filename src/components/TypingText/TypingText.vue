<!-- <script lang="ts">
import { PropType } from "vue";

export default {
  name: "NVLTypingText",
  props: {
    wrapClass: {
      type: String,
      default: "",
    },
    textClass: {
      type: String,
      default: "",
    },
    lineClass: {
      type: String,
      default: "",
    },
    size: {
      type: Number,
      default: 36,
    },
    texts: {
      type: Array as PropType<string[]>,
      default: () => ["Typing Text"],
    },
    color: {
      type: String as PropType<"purple" | "white" | "black" | "blue" | "red">,
      default: "purple",
    },
  },
  data() {
    return {
      typeValue: "",
      charIndex: 0,
      textsIndex: 0,
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeStatus: false,
    };
  },
  computed: {
    colorClass() {
      const colors: any = {
        purple: "nvl-typing-text--purple",
        white: "nvl-typing-text--white",
        black: "nvl-typing-text--black",
        blue: "nvl-typing-text--blue",
        red: "nvl-typing-text--red",
      };
      return colors[this.color];
    },
  },
  methods: {
    typeText() {
      if (this.charIndex < this.texts[this.textsIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue += this.texts[this.textsIndex].charAt(this.charIndex);

        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;

        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue = this.texts[this.textsIndex].substring(
          0,
          this.charIndex - 1
        );

        this.charIndex -= 1;

        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;

        this.textsIndex += 1;

        if (this.textsIndex >= this.texts.length) this.textsIndex = 0;

        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>

<template>
  <div
    :class="['nvl-typing-text', colorClass, wrapClass]"
    :style="{ height: `${size + 15}px` }"
  >
    <div
      :class="['typing-text-content', textClass]"
      :style="{ fontSize: `${size}px`, lineHeight: `${size + 15}px` }"
    >
      {{ typeValue }}
    </div>
    <div :class="['typing-text-line', lineClass]"></div>
  </div>
</template> -->
