const vLazyload = {
  mounted: (el: HTMLImageElement) => {
    const loadImage = () => {
      el.src = el.dataset.src ?? "";
    };

    const createIntersectionObserver = () => {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadImage();
            observer.unobserve(el);
          }
        });
      });

      observer.observe(el);
    };

    if (window["IntersectionObserver"]) createIntersectionObserver();
    else loadImage();
  },
};

export default vLazyload;
