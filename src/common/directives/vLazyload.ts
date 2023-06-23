const vLazyload = {
  mounted: (el: HTMLImageElement) => {
    const renderImage = () => {
      el.src = el.dataset.src ?? "";
      el.style.opacity = "1";
      el.style.animation = "fadeIn 0.4s linear 1"
    };

    const createIntersectionObserver = () => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              renderImage();
              observer.unobserve(el);
            } else {
              el.style.opacity = "0";
            }
          });
        },
        {
          threshold: 0.7,
        }
      );

      observer.observe(el);
    };

    if (window["IntersectionObserver"]) createIntersectionObserver();
    else renderImage();
  },
};

export default vLazyload;
