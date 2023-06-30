import { ELang } from "@/common/enum/lang";

const helper = {
  fomatMoney: (money: number, type: number) => {
    const usdCurrency = `${type === ELang.ENG ? "$" : ""}`;

    const vnCurrency = `${type === ELang.VN ? "đ" : ""}`;

    const fomat = money.toLocaleString();

    return `${usdCurrency} ${fomat} ${vnCurrency}`;
  },

  mapSelectOption: <M>(data: M[], label: keyof M, value: keyof M) => {
    if (!data) return [];

    if (!data.length) return [];

    return data.map((d) => ({
      label: d[label],
      value: d[value],
    }));
  },

  smoothScroll: (e: MouseEvent, smooth: boolean) => {
    if (!smooth) return;

    e.preventDefault();
  
    const scrollElId = (e.target as HTMLAnchorElement).href?.split("#")[1];
  
    const scrollEndEl = document.getElementById(scrollElId);
  
    const easeInCubic = function (t: number) {
      return t * t * t;
    };
  
    const scrollToEl = (
      startTime: number,
      currentTime: number,
      duration: number,
      scrollEndElTop: number,
      startScrollOffset: number
    ) => {
      const runtime = currentTime - startTime;
  
      let progress = runtime / duration;
  
      progress = Math.min(progress, 1);
  
      const ease = easeInCubic(progress);
  
      window.scroll(0, startScrollOffset + scrollEndElTop * ease);
  
      if (runtime < duration) {
        requestAnimationFrame((timestamp) => {
          const currentTime = timestamp || new Date().getTime();
  
          scrollToEl(
            startTime,
            currentTime,
            duration,
            scrollEndElTop,
            startScrollOffset
          );
        });
      }
    };
  
    requestAnimationFrame((timestamp) => {
      const currentTime = timestamp || new Date().getTime();
  
      const duration = 1200;
  
      const start = currentTime;
  
      const scrollEndElTop =
        Number(scrollEndEl?.getBoundingClientRect().top) - 50;
  
      const startScrollOffset = window.scrollY;
  
      scrollToEl(start, currentTime, duration, scrollEndElTop, startScrollOffset);
    });
  }
};

export default helper;
