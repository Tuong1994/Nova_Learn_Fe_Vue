import { onUnmounted, watchEffect } from "vue";

const useReveal = (id: string) => {
  const handleScroll = () => {
    const revealEl = document.getElementById(id);

    if (revealEl) {
      revealEl.classList.add("unreveal");

      const scrollY = window.scrollY;

      const top = revealEl.offsetTop - 200;

      const height = revealEl.offsetHeight;

      if (scrollY > top && scrollY < top + height) {
        revealEl.classList.add("reveal");
      }
    }
  };

  watchEffect(() => window.addEventListener("scroll", handleScroll));

  onUnmounted(() => window.removeEventListener("scroll", handleScroll));
};

export default useReveal;
