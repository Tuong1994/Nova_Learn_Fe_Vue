<script lang="ts" setup>
import {
  defineComponent,
  defineProps,
  defineEmits,
  withDefaults,
  computed,
  ref,
} from "vue";
import IconAngleLeft from "../Icons/IconAngleLeft.vue";
import IconAngleRight from "../Icons/IconAngleRight.vue";
import IconAngleDoubleLeft from "../Icons/IconAngleDoubleLeft.vue";
import IconAngleDoubleRight from "../Icons/IconAngleDoubleRight.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "NVLPagination" });

interface NVLPaginationProps {
  total?: number;
  page?: number;
  limit?: number;
  siblingCount?: number;
  wrapClass?: string;
  contentClass?: string;
  actionsClass?: string;
  hasContent?: boolean;
}

const props = withDefaults(defineProps<NVLPaginationProps>(), {
  total: 10,
  page: 1,
  limit: 10,
  siblingCount: 1,
});

const langs = useLang();

const pageValue = ref<number>(props.page);

// Caculate pagination range
const paginationRange = computed(() => {
  const { total, limit, siblingCount } = props;

  const DOTS = "...";

  const range = (start: number, end: number) => {
    let length = end - start + 1;
    /*
        Create an array of certain length and set the elements within it from
      start value to end value.
    */
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const totalPageCount = Math.ceil(total / limit);

  // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
  const totalPageNumbers = siblingCount + 5;

  /*
  Case 1:
  If the number of pages is less than the page numbers we want to show in our
  paginationComponent, we return the range [1..totalPageCount]
*/
  if (totalPageNumbers >= totalPageCount) {
    return range(1, totalPageCount);
  }

  /*
    Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
*/
  const leftSiblingIndex = Math.max(pageValue.value - siblingCount, 1);
  const rightSiblingIndex = Math.min(
    pageValue.value + siblingCount,
    totalPageCount
  );

  /*
  We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
*/
  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

  const firstPageIndex = 1;
  const lastPageIndex = totalPageCount;

  /*
    Case 2: No left dots to show, but rights dots to be shown
*/
  if (!shouldShowLeftDots && shouldShowRightDots) {
    let leftItemCount = 3 + 2 * siblingCount;
    let leftRange = range(1, leftItemCount);

    return [...leftRange, DOTS, totalPageCount];
  }

  /*
    Case 3: No right dots to show, but left dots to be shown
*/
  if (shouldShowLeftDots && !shouldShowRightDots) {
    let rightItemCount = 3 + 2 * siblingCount;
    let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
    return [firstPageIndex, DOTS, ...rightRange];
  }

  /*
    Case 4: Both left and right dots to be shown
*/
  if (shouldShowLeftDots && shouldShowRightDots) {
    let middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
  }

  return [];
});

const content = computed(() => {
  const start = (pageValue.value - 1) * props.limit;
  const end = start + props.limit;
  const from = start === 0 ? 1 : start;
  const to = end === props.total ? props.total : end;
  return `${langs.value?.common.components.pagination.show} ${from} ${langs.value?.common.components.pagination.to} ${to} ${langs.value?.common.components.pagination.of} ${props.total} ${langs.value?.common.components.pagination.result}`;
});

const totalPage = computed(() => Math.ceil(props.total / props.limit));

const iconBtnClass = `actions-button actions-button--pointer actions-button--hover`;

const emits = defineEmits(["onChange"]);

// Handle change page
const handleChangePage = (
  type: "first" | "prev" | "page" | "next" | "last",
  page: number
) => {
  switch (type) {
    case "first": {
      pageValue.value = 1;
      break;
    }
    case "prev": {
      pageValue.value -= 1;
      break;
    }
    case "page": {
      pageValue.value = page;
      break;
    }
    case "next": {
      pageValue.value += 1;
      break;
    }
    case "last": {
      pageValue.value = totalPage.value;
      break;
    }
  }
  emits("onChange", pageValue.value);
};
</script>

<template>
  <div
    :class="[
      'nvl-pagination',
      !hasContent ? 'nvl-pagination--flex' : '',
      wrapClass,
    ]"
  >
    <div v-if="hasContent" :class="['pagination-content', contentClass]">
      {{ content }}
    </div>
    <div :class="['pagination-actions', actionsClass]">
      <!-- First page button -->
      <button
        :class="[
          iconBtnClass,
          pageValue === 1 ? 'actions-button--disabled' : '',
        ]"
        :disabled="pageValue === 1"
        @click="() => handleChangePage('first', 1)"
      >
        <IconAngleDoubleLeft class="button-icon" />
      </button>
      <!-- Prev page button -->
      <button
        :class="[
          iconBtnClass,
          'actions-button--none',
          pageValue === 1 ? 'actions-button--disabled' : '',
        ]"
        :disabled="pageValue === 1"
        @click="() => handleChangePage('prev', 1)"
      >
        <IconAngleLeft class="button-icon" />
      </button>
      <!-- Pagination range -->
      <button
        v-for="page in paginationRange"
        :key="page"
        :class="[
          'actions-button',
          page !== '...' ? 'actions-button--pointer actions-button--hover' : '',
          pageValue === page ? 'actions-button--active' : '',
        ]"
        @click="() => handleChangePage('page', Number(page))"
      >
        {{ page }}
      </button>
      <!-- Next page button -->
      <button
        :class="[
          iconBtnClass,
          'actions-button--none',
          pageValue === totalPage ? 'actions-button--disabled' : '',
        ]"
        :disabled="pageValue === totalPage"
        @click="() => handleChangePage('next', 1)"
      >
        <IconAngleRight class="button-icon" />
      </button>
      <!-- Last page button -->
      <button
        :class="[
          iconBtnClass,
          pageValue === totalPage ? 'actions-button--disabled' : '',
        ]"
        :disabled="pageValue === totalPage"
        @click="() => handleChangePage('last', 1)"
      >
        <IconAngleDoubleRight class="button-icon" />
      </button>
    </div>
  </div>
</template>
