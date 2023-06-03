import { onUnmounted, watchEffect } from "vue";

const useNavLink = () => {
  const handleScroll = () => {
    const contents = document.querySelectorAll('.nvl-link-content');

    const menuItems = document.querySelectorAll(".nvl-link-item");

    contents.forEach((content: any) => {
      const scrollY = window.scrollY;

      const top = content.offsetTop - 150;

      const height = content.offsetHeight;

      if (scrollY > top && scrollY < top + height) {
        menuItems.forEach((menu) => {
          menu.classList.remove("nvl-link-item--active");

          if (content.id)
            document
              .querySelector(`.nvl-link-item[href*=${content.id}]`)
              ?.classList.add("nvl-link-item--active");
        });
      }
    });
  };

  watchEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => window.removeEventListener("scroll", handleScroll));
};

export default useNavLink;
