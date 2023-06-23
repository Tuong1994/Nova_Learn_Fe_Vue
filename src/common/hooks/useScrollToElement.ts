import { watchEffect, onUnmounted } from "vue";

const useScrollToElement = (elId: string, func: () => void, offsetTop = 150) => {
  const handleScroll = () => {
    const el = document.getElementById(elId);

    if (el) {
      const scrollY = window.scrollY;

      const top = el.offsetTop - offsetTop;

      const height = el.offsetHeight;

      if (scrollY > top && scrollY < top + height) {

        func();
      }
    }
  };

  watchEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => window.removeEventListener("scroll", handleScroll));
};

export default useScrollToElement;
