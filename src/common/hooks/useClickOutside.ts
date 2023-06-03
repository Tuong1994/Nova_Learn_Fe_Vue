import { onUnmounted, onUpdated, ref } from "vue";

const useClickOutside = (nodeRef: any, func?: () => void) => {
  const trigger = ref<boolean>(false);

  const handleClickOutside = (e: MouseEvent) => {
    if (nodeRef.value && !nodeRef.value.contains(e.target as Node)) {
      trigger.value = false;
      func && func();
    }
  };

  onUpdated(() => {
    window.addEventListener("mousedown", handleClickOutside);
  });

  onUnmounted(() => {
    window.removeEventListener("mousedown", handleClickOutside);
  });

  return trigger;
};

export default useClickOutside;
