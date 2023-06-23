<script lang="ts" setup>
import {
  defineComponent,
  defineProps,
  withDefaults,
  computed,
  StyleValue,
} from "vue";

defineComponent({ name: "NVLGridCol" });

type ColSpan =
  | -1
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25;

interface NVLGridColProps {
  span?: ColSpan;
  xs?: ColSpan;
  md?: ColSpan;
  lg?: ColSpan;
  grow?: number;
  wrapClass?: string;
  style?: StyleValue;
}

const props = withDefaults(defineProps<NVLGridColProps>(), {
  span: -1,
  xs: -1,
  md: -1,
  lg: -1,
  grow: 0,
  style: () => ({}),
});

const spanClass = computed(() => {
  const spans: any = {
    [-1]: "nvl-grid-col-auto",
    [0]: "nvl-grid-col-0",
    [1]: "nvl-grid-col-1",
    [2]: "nvl-grid-col-2",
    [3]: "nvl-grid-col-3",
    [4]: "nvl-grid-col-4",
    [5]: "nvl-grid-col-5",
    [6]: "nvl-grid-col-6",
    [7]: "nvl-grid-col-7",
    [8]: "nvl-grid-col-8",
    [9]: "nvl-grid-col-9",
    [10]: "nvl-grid-col-10",
    [11]: "nvl-grid-col-11",
    [12]: "nvl-grid-col-12",
    [13]: "nvl-grid-col-13",
    [14]: "nvl-grid-col-14",
    [15]: "nvl-grid-col-15",
    [16]: "nvl-grid-col-16",
    [17]: "nvl-grid-col-17",
    [18]: "nvl-grid-col-18",
    [19]: "nvl-grid-col-19",
    [20]: "nvl-grid-col-20",
    [21]: "nvl-grid-col-21",
    [22]: "nvl-grid-col-22",
    [23]: "nvl-grid-col-23",
    [24]: "nvl-grid-col-24",
  };
  return spans[props.span];
});
const xsClass = computed(() => {
  const spans: any = {
    [-1]: "nvl-grid-col-auto",
    [0]: "nvl-grid-col-xs-0",
    [1]: "nvl-grid-col-xs-1",
    [2]: "nvl-grid-col-xs-2",
    [3]: "nvl-grid-col-xs-3",
    [4]: "nvl-grid-col-xs-4",
    [5]: "nvl-grid-col-xs-5",
    [6]: "nvl-grid-col-xs-6",
    [7]: "nvl-grid-col-xs-7",
    [8]: "nvl-grid-col-xs-8",
    [9]: "nvl-grid-col-xs-9",
    [10]: "nvl-grid-col-xs-10",
    [11]: "nvl-grid-col-xs-11",
    [12]: "nvl-grid-col-xs-12",
    [13]: "nvl-grid-col-xs-13",
    [14]: "nvl-grid-col-xs-14",
    [15]: "nvl-grid-col-xs-15",
    [16]: "nvl-grid-col-xs-16",
    [17]: "nvl-grid-col-xs-17",
    [18]: "nvl-grid-col-xs-18",
    [19]: "nvl-grid-col-xs-19",
    [20]: "nvl-grid-col-xs-20",
    [21]: "nvl-grid-col-xs-21",
    [22]: "nvl-grid-col-xs-22",
    [23]: "nvl-grid-col-xs-23",
    [24]: "nvl-grid-col-xs-24",
  };
  return spans[props.xs];
});
const mdClass = computed(() => {
  const spans: any = {
    [-1]: "nvl-grid-col-auto",
    [0]: "nvl-grid-col-md-0",
    [1]: "nvl-grid-col-md-1",
    [2]: "nvl-grid-col-md-2",
    [3]: "nvl-grid-col-md-3",
    [4]: "nvl-grid-col-md-4",
    [5]: "nvl-grid-col-md-5",
    [6]: "nvl-grid-col-md-6",
    [7]: "nvl-grid-col-md-7",
    [8]: "nvl-grid-col-md-8",
    [9]: "nvl-grid-col-md-9",
    [10]: "nvl-grid-col-md-10",
    [11]: "nvl-grid-col-md-11",
    [12]: "nvl-grid-col-md-12",
    [13]: "nvl-grid-col-md-13",
    [14]: "nvl-grid-col-md-14",
    [15]: "nvl-grid-col-md-15",
    [16]: "nvl-grid-col-md-16",
    [17]: "nvl-grid-col-md-17",
    [18]: "nvl-grid-col-md-18",
    [19]: "nvl-grid-col-md-19",
    [20]: "nvl-grid-col-md-20",
    [21]: "nvl-grid-col-md-21",
    [22]: "nvl-grid-col-md-22",
    [23]: "nvl-grid-col-md-23",
    [24]: "nvl-grid-col-md-24",
  };
  return spans[props.md];
});
const lgClass = computed(() => {
  const spans: any = {
    [-1]: "nvl-grid-col-auto",
    [0]: "nvl-grid-col-lg-0",
    [1]: "nvl-grid-col-lg-1",
    [2]: "nvl-grid-col-lg-2",
    [3]: "nvl-grid-col-lg-3",
    [4]: "nvl-grid-col-lg-4",
    [5]: "nvl-grid-col-lg-5",
    [6]: "nvl-grid-col-lg-6",
    [7]: "nvl-grid-col-lg-7",
    [8]: "nvl-grid-col-lg-8",
    [9]: "nvl-grid-col-lg-9",
    [10]: "nvl-grid-col-lg-10",
    [11]: "nvl-grid-col-lg-11",
    [12]: "nvl-grid-col-lg-12",
    [13]: "nvl-grid-col-lg-13",
    [14]: "nvl-grid-col-lg-14",
    [15]: "nvl-grid-col-lg-15",
    [16]: "nvl-grid-col-lg-16",
    [17]: "nvl-grid-col-lg-17",
    [18]: "nvl-grid-col-lg-18",
    [19]: "nvl-grid-col-lg-19",
    [20]: "nvl-grid-col-lg-20",
    [21]: "nvl-grid-col-lg-21",
    [22]: "nvl-grid-col-lg-22",
    [23]: "nvl-grid-col-lg-23",
    [24]: "nvl-grid-col-lg-24",
  };
  return spans[props.lg];
});
</script>

<template>
  <div
    :class="['nvl-grid-col', spanClass, lgClass, mdClass, xsClass, wrapClass]"
    :style="[style, { flexGrow: grow }]"
  >
    <slot></slot>
  </div>
</template>
