import { Ref, watch } from "vue";

const useOverflow = (trigger: Ref<boolean>) => {
  watch(trigger, (newValue) => {
    if (newValue) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  });
};

export default useOverflow;
